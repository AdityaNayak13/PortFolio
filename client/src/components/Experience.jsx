import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Experience({ experience }) {
  const experiences = experience || [
    {
      id: "edutrack-internship",
      role: "Full Stack Engineer (Internship)",
      organization: "JK Lakshmipat University, Jaipur",
      period: "May 2026 – Aug 2026 (4 mos)",
      mode: "Hybrid (Jaipur / Banswara)",
      summary: "Spearheaded front-end modernization and architectural improvements for EduTrack Learning Management System (LMS), delivering unified role-based workflows and an AI-driven student query assistant.",
      achievements: [
        "Architected role-based interfaces for Student, Teacher, and Admin portals, ensuring strict visual harmony and hierarchical layout consistency.",
        "Designed and implemented high-performance dashboards, cards, typography, and adaptive Light/Dark theme switching.",
        "Integrated an interactive conversational AI assistant directly into the Student Portal to resolve course-related and academic queries.",
        "Developed standardized, reusable card components and micro-interaction states (hover feedback, transitions, loaders).",
        "Collaborated using structured Git workflows, code reviews, branch releases, and resolved complex upstream merge conflicts."
      ],
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "UI/UX Architecture", "Git", "GitHub"],
      badge: "Flagship Technical Internship"
    },
    {
      id: "internshala-isp",
      role: "Student Intern (ISP Program)",
      organization: "Internshala",
      period: "Jun 2026 – Jul 2026 (2 mos)",
      mode: "Remote",
      summary: "Selected into the competitive Internshala Student Partner initiative, driving student awareness, career readiness, and industry-oriented internship adoption.",
      achievements: [
        "Conducted campus awareness drives connecting university peers with verified internship opportunities and skill-building bootcamps.",
        "Facilitated career training registrations and guided students on building competitive technical application profiles.",
        "Achieved performance-based recognition milestones and program commendations."
      ],
      skills: ["Campus Outreach", "Strategic Communication", "Student Leadership", "Program Coordination"],
      badge: "Student Leadership Program"
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <div className="section-header-row">
          <div>
            <div className="section-tag">Career Milestones</div>
            <h2 className="section-title">Professional Experience</h2>
          </div>
          <p className="section-subtitle">
            Hands-on software development and university leadership engagements verified through institutional offer letters and tangible deliverables.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id || index} className="experience-card glass-card">
              <div className="experience-card-header">
                <div>
                  <div className="experience-badges-wrap">
                    <span className="badge badge-accent">
                      <Briefcase size={13} />
                      {exp.role}
                    </span>
                    {exp.badge && (
                      <span className="badge badge-subtle">
                        <ShieldCheck size={13} className="text-accent" />
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="experience-org">{exp.organization}</h3>
                </div>

                <div className="experience-meta">
                  <div className="meta-item">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="meta-item">
                    <MapPin size={14} />
                    <span>{exp.mode}</span>
                  </div>
                </div>
              </div>

              <p className="experience-summary">{exp.summary}</p>

              <div className="experience-achievements">
                <h4 className="achievements-heading">Key Deliverables & Responsibilities:</h4>
                <ul className="achievements-list">
                  {exp.achievements.map((item, idx) => (
                    <li key={idx} className="achievement-item">
                      <CheckCircle2 size={16} className="bullet-icon-orange" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="experience-footer">
                <span className="skills-used-label">Technologies & Focus:</span>
                <div className="tech-chips-wrap">
                  {exp.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="tech-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
