import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons.jsx';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrap">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <div className="navbar-brand">
              <div className="brand-symbol">AN</div>
              <div className="brand-text">
                <span className="brand-name">Aditya Nayak</span>
                <span className="brand-role">Full-Stack & Intelligent Systems</span>
              </div>
            </div>
            <p className="footer-desc">
              Pre-Final Year B.Tech CSE Core student at JK Lakshmipat University, Jaipur. Building full-stack web platforms and practical machine learning solutions.
            </p>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-list">
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Internship Experience</a></li>
              <li><a href="#projects">Selected Projects</a></li>
              <li><a href="#skills">Technical Arsenal</a></li>
              <li><a href="#education">Education & Leadership</a></li>
              <li><a href="#certifications">Certifications</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">Channels</h4>
            <ul className="footer-nav-list">
              <li>
                <a href="https://www.linkedin.com/in/adityanayak13" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/AdityaNayak13" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="mailto:aadinayak2006@gmail.com">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-text">
            <span>&copy; {new Date().getFullYear()} Aditya Nayak. All rights reserved.</span>
            <span className="footer-stack-note">Built with MERN Stack (MongoDB, Express, React, Node.js)</span>
          </div>

          <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll to top of page">
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
