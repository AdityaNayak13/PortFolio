export const portfolioData = {
  personal: {
    name: "Aditya Nayak",
    tagline: "Pre-Final Year B.Tech CSE (Core) Student & Full Stack Developer",
    location: "Jaipur / Banswara, Rajasthan, India",
    university: "JK Lakshmipat University, Jaipur",
    cgpa: "7.46 (Across 4 Semesters)",
    availability: "Actively Seeking Summer Internships (Remote / Hybrid)",
    targetRoles: [
      "Software Engineer Intern",
      "Full Stack Developer Intern",
      "Web Developer Intern",
      "Machine Learning Intern"
    ],
    bio: "Pre-final year Computer Science Engineering student at JK Lakshmipat University with a strong passion for scalable full-stack development, applied machine learning, and intuitive user experiences. Experienced in building production-ready portals, interactive image processing pipelines, and data-driven applications.",
    links: {
      github: "https://github.com/AdityaNayak13",
      linkedin: "https://www.linkedin.com/in/adityanayak13",
      email: "aadinayak2006@gmail.com"
    },
    metrics: [
      { label: "Academic CGPA", value: "7.46", sub: "After 4 Semesters" },
      { label: "Campus Events Coordinated", value: "19+", sub: "Leadership & Core" },
      { label: "Featured Projects", value: "5+", sub: "Full Stack & Vision" },
      { label: "Industry Credentials", value: "3+", sub: "Red Hat, Infosys, Cyberous" }
    ]
  },

  experience: [
    {
      id: "edutrack-internship",
      role: "Full Stack Engineer (Internship)",
      organization: "JK Lakshmipat University, Jaipur",
      period: "May 2026 – Aug 2026 (4 mos)",
      mode: "Hybrid (Jaipur / Banswara)",
      summary: "Contributed to improving the EduTrack Learning Management System (LMS) with full-stack enhancements, modern UI/UX design, role-based workflows, and AI assistant integration.",
      achievements: [
        "Refined and unified login interfaces for Student, Teacher, and Admin portals with consistent visual hierarchy.",
        "Engineered responsive dashboard layouts, hero sections, cards, and adaptive light/dark theme switching.",
        "Standardized reusable component architecture, transitions, and micro-interactions for elevated UX.",
        "Integrated an AI assistant interface into the Student Portal for interactive learning queries and support.",
        "Collaborated using Git/GitHub workflows, managing pull requests, branch releases, and resolving merge conflicts."
      ],
      skills: ["React.js", "Node.js", "MongoDB", "Express.js", "UI/UX Design", "Git", "GitHub"]
    },
    {
      id: "internshala-isp",
      role: "Student Intern (ISP Program)",
      organization: "Internshala",
      period: "Jun 2026 – Jul 2026 (2 mos)",
      mode: "Remote",
      summary: "Selected for the competitive Internshala Student Partner initiative to drive student awareness, professional development, and career opportunity engagement.",
      achievements: [
        "Spearheaded awareness campaigns for internships, verified upskilling courses, and career fairs across university batches.",
        "Facilitated peer participation in skill development programs and industry-aligned training tracks.",
        "Awarded performance-based recognition and credentials for outreach milestones."
      ],
      skills: ["Campus Outreach", "Strategic Communication", "Student Leadership", "Program Management"]
    }
  ],

  projects: [
    {
      id: "edutrack",
      title: "EduTrack: Learning Management System",
      category: "Full-Stack Web Application",
      featured: true,
      tagline: "Role-based institutional LMS with AI query assistant and responsive dashboards",
      summary: "An institutional Learning Management System interface with tailored Student, Teacher, and Admin portals, theme toggling, and an integrated conversational AI assistant.",
      description: "EduTrack delivers a unified educational hub designed to streamline classroom workflows. It features distinct role-based access for students, educators, and administrators, accompanied by modern dashboards, real-time feedback animations, and conversational AI support for student queries.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS3", "Git"],
      highlights: [
        "Role-based authentication & portal routing (Student, Teacher, Admin)",
        "Conversational AI assistant interface integrated into Student Portal",
        "Dynamic Light & Dark mode support with persistent state",
        "Standardized modular card components and analytics overview"
      ],
      type: "Internship & Production Engineering",
      status: "Verified Internship Project"
    },
    {
      id: "defective-product-detection",
      title: "Defective Product Detection System",
      category: "Computer Vision & Image Processing",
      featured: true,
      tagline: "Interactive visual quality inspection pipeline for manufacturing defect classification",
      summary: "A digital image processing prototype capable of analyzing product images (fasteners/nuts) to detect structural flaws, scratches, cracks, and missing geometry.",
      description: "Developed as a B.Tech CSE project at JK Lakshmipat University. It constructs a full digital image processing pipeline in JavaScript and Canvas: box-blur denoising, contrast stretching, Otsu thresholding, Sobel gradient edge detection, and rule-based feature matching against baseline non-defective profiles.",
      tags: ["JavaScript", "HTML5 Canvas", "Image Processing", "Sobel Filter", "Otsu Thresholding"],
      highlights: [
        "Multi-stage pipeline: Denoising → Contrast Stretching → Otsu Segmentation → Edge Detection",
        "Interactive Canvas inspection testing real product specimens",
        "Rule-based metric evaluation measuring area, perimeter, and edge deviations",
        "Live interactive demo embedded directly in the portfolio"
      ],
      type: "University B.Tech Project",
      status: "Interactive Prototype Demo Available"
    },
    {
      id: "predicta",
      title: "PREDICTA: YouTube Trending Performance Analysis",
      category: "Machine Learning & Data Analysis",
      featured: true,
      tagline: "Predictive classification of YouTube video virality and engagement tiers",
      summary: "Coursework project analyzing YouTube trending video metadata to classify performance into Low, Medium, and High engagement categories.",
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
      title: "Peer2Skill: Student Skill Exchange Platform",
      category: "Full-Stack Web Platform",
      featured: false,
      tagline: "Collaborative peer discovery and team formation platform for university projects",
      summary: "A hackathon platform concept connecting students with complementary skillsets to form multidisciplinary project teams.",
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
      summary: "Replaced manual paper tracking with a relational database-backed application to manage donations, expenses, and volunteer duties.",
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
  ],

  skills: {
    frontend: [
      { name: "React.js", level: "Intermediate", note: "Component architecture, hooks, state" },
      { name: "JavaScript (ES6+)", level: "Proficient", note: "Modern syntax, async/await, DOM APIs" },
      { name: "HTML5 & CSS3", level: "Proficient", note: "Semantic structure, Flexbox, Grid, animations" },
      { name: "Responsive Design", level: "Proficient", note: "Mobile-first layouts, media queries" },
      { name: "Theme Architecture", level: "Intermediate", note: "Dark/Light systems, CSS variables" },
      { name: "HTML5 Canvas API", level: "Intermediate", note: "Pixel manipulation, rendering pipelines" }
    ],
    backend: [
      { name: "Node.js", level: "Intermediate", note: "Runtime environment, event loop, modules" },
      { name: "Express.js", level: "Intermediate", note: "RESTful routing, middleware, error handling" },
      { name: "REST APIs", level: "Intermediate", note: "CRUD operations, JSON serialization, status codes" }
    ],
    databases: [
      { name: "MongoDB", level: "Intermediate", note: "Document modeling, collections, Mongoose ODM" },
      { name: "MySQL / SQL", level: "Intermediate", note: "Relational queries, schema design, joins" },
      { name: "DBMS Fundamentals", level: "Proficient", note: "ACID properties, indexing, normalization" }
    ],
    languages: [
      { name: "C", level: "Proficient", note: "Core programming, pointers, memory concepts" },
      { name: "C++", level: "Intermediate", note: "OOP, standard template library, algorithms" },
      { name: "Python", level: "Intermediate", note: "Data analysis, ML scripts, automation" },
      { name: "JavaScript", level: "Proficient", note: "Full-stack development" }
    ],
    mlAndVision: [
      { name: "Machine Learning Concepts", level: "Foundational", note: "Classification, regression, evaluation" },
      { name: "Exploratory Data Analysis", level: "Intermediate", note: "Pandas, distributions, outliers" },
      { name: "Feature Engineering", level: "Intermediate", note: "Transformations, normalization, encoding" },
      { name: "Digital Image Processing", level: "Intermediate", note: "Otsu thresholding, Sobel edge filters" }
    ],
    toolsAndSystems: [
      { name: "Git & GitHub", level: "Proficient", note: "Version control, branching, PR workflows" },
      { name: "Linux / Red Hat Enterprise", level: "Intermediate", note: "CLI, permissions, process management" },
      { name: "VS Code & Dev Tools", level: "Proficient", note: "Debugging, linting, productivity" }
    ]
  },

  education: [
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
      ]
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
      ]
    },
    {
      institution: "Saint Paul Senior Secondary School, Banswara",
      degree: "Secondary School (Class 10)",
      period: "Apr 2010 – May 2022",
      score: "94%",
      status: "Completed",
      details: [
        "Graduated with distinction (94%).",
        "Team Captain for Annual Sports Fest (Tug of War Team).",
        "Member of U-14 Cricket Team (2019) and Basketball Team."
      ]
    }
  ],

  certifications: [
    {
      title: "Red Hat System Administration I (RH124 - RHA) - Ver. 10",
      issuer: "Red Hat",
      date: "Apr 2026",
      credentialId: "2024BTECH032",
      skills: ["Operating Systems", "Linux Administration", "Shell Environments"],
      note: "Rigorous hands-on course covering enterprise Linux administration, file systems, permissions, and service management."
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
  ]
};
