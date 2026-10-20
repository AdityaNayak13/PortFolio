import React, { useState } from 'react';
import { Code, Server, Database, Terminal, Cpu, Wrench, Search, CheckCircle } from 'lucide-react';

export default function Skills({ skills }) {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const defaultSkills = {
    frontend: [
      { name: "React.js", category: "Frontend", level: "Intermediate", note: "Component hierarchy, hooks, state management, modal architecture" },
      { name: "JavaScript (ES6+)", category: "Frontend", level: "Proficient", note: "Modern syntax, async/await, DOM APIs, Canvas pixel operations" },
      { name: "HTML5 & CSS3", category: "Frontend", level: "Proficient", note: "Semantic structure, responsive layouts (Flex/Grid), CSS variables" },
      { name: "Responsive Design", category: "Frontend", level: "Proficient", note: "Mobile-first viewports, clean media queries, touch adaptability" },
      { name: "Light / Dark Theming", category: "Frontend", level: "Proficient", note: "Theme architecture, persistent preferences, color tokens" },
      { name: "HTML5 Canvas API", category: "Frontend", level: "Intermediate", note: "Interactive pixel processing, filter convolutions, 2D graphics" }
    ],
    backend: [
      { name: "Node.js", category: "Backend", level: "Intermediate", note: "Event-driven architecture, file system, module systems" },
      { name: "Express.js", category: "Backend", level: "Intermediate", note: "RESTful endpoints, middleware routing, CORS, request parsing" },
      { name: "RESTful API Design", category: "Backend", level: "Intermediate", note: "Resource modeling, status codes, JSON response formatting" }
    ],
    databases: [
      { name: "MongoDB", category: "Databases", level: "Intermediate", note: "NoSQL document collections, Mongoose schema modeling, CRUD" },
      { name: "MySQL / SQL", category: "Databases", level: "Intermediate", note: "Relational queries, joins, constraints, table normalization" },
      { name: "DBMS Fundamentals", category: "Databases", level: "Proficient", note: "ACID principles, indexing, transactions, entity relationships" }
    ],
    languages: [
      { name: "C (Core)", category: "Languages", level: "Proficient", note: "Memory management, pointers, algorithmic problem solving" },
      { name: "C++", category: "Languages", level: "Intermediate", note: "Object-oriented programming, STL containers, structured logic" },
      { name: "Python", category: "Languages", level: "Intermediate", note: "Data analysis, ML scripts, statistical transformations" },
      { name: "JavaScript", category: "Languages", level: "Proficient", note: "Client and server-side execution across MERN stack" }
    ],
    mlAndVision: [
      { name: "Digital Image Processing", category: "ML & Vision", level: "Intermediate", note: "Otsu thresholding, Sobel kernels, contrast stretching, denoising" },
      { name: "Exploratory Data Analysis", category: "ML & Vision", level: "Intermediate", note: "Distribution inspection, log transforms, viral trend modeling" },
      { name: "Feature Engineering", category: "ML & Vision", level: "Intermediate", note: "Categorical encoding, feature scaling, engagement ratios" },
      { name: "Machine Learning Concepts", category: "ML & Vision", level: "Foundational", note: "Classification algorithms, training/test splits, metrics" }
    ],
    toolsAndSystems: [
      { name: "Git & GitHub", category: "Tools", level: "Proficient", note: "Branching, pull requests, merge conflict resolution" },
      { name: "Linux Administration", category: "Tools", level: "Intermediate", note: "Red Hat System Administration I (RH124 certified), CLI tools" },
      { name: "VS Code & Tooling", category: "Tools", level: "Proficient", note: "Vite, npm, devtools debugging, modern workflows" }
    ]
  };

  const skillSet = skills || defaultSkills;

  const allSkillsList = [
    ...skillSet.frontend,
    ...skillSet.backend,
    ...skillSet.databases,
    ...skillSet.languages,
    ...skillSet.mlAndVision,
    ...skillSet.toolsAndSystems
  ];

  const tabs = [
    { id: 'all', label: 'All Competencies', icon: <Wrench size={14} /> },
    { id: 'frontend', label: 'Frontend', icon: <Code size={14} /> },
    { id: 'backend', label: 'Backend', icon: <Server size={14} /> },
    { id: 'databases', label: 'Databases', icon: <Database size={14} /> },
    { id: 'languages', label: 'Languages', icon: <Terminal size={14} /> },
    { id: 'mlAndVision', label: 'Vision & ML', icon: <Cpu size={14} /> },
    { id: 'toolsAndSystems', label: 'Tools & Linux', icon: <Wrench size={14} /> },
  ];

  const displayedSkills = (activeTab === 'all' ? allSkillsList : skillSet[activeTab] || [])
    .filter(skill => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return skill.name.toLowerCase().includes(q) || skill.note.toLowerCase().includes(q);
    });

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="section-header-row">
          <div>
            <div className="section-tag">Technical Arsenal</div>
            <h2 className="section-title">Skills & Technologies</h2>
          </div>
          <p className="section-subtitle">
            Grouped competencies backed by hands-on project implementations, coursework, and validated certifications.
          </p>
        </div>

        {/* Search & Tabs Controls */}
        <div className="skills-control-bar">
          <div className="skills-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`skill-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="skills-search-wrap">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search skills (e.g., React, Otsu, MongoDB)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="skills-search-input"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {displayedSkills.map((s, idx) => (
            <div key={idx} className="skill-item-card glass-card">
              <div className="skill-card-top">
                <span className="skill-name">{s.name}</span>
                <span className={`skill-level-badge ${s.level === 'Proficient' ? 'level-proficient' : 'level-intermediate'}`}>
                  {s.level}
                </span>
              </div>
              <p className="skill-note">{s.note}</p>
              <div className="skill-tag-footer">
                <span className="skill-category-pill">{s.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
