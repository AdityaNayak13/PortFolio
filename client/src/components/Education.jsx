import React from 'react';
import { GraduationCap, Award, Calendar, CheckCircle2, Trophy, Users, HeartHandshake } from 'lucide-react';

export default function Education({ education }) {
  const eduList = education || [
    {
      institution: "JK Lakshmipat University, Jaipur",
      degree: "Bachelor of Technology — Computer Science & Engineering (Core)",
      period: "Jul 2024 – Jul 2028",
      score: "7.46 CGPA (Completed 4 Semesters)",
      status: "Pre-Final Year / 3rd Year",
      details: [
        "Core coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Machine Learning, Digital Image Processing, Full Stack Web Development.",
        "Secretary of Council of Campus Life (Academic Year 2025–26).",
        "Active Volunteer, Coordinator, and Core Committee member across 19 university events covering media, photography, logistics, and problem statement design.",
        "Member of Annunad (Music Club) and Nakshatra (Astronomy Club)."
      ],
      badge: "Current University Degree"
    },
    {
      institution: "Allen Career Institute & Shiv Jyoti Convent School, Kota",
      degree: "Senior Secondary (Class 11 & 12) — Mathematics & Science",
      period: "Jun 2022 – Apr 2024",
      score: "78% (Class 12) | JEE Main Qualified",
      status: "Completed",
      details: [
        "Intensive analytical curriculum focusing on Advanced Mathematics, Physics, and Chemistry.",
        "Successfully qualified the national Joint Entrance Examination (JEE Main)."
      ],
      badge: "Competitive Preparation"
    },
    {
      institution: "Saint Paul Senior Secondary School, Banswara",
      degree: "Secondary School (Class 10)",
      period: "Apr 2010 – May 2022",
      score: "94% Distinction",
      status: "Completed",
      details: [
        "Graduated with distinction scoring 94% in Class 10 board examinations.",
        "Team Captain for Annual Sports Fest (Tug of War Team).",
        "Member of U-14 Cricket Team (2019) and Basketball Team."
      ],
      badge: "High Distinction"
    }
  ];

  return (
    <section className="education-section" id="education">
      <div className="container">
        <div className="section-header-row">
          <div>
            <div className="section-tag">Academic Journey</div>
            <h2 className="section-title">Education & Campus Leadership</h2>
          </div>
          <p className="section-subtitle">
            Strong academic foundations combined with active university governance and sports leadership.
          </p>
        </div>

        <div className="education-grid">
          {eduList.map((edu, idx) => (
            <div key={idx} className="education-card glass-card">
              <div className="edu-card-top">
                <div className="edu-icon-wrap">
                  <GraduationCap size={24} className="edu-icon-accent" />
                </div>
                <span className="badge badge-accent">{edu.badge}</span>
              </div>

              <h3 className="edu-institution">{edu.institution}</h3>
              <p className="edu-degree">{edu.degree}</p>

              <div className="edu-meta-row">
                <span className="edu-period">
                  <Calendar size={14} />
                  {edu.period}
                </span>
                <span className="edu-score-badge">
                  <Trophy size={14} />
                  {edu.score}
                </span>
              </div>

              <div className="edu-details-list">
                {edu.details.map((detail, dIdx) => (
                  <div key={dIdx} className="edu-detail-item">
                    <CheckCircle2 size={15} className="bullet-icon-orange" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Campus Leadership Spotlight Banner */}
        <div className="leadership-banner glass-card">
          <div className="leadership-left">
            <Users size={32} className="text-accent" />
            <div>
              <h3 className="leadership-title">Secretary, Council of Campus Life</h3>
              <p className="leadership-sub">
                JK Lakshmipat University, Jaipur &middot; Academic Year 2025–26
              </p>
              <p className="leadership-desc">
                Overseeing student affairs, spearheading inter-club collaborations between technical and cultural societies, 
                and facilitating campus community initiatives across 19+ organized university fests and technical events.
              </p>
            </div>
          </div>
          <div className="leadership-badges">
            <span className="leadership-pill">19+ Events Coordinated</span>
            <span className="leadership-pill">Annunad Music Club</span>
            <span className="leadership-pill">Nakshatra Astronomy Club</span>
          </div>
        </div>
      </div>
    </section>
  );
}
