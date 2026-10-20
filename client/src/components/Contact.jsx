import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons.jsx';
import confetti from 'canvas-confetti';

export default function Contact({ profile }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
    responseMsg: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitting: false,
        success: false,
        error: 'Please fill in your name, email, and message.',
        responseMsg: ''
      });
      return;
    }

    setStatus({ submitting: true, success: false, error: null, responseMsg: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({
          submitting: false,
          success: true,
          error: null,
          responseMsg: data.message || "Thank you for reaching out! Aditya has received your message."
        });
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Trigger celebratory confetti effect
        try {
          confetti({
            particleCount: 75,
            spread: 70,
            origin: { y: 0.65 },
            colors: ['#ff5c00', '#ff8533', '#ffffff', '#ffd043']
          });
        } catch (e) {
          // ignore if canvas-confetti is not loaded
        }
      } else {
        setStatus({
          submitting: false,
          success: false,
          error: data.error || 'Failed to deliver message. Please try sending directly via email.',
          responseMsg: ''
        });
      }
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error: 'Network connection error. You can email Aditya directly at aadinayak2006@gmail.com.',
        responseMsg: ''
      });
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="ambient-glow-top"></div>
      <div className="container">
        <div className="section-header-row">
          <div>
            <div className="section-tag">Let's Connect</div>
            <h2 className="section-title">Initiate a Conversation</h2>
          </div>
          <p className="section-subtitle">
            Open for Summer 2025/2026 internships, software engineering roles, hackathon collaborations, and academic research queries.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct channels & Quick Connect */}
          <div className="contact-info-panel glass-card">
            <h3 className="contact-panel-title">Direct Inquiries</h3>
            <p className="contact-panel-desc">
              Whether you are an engineering recruiter, startup founder, or fellow student looking to collaborate, feel free to drop a message or connect directly.
            </p>

            <div className="contact-channels">
              <a href="mailto:aadinayak2006@gmail.com" className="contact-channel-item">
                <div className="channel-icon-wrap">
                  <Mail size={20} className="text-accent" />
                </div>
                <div>
                  <span className="channel-label">Email Address</span>
                  <span className="channel-val">aadinayak2006@gmail.com</span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/adityanayak13"
                target="_blank"
                rel="noreferrer"
                className="contact-channel-item"
              >
                <div className="channel-icon-wrap">
                  <LinkedinIcon size={20} className="text-accent" />
                </div>
                <div>
                  <span className="channel-label">LinkedIn Profile</span>
                  <span className="channel-val">linkedin.com/in/adityanayak13</span>
                </div>
              </a>

              <a
                href="https://github.com/AdityaNayak13"
                target="_blank"
                rel="noreferrer"
                className="contact-channel-item"
              >
                <div className="channel-icon-wrap">
                  <GithubIcon size={20} className="text-accent" />
                </div>
                <div>
                  <span className="channel-label">GitHub Repository</span>
                  <span className="channel-val">github.com/AdityaNayak13</span>
                </div>
              </a>

              <div className="contact-channel-item">
                <div className="channel-icon-wrap">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div>
                  <span className="channel-label">Current Location</span>
                  <span className="channel-val">Jaipur / Banswara, Rajasthan, India</span>
                </div>
              </div>
            </div>

            <div className="contact-banner">
              <Sparkles size={18} className="text-accent" />
              <span>Seeking Summer Internships in Full-Stack Web, Backend & Machine Learning.</span>
            </div>
          </div>

          {/* Right Column: Interactive MERN Stack Contact Form */}
          <div className="contact-form-panel glass-card">
            <h3 className="contact-panel-title">Send a Direct Message</h3>
            <p className="contact-panel-desc">
              Messages are processed through the portfolio's Express & MongoDB backend API.
            </p>

            {status.success ? (
              <div className="form-success-alert">
                <CheckCircle2 size={32} className="text-accent" />
                <h4 className="success-heading">Message Dispatched!</h4>
                <p className="success-text">{status.responseMsg}</p>
                <button
                  onClick={() => setStatus({ submitting: false, success: false, error: null, responseMsg: '' })}
                  className="btn-secondary"
                  style={{ marginTop: '16px' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                {status.error && (
                  <div className="form-error-alert">
                    <AlertCircle size={18} />
                    <span>{status.error}</span>
                  </div>
                )}

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="e.g. Alex Johnson"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Your Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="subject">Subject / Inquiry Type</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="e.g. Summer Internship Opportunity / Project Collaboration"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Write your note or project details here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-textarea"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status.submitting}
                  className="btn-primary form-submit-btn"
                >
                  {status.submitting ? (
                    <span>Processing Message...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
