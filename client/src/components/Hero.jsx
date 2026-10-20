import React from 'react';
import { ArrowDown, Mail, ExternalLink, Sparkles, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons.jsx';

export default function Hero({ profile }) {
  const metrics = profile?.metrics || [
    { label: "Academic CGPA", value: "7.46", sub: "After 4 Semesters" },
    { label: "Campus Events Coordinated", value: "19+", sub: "Leadership & Core" },
    { label: "Featured Projects", value: "5+", sub: "Full Stack & ML" },
    { label: "Industry Credentials", value: "3+", sub: "Red Hat, Infosys, Cyberous" }
  ];

  return (
    <section className="hero-section" id="about">
      <div className="ambient-glow-top"></div>
      <div className="ambient-glow-right"></div>

      <div className="container hero-container">
        {/* Top Header / Status Pill */}
        <div className="hero-top-badge">
          <span className="pulse-beacon"></span>
          <span className="badge-text">Available for Summer Internship Roles</span>
          <span className="badge-location">Remote / Hybrid</span>
        </div>

        {/* Hero Main Grid: Text on Left, Photo & Framing on Right */}
        <div className="hero-grid">
          {/* Left Column: Big Typographic Headline & Intro */}
          <div className="hero-content">
            <p className="hero-intro-label">
              <span>Full-Stack Developer</span> &middot; <span>Pre-Final Year B.Tech CSE</span>
            </p>

            <h1 className="hero-title">
              Aditya <span className="title-gradient">Nayak</span>
            </h1>

            <p className="hero-description">
              Pre-final year Computer Science Engineering student at <strong>JK Lakshmipat University, Jaipur</strong>. 
              Passionate about engineering scalable <strong>MERN stack architectures</strong>, intuitive role-based platforms, 
              and practical <strong>computer vision & machine learning</strong> solutions.
            </p>

            {/* CTAs */}
            <div className="hero-actions">
              <a href="#projects" className="btn-primary hero-btn">
                <span>View Projects</span>
                <ArrowDown size={17} />
              </a>
              <a href="#experience" className="btn-secondary hero-btn">
                <span>Internship Experience</span>
              </a>
            </div>

            {/* Direct Social Links */}
            <div className="hero-socials">
              <span className="socials-label">Connect:</span>
              <a
                href={profile?.links?.github || "https://github.com/AdityaNayak13"}
                target="_blank"
                rel="noreferrer"
                className="social-pill"
                title="GitHub Profile"
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>
              <a
                href={profile?.links?.linkedin || "https://www.linkedin.com/in/adityanayak13"}
                target="_blank"
                rel="noreferrer"
                className="social-pill"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${profile?.links?.email || "aadinayak2006@gmail.com"}`}
                className="social-pill"
                title="Send an Email"
              >
                <Mail size={16} />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Portrait Card with Dominic luxury styling */}
          <div className="hero-visual">
            <div className="portrait-frame">
              <div className="portrait-glow"></div>
              <div className="portrait-image-wrapper">
                <img
                  src="/aditya-photo.jpg"
                  alt="Aditya Nayak - B.Tech CSE Pre-Final Year"
                  className="portrait-img"
                  loading="eager"
                />
              </div>

              {/* Floating Glass Badges */}
              <div className="floating-badge badge-top-right">
                <Sparkles size={16} className="badge-icon-orange" />
                <div>
                  <span className="floating-badge-title">JKLU Core CSE</span>
                  <span className="floating-badge-sub">Batch of 2028</span>
                </div>
              </div>

              <div className="floating-badge badge-bottom-left">
                <Award size={16} className="badge-icon-orange" />
                <div>
                  <span className="floating-badge-title">Campus Leadership</span>
                  <span className="floating-badge-sub">Secretary, Campus Life</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats / Numbers Banner inspired by Dominic template */}
        <div className="hero-stats-bar">
          {metrics.map((item, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-number">{item.value}</div>
              <div className="stat-label">{item.label}</div>
              <div className="stat-sub">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
