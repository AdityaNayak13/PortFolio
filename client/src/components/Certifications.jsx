import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Calendar, FileText, ExternalLink } from 'lucide-react';

export default function Certifications({ certifications }) {
  const certList = certifications || [
    {
      title: "Red Hat System Administration I (RH124 - RHA) - Ver. 10",
      issuer: "Red Hat",
      date: "Apr 2026",
      credentialId: "2024BTECH032",
      skills: ["Operating Systems", "Linux Administration", "Shell Environments"],
      note: "Rigorous hands-on course covering enterprise Linux administration, file systems, permissions, storage, and service management."
    },
    {
      title: "Database Management System Part - 1",
      issuer: "Infosys Springboard",
      date: "Nov 2025",
      credentialId: "2024BTECH032",
      skills: ["DBMS", "MySQL", "Relational Modeling", "SQL Queries"],
      note: "Comprehensive certification covering relational data models, SQL queries, transactions, and integrity constraints."
    },
    {
      title: "Cybersecurity Workshop — Cyberthrive",
      issuer: "Cyberous Pvt. Ltd.",
      date: "Sep 2026",
      credentialId: "2024BTECH032",
      skills: ["Cybersecurity", "Network Fundamentals", "Linux Security"],
      note: "Specialized workshop focusing on threat awareness, penetration principles, and defensive network posture."
    }
  ];

  return (
    <section className="certifications-section" id="certifications">
      <div className="container">
        <div className="section-header-row">
          <div>
            <div className="section-tag">Verified Credentials</div>
            <h2 className="section-title">Licenses & Certifications</h2>
          </div>
          <p className="section-subtitle">
            Industry training programs and vendor-backed certifications validating operating systems, database systems, and security competencies.
          </p>
        </div>

        <div className="certifications-grid">
          {certList.map((cert, idx) => (
            <div key={idx} className="cert-card glass-card">
              <div className="cert-card-top">
                <div className="cert-badge-icon-wrap">
                  <Award size={24} className="cert-icon-accent" />
                </div>
                <span className="badge badge-subtle">
                  <Calendar size={13} />
                  {cert.date}
                </span>
              </div>

              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">Issued by <strong>{cert.issuer}</strong></p>
              <p className="cert-note">{cert.note}</p>

              <div className="cert-cred-row">
                <span className="cert-cred-label">Credential ID:</span>
                <code className="cert-cred-id">{cert.credentialId}</code>
              </div>

              <div className="cert-skills-wrap">
                {cert.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="tech-chip">
                    {skill}
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
