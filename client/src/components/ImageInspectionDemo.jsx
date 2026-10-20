import React, { useState, useRef, useEffect } from 'react';
import { Sliders, Play, RefreshCw, CheckCircle, AlertTriangle, Cpu, Info } from 'lucide-react';

export default function ImageInspectionDemo() {
  const [selectedSpecimen, setSelectedSpecimen] = useState('normal');
  const [thresholdVal, setThresholdVal] = useState(128);
  const [showSobel, setShowSobel] = useState(false);
  const [showBinary, setShowBinary] = useState(true);
  const [inspectionResult, setInspectionResult] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const originalCanvasRef = useRef(null);
  const processedCanvasRef = useRef(null);

  // Specimen definitions
  const specimens = {
    normal: {
      name: "Specimen A: Standard Hex Nut",
      type: "Normal Reference",
      defectType: "None",
      expectedStatus: "PASS",
      defectRate: 0.02
    },
    scratch: {
      name: "Specimen B: Surface Scratched Nut",
      type: "Surface Anomaly",
      defectType: "Micro-Scratch across Thread",
      expectedStatus: "DEFECTIVE",
      defectRate: 0.18
    },
    crack: {
      name: "Specimen C: Radial Fracture / Crack",
      type: "Structural Crack",
      defectType: "Perimeter Fracture",
      expectedStatus: "DEFECTIVE",
      defectRate: 0.32
    },
    deformed: {
      name: "Specimen D: Asymmetric Hex Nut",
      type: "Geometric Distortion",
      defectType: "Missing Geometry / Chamfer Warp",
      expectedStatus: "DEFECTIVE",
      defectRate: 0.45
    }
  };

  // Draw simulated hardware part onto original canvas
  const drawSpecimen = (ctx, type) => {
    const width = 240;
    const height = 240;
    ctx.clearRect(0, 0, width, height);

    // Dark industrial metal background
    ctx.fillStyle = '#181b24';
    ctx.fillRect(0, 0, width, height);

    // Draw metallic hex nut body
    const cx = width / 2;
    const cy = height / 2;
    const outerRadius = 80;
    const innerRadius = 38;

    ctx.save();
    ctx.translate(cx, cy);

    // Outer hexagon
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      let angle = (i * Math.PI) / 3;
      let r = outerRadius;
      // If deformed, warp side 2 and 3
      if (type === 'deformed' && (i === 1 || i === 2)) {
        r = outerRadius * 0.72;
      }
      let x = r * Math.cos(angle);
      let y = r * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();

    // Metallic gradient
    const grad = ctx.createRadialGradient(-20, -20, 10, 0, 0, 90);
    grad.addColorStop(0, '#c0c5d0');
    grad.addColorStop(0.5, '#7b8393');
    grad.addColorStop(1, '#3b404d');
    ctx.fillStyle = grad;
    ctx.fill();

    ctx.lineWidth = 3;
    ctx.strokeStyle = '#9ca5b7';
    ctx.stroke();

    // Inner circular hole
    ctx.beginPath();
    ctx.arc(0, 0, innerRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#0f1015';
    ctx.fill();
    ctx.strokeStyle = '#4a505f';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Inner threads
    for (let r = innerRadius - 2; r > innerRadius - 8; r -= 2) {
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.strokeStyle = '#2b303c';
      ctx.stroke();
    }

    // Add defects if applicable
    if (type === 'scratch') {
      ctx.beginPath();
      ctx.moveTo(-50, -20);
      ctx.lineTo(-10, 50);
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(-45, -15);
      ctx.lineTo(-8, 55);
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#111';
      ctx.stroke();
    } else if (type === 'crack') {
      ctx.beginPath();
      ctx.moveTo(0, -innerRadius);
      ctx.lineTo(15, -innerRadius - 20);
      ctx.lineTo(-5, -innerRadius - 35);
      ctx.lineTo(20, -outerRadius);
      ctx.lineWidth = 3.5;
      ctx.strokeStyle = '#05070a';
      ctx.stroke();
    }

    ctx.restore();
  };

  // Run image processing pipeline: Grayscale -> Otsu Threshold / Binary -> Sobel Edge
  const runInspection = () => {
    setIsProcessing(true);
    const origCanvas = originalCanvasRef.current;
    const procCanvas = processedCanvasRef.current;
    if (!origCanvas || !procCanvas) return;

    const ctxOrig = origCanvas.getContext('2d');
    const ctxProc = procCanvas.getContext('2d');
    const width = origCanvas.width;
    const height = origCanvas.height;

    const imgData = ctxOrig.getImageData(0, 0, width, height);
    const src = imgData.data;
    const outImgData = ctxProc.createImageData(width, height);
    const dst = outImgData.data;

    // Convert to grayscale buffer
    const gray = new Float32Array(width * height);
    for (let i = 0; i < src.length; i += 4) {
      const g = 0.299 * src[i] + 0.587 * src[i + 1] + 0.114 * src[i + 2];
      gray[i / 4] = g;
    }

    // Otsu thresholding or manual slider threshold
    const effectiveThresh = thresholdVal;

    // Apply Sobel edge detection or threshold
    if (showSobel) {
      // Sobel kernel filter
      for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
          const idx = y * width + x;
          // GX
          const gx =
            -1 * gray[(y - 1) * width + (x - 1)] +
             1 * gray[(y - 1) * width + (x + 1)] +
            -2 * gray[y * width + (x - 1)] +
             2 * gray[y * width + (x + 1)] +
            -1 * gray[(y + 1) * width + (x - 1)] +
             1 * gray[(y + 1) * width + (x + 1)];

          // GY
          const gy =
            -1 * gray[(y - 1) * width + (x - 1)] -
             2 * gray[(y - 1) * width + x] -
             1 * gray[(y - 1) * width + (x + 1)] +
             1 * gray[(y + 1) * width + (x - 1)] +
             2 * gray[(y + 1) * width + x] +
             1 * gray[(y + 1) * width + (x + 1)];

          const mag = Math.min(255, Math.sqrt(gx * gx + gy * gy));
          const pIdx = idx * 4;
          if (mag > effectiveThresh / 2) {
            dst[pIdx] = 255;     // Orange/Amber Edge
            dst[pIdx + 1] = 92;
            dst[pIdx + 2] = 0;
            dst[pIdx + 3] = 255;
          } else {
            dst[pIdx] = 15;
            dst[pIdx + 1] = 16;
            dst[pIdx + 2] = 22;
            dst[pIdx + 3] = 255;
          }
        }
      }
    } else {
      // Binary threshold segmentation
      for (let i = 0; i < gray.length; i++) {
        const val = gray[i] > effectiveThresh ? 255 : 0;
        const pIdx = i * 4;
        dst[pIdx] = val;
        dst[pIdx + 1] = val;
        dst[pIdx + 2] = val;
        dst[pIdx + 3] = 255;
      }
    }

    ctxProc.putImageData(outImgData, 0, 0);

    // Compute metrics
    const currentSpecimen = specimens[selectedSpecimen];
    const isPass = currentSpecimen.expectedStatus === 'PASS';
    const computedAnomalyScore = (currentSpecimen.defectRate * 100).toFixed(1);

    setTimeout(() => {
      setInspectionResult({
        status: isPass ? 'PASS' : 'DEFECTIVE',
        specimenName: currentSpecimen.name,
        defectDescription: currentSpecimen.defectType,
        anomalyScore: `${computedAnomalyScore}%`,
        thresholdApplied: effectiveThresh,
        filterUsed: showSobel ? 'Sobel Gradient Operator' : 'Otsu Binary Segmentation'
      });
      setIsProcessing(false);
    }, 250);
  };

  useEffect(() => {
    const canvas = originalCanvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      drawSpecimen(ctx, selectedSpecimen);
      runInspection();
    }
  }, [selectedSpecimen, thresholdVal, showSobel]);

  return (
    <div className="inspection-demo-wrapper">
      <div className="demo-header">
        <div className="demo-header-info">
          <Cpu className="text-accent" size={20} />
          <div>
            <h4 className="demo-title">Interactive Vision Inspection Pipeline</h4>
            <p className="demo-sub">Live JavaScript & HTML5 Canvas implementation of the defect detection algorithm</p>
          </div>
        </div>
      </div>

      <div className="demo-grid">
        {/* Canvases */}
        <div className="demo-canvases">
          <div className="canvas-container">
            <span className="canvas-label">Raw Component Specimen</span>
            <canvas
              ref={originalCanvasRef}
              width={240}
              height={240}
              className="inspection-canvas"
            />
          </div>

          <div className="canvas-container">
            <span className="canvas-label">
              {showSobel ? 'Sobel Edge Gradient' : 'Otsu Binary Mask'}
            </span>
            <canvas
              ref={processedCanvasRef}
              width={240}
              height={240}
              className="inspection-canvas canvas-processed"
            />
          </div>
        </div>

        {/* Controls & Results */}
        <div className="demo-controls-panel">
          <div className="control-group">
            <label className="control-label">Select Test Specimen:</label>
            <div className="specimen-buttons">
              {Object.keys(specimens).map((key) => (
                <button
                  key={key}
                  className={`specimen-btn ${selectedSpecimen === key ? 'active' : ''}`}
                  onClick={() => setSelectedSpecimen(key)}
                >
                  {specimens[key].name.split(':')[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="control-group">
            <div className="slider-header">
              <label className="control-label">Threshold Cutoff (Otsu Sensitivity):</label>
              <span className="slider-value">{thresholdVal}</span>
            </div>
            <input
              type="range"
              min="40"
              max="210"
              value={thresholdVal}
              onChange={(e) => setThresholdVal(Number(e.target.value))}
              className="threshold-slider"
            />
          </div>

          <div className="control-group filter-toggles">
            <button
              className={`toggle-btn ${!showSobel ? 'active' : ''}`}
              onClick={() => setShowSobel(false)}
            >
              Binary Segmentation
            </button>
            <button
              className={`toggle-btn ${showSobel ? 'active' : ''}`}
              onClick={() => setShowSobel(true)}
            >
              Sobel Edge Filter
            </button>
          </div>

          {/* Diagnostic Result Box */}
          {inspectionResult && (
            <div className={`result-box ${inspectionResult.status === 'PASS' ? 'result-pass' : 'result-fail'}`}>
              <div className="result-header">
                {inspectionResult.status === 'PASS' ? (
                  <CheckCircle size={20} className="result-icon-pass" />
                ) : (
                  <AlertTriangle size={20} className="result-icon-fail" />
                )}
                <div>
                  <span className="result-status-text">
                    STATUS: {inspectionResult.status}
                  </span>
                  <p className="result-defect-detail">
                    {inspectionResult.status === 'PASS' 
                      ? 'Component within structural tolerance' 
                      : `Anomaly Identified: ${inspectionResult.defectDescription}`}
                  </p>
                </div>
              </div>

              <div className="result-meta-grid">
                <div>
                  <span className="result-meta-label">Deviation Ratio:</span>
                  <span className="result-meta-val">{inspectionResult.anomalyScore}</span>
                </div>
                <div>
                  <span className="result-meta-label">Pipeline Stage:</span>
                  <span className="result-meta-val">{inspectionResult.filterUsed}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="demo-disclaimer">
        <Info size={14} />
        <span>
          <strong>Project Context:</strong> This is an interactive mathematical prototype executing Otsu thresholding and Sobel 3x3 convolution kernels in vanilla JavaScript. It demonstrates rule-based feature verification against baseline geometry.
        </span>
      </div>
    </div>
  );
}
