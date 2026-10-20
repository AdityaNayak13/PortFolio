import React from 'react';
import { Layers, Eye, Cpu, ArrowRight } from 'lucide-react';

export default function FocusAreas() {
  const cards = [
    {
      num: "01",
      icon: <Layers size={28} className="card-icon-accent" />,
      title: "Full-Stack Web Architecture",
      subtitle: "MERN Stack, Modular Component Systems & Role-Based Access",
      desc: "Architecting end-to-end web applications with React.js, Node.js, Express, and MongoDB. Proven experience building role-segregated portals, dynamic light/dark theming, and integrated AI assistant interfaces.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"]
    },
    {
      num: "02",
      icon: <Eye size={28} className="card-icon-accent" />,
      title: "Computer Vision & Image Processing",
      subtitle: "Interactive Canvas Inspection & Classical Vision Pipelines",
      desc: "Implementing automated visual quality pipelines utilizing box-blur denoising, contrast stretching, Otsu adaptive thresholding, and Sobel edge detection to inspect physical components and surface anomalies.",
      tags: ["Digital Image Processing", "Canvas API", "Otsu Thresholding", "Sobel Filters"]
    },
    {
      num: "03",
      icon: <Cpu size={28} className="card-icon-accent" />,
      title: "Data Analysis & Applied ML",
      subtitle: "Feature Engineering, Distribution Modeling & Classification",
      desc: "Transforming raw behavioral data through logarithmic scaling, outlier analysis, and feature engineering. Building predictive classification workflows to categorize high-dimensional trends and virality markers.",
      tags: ["Python", "Feature Engineering", "EDA", "Classification Models"]
    }
  ];

  return (
    <section className="focus-section" id="focus">
      <div className="container">
        <div className="section-header-row">
          <div>
            <div className="section-tag">Core Technical Domains</div>
            <h2 className="section-title">Engineering Solutions That Deliver Impact</h2>
          </div>
          <p className="section-subtitle">
            Combining robust software fundamentals, clean code architecture, and hands-on domain exploration across web technologies and intelligent systems.
          </p>
        </div>

        <div className="focus-grid">
          {cards.map((card) => (
            <div key={card.num} className="focus-card glass-card">
              <div className="focus-card-top">
                <span className="focus-card-num">{card.num}</span>
                <div className="focus-card-icon-wrap">{card.icon}</div>
              </div>

              <h3 className="focus-card-title">{card.title}</h3>
              <p className="focus-card-sub">{card.subtitle}</p>
              <p className="focus-card-desc">{card.desc}</p>

              <div className="focus-card-tags">
                {card.tags.map((t, idx) => (
                  <span key={idx} className="tech-chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
