import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, AlertCircle, Layers, Cpu, Database, Server } from 'lucide-react';
import { GithubIcon } from './BrandIcons.jsx';
import ImageInspectionDemo from './ImageInspectionDemo.jsx';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const isVisionProject = project.id === 'defective-product-detection';

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <span className="badge badge-accent modal-cat-badge">{project.category}</span>
            <h3 className="modal-title">{project.title}</h3>
            <p className="modal-tagline">{project.tagline}</p>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Interactive Inspection Demo Embedded for Vision Project */}
          {isVisionProject && (
            <div className="modal-demo-container">
              <ImageInspectionDemo />
            </div>
          )}

          {/* Project Overview */}
          <div className="modal-section">
            <h4 className="modal-section-heading">Project Overview & Context</h4>
            <p className="modal-text">{project.description}</p>
          </div>

          {/* Key Architecture & Features */}
          <div className="modal-section">
            <h4 className="modal-section-heading">Key Architecture & Features</h4>
            <ul className="modal-highlights-list">
              {project.highlights?.map((hl, idx) => (
                <li key={idx} className="modal-highlight-item">
                  <CheckCircle2 size={16} className="bullet-icon-orange" />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Chips */}
          <div className="modal-section">
            <h4 className="modal-section-heading">Technologies Used</h4>
            <div className="tech-chips-wrap">
              {project.tags?.map((tag, idx) => (
                <span key={idx} className="tech-chip">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Verification & Accuracy Note (Strict adherence to brief) */}
          <div className="modal-verification-box">
            <AlertCircle size={18} className="text-accent" />
            <div>
              <span className="verification-label">Scope & Status: {project.status}</span>
              <p className="verification-note">
                Documented strictly based on verified coursework, hackathon submissions, and verified internship deliverables.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <a
            href="https://github.com/AdityaNayak13"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary modal-action-btn"
          >
            <GithubIcon size={16} />
            <span>GitHub Profile</span>
          </a>
          <button onClick={onClose} className="btn-primary modal-action-btn">
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
}
