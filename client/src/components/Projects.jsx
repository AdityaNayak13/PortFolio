import React, { useState } from 'react';
import { Layers, Eye, Cpu, Database, ArrowUpRight, Play, Sparkles } from 'lucide-react';
import ProjectModal from './ProjectModal.jsx';

export default function Projects({ projects }) {
  const [filter, setFilter] = useState('all');
  const [activeProject, setActiveProject] = useState(null);

  const defaultProjects = [
    {
      id: "edutrack",
      title: "EduTrack: Learning Management System",
      category: "Full-Stack Web Application",
      featured: true,
      tagline: "Role-based institutional LMS with AI query assistant and responsive dashboards",
      summary: "An institutional Learning Management System interface featuring role-based workflows for Students, Teachers, and Admins, dynamic theme switching, and an integrated conversational AI assistant.",
      description: "EduTrack delivers a unified educational hub designed to streamline classroom workflows. It features distinct role-based access for students, educators, and administrators, accompanied by modern dashboards, real-time feedback animations, and conversational AI support for student queries.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS3", "Git"],
      highlights: [
        "Role-based authentication & portal routing (Student, Teacher, Admin)",
        "Conversational AI assistant interface integrated into Student Portal",
        "Dynamic Light & Dark mode support with persistent state",
        "Standardized modular card components and analytics overview"
      ],
      type: "Internship Engineering",
      status: "Verified Internship Deliverable"
    },
    {
      id: "defective-product-detection",
      title: "Defective Product Detection System",
      category: "Computer Vision & Image Processing",
      featured: true,
      tagline: "Interactive visual quality inspection pipeline for manufacturing defect classification",
      summary: "An automated visual quality inspection prototype that processes hardware images (nuts/fasteners) through Otsu thresholding and Sobel edge detection to classify structural anomalies.",
      description: "Developed as a B.Tech CSE project at JK Lakshmipat University. It constructs a full digital image processing pipeline in JavaScript and Canvas: box-blur denoising, contrast stretching, Otsu thresholding, Sobel gradient edge detection, and rule-based feature matching against baseline non-defective profiles.",
      tags: ["JavaScript", "HTML5 Canvas", "Image Processing", "Sobel Filter", "Otsu Thresholding"],
      highlights: [
        "Multi-stage pipeline: Denoising → Contrast Stretching → Otsu Segmentation → Edge Detection",
        "Interactive Canvas inspection testing real product specimens",
        "Rule-based metric evaluation measuring area, perimeter, and edge deviations",
        "Live interactive demo embedded directly in the portfolio"
      ],
      type: "University B.Tech Project",
      status: "Interactive Canvas Prototype",
      hasInteractiveDemo: true
    },
    {
      id: "predicta",
      title: "PREDICTA: YouTube Trending Analysis",
      category: "Machine Learning & Data Analysis",
      featured: true,
      tagline: "Predictive classification of YouTube video virality and engagement tiers",
      summary: "Machine learning coursework analyzing YouTube trending video metadata from Kaggle to classify performance into Low, Medium, and High engagement categories.",
      description: "Built under faculty guidance during Semester 4 coursework using the Kaggle YouTube Trending Video Dataset. Employs exploratory data analysis, log transformations on skewed distributions, feature engineering (tags, title length, engagement ratios), and model evaluation across classification algorithms.",
      tags: ["Python", "Machine Learning", "EDA", "Data Preprocessing", "Feature Engineering", "Git"],
      highlights: [
        "Comprehensive Exploratory Data Analysis across millions of video records",
        "Log transformation handling extreme viral view/like distribution skews",
        "Feature engineering linking publication timing, tag counts, and interaction ratios",
        "Comparison of classification algorithms to identify early engagement markers"
      ],
      type: "B.Tech Semester 4 Coursework",
      status: "Coursework Research & Analysis"
    },
    {
      id: "peer2skill",
      title: "Peer2Skill: Student Skill Exchange",
      category: "Full-Stack Web Platform",
      featured: false,
      tagline: "Collaborative peer discovery and team formation platform for university projects",
      summary: "A hackathon platform concept designed to help university students discover peers with complementary skills, form project teams, and exchange collaboration requests.",
      description: "Created for a hackathon organized by WeCubeTech in collaboration with JK Lakshmipat University. Designed to eliminate solo-work bottlenecks by allowing students to publish project ideas, browse skill profiles, send collaboration requests, and coordinate project roadmaps.",
      tags: ["HTML5", "CSS3", "JavaScript", "Node.js", "MySQL", "Team Collaboration"],
      highlights: [
        "Skill-based collaborator search with compatibility filtering",
        "Invitation and request management workflow for project team assembly",
        "Community activity feed and student contributor leaderboard",
        "Clean dashboard for ongoing project task monitoring"
      ],
      type: "Hackathon Project (WeCubeTech x JKLU)",
      status: "Hackathon Prototype"
    },
    {
      id: "festival-manager",
      title: "Local Festival Contribution Manager",
      category: "Database Management System",
      featured: false,
      tagline: "Centralized database web app for tracking festival donations, events, and volunteers",
      summary: "A database-backed full-stack web application replacing manual paper records to manage community festival donations, volunteer duty rosters, and event expenses.",
      description: "Built as a team DBMS project at JKLU to solve common community event coordination challenges. Replaced error-prone manual spreadsheets and paper ledgers with structured relational tables for donor contributions, volunteer allocations, event schedules, and financial balance audits.",
      tags: ["Node.js", "Express.js", "MySQL", "JavaScript", "DBMS", "HTML/CSS"],
      highlights: [
        "Relational schema modeling donors, events, volunteers, and expense receipts",
        "Real-time expense reconciliation against total collected contributions",
        "Role-oriented volunteer task scheduling and activity tracking",
        "Clean reporting dashboard for community transparency"
      ],
      type: "University DBMS Project",
      status: "Completed Course Project"
    }
  ];

  const projectList = projects && projects.length > 0 ? projects : defaultProjects;

  const filteredProjects = projectList.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'web') return p.category.toLowerCase().includes('web') || p.tags.includes('React.js');
    if (filter === 'ai') return p.category.toLowerCase().includes('vision') || p.category.toLowerCase().includes('learning');
    if (filter === 'db') return p.category.toLowerCase().includes('database') || p.tags.includes('MySQL');
    return true;
  });

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header-row">
          <div>
            <div className="section-tag">Featured Engineering</div>
            <h2 className="section-title">Selected Projects</h2>
          </div>
          <p className="section-subtitle">
            A curated showcase of full-stack web applications, machine learning studies, and interactive image processing pipelines.
          </p>
        </div>

        {/* Category Filters */}
        <div className="project-filter-bar">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Work ({projectList.length})
          </button>
          <button
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            Full-Stack & Web
          </button>
          <button
            className={`filter-btn ${filter === 'ai' ? 'active' : ''}`}
            onClick={() => setFilter('ai')}
          >
            Computer Vision & ML
          </button>
          <button
            className={`filter-btn ${filter === 'db' ? 'active' : ''}`}
            onClick={() => setFilter('db')}
          >
            DBMS & Systems
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((proj) => (
            <div key={proj.id} className="project-card glass-card">
              <div className="project-card-header">
                <span className="badge badge-accent">{proj.category}</span>
                <span className="project-status-chip">{proj.status}</span>
              </div>

              <h3 className="project-title">{proj.title}</h3>
              <p className="project-tagline">{proj.tagline}</p>
              <p className="project-summary">{proj.summary}</p>

              {/* Tags */}
              <div className="project-tags">
                {proj.tags?.slice(0, 5).map((tag, tIdx) => (
                  <span key={tIdx} className="tech-chip">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Card Actions */}
              <div className="project-card-actions">
                <button
                  onClick={() => setActiveProject(proj)}
                  className="btn-primary project-action-btn"
                >
                  {proj.id === 'defective-product-detection' ? (
                    <>
                      <Play size={15} />
                      <span>Launch Interactive Demo</span>
                    </>
                  ) : (
                    <>
                      <span>Inspect Details</span>
                      <ArrowUpRight size={15} />
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Deep Inspection */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
