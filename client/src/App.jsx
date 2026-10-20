import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import FocusAreas from './components/FocusAreas.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Certifications from './components/Certifications.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [profile, setProfile] = useState(null);
  const [experience, setExperience] = useState(null);
  const [projects, setProjects] = useState(null);
  const [skills, setSkills] = useState(null);
  const [education, setEducation] = useState(null);
  const [certifications, setCertifications] = useState(null);

  // Theme Management
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  // Fetch data from Express Backend API
  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const [profRes, expRes, projRes, skillRes, eduRes, certRes] = await Promise.allSettled([
          fetch('/api/profile').then(r => r.ok ? r.json() : null),
          fetch('/api/experience').then(r => r.ok ? r.json() : null),
          fetch('/api/projects').then(r => r.ok ? r.json() : null),
          fetch('/api/skills').then(r => r.ok ? r.json() : null),
          fetch('/api/education').then(r => r.ok ? r.json() : null),
          fetch('/api/certifications').then(r => r.ok ? r.json() : null)
        ]);

        if (profRes.status === 'fulfilled' && profRes.value) setProfile(profRes.value);
        if (expRes.status === 'fulfilled' && expRes.value) setExperience(expRes.value);
        if (projRes.status === 'fulfilled' && projRes.value) setProjects(projRes.value);
        if (skillRes.status === 'fulfilled' && skillRes.value) setSkills(skillRes.value);
        if (eduRes.status === 'fulfilled' && eduRes.value) setEducation(eduRes.value);
        if (certRes.status === 'fulfilled' && certRes.value) setCertifications(certRes.value);
      } catch (err) {
        console.warn('Backend API fetch notice (using robust local state):', err);
      }
    };

    fetchPortfolioData();
  }, []);

  return (
    <div className="portfolio-app">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero profile={profile} />
        <FocusAreas />
        <Experience experience={experience} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Education education={education} />
        <Certifications certifications={certifications} />
        <Contact profile={profile} />
      </main>
      <Footer />
    </div>
  );
}
