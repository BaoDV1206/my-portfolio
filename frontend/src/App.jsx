import React, { useEffect, useState } from 'react';
import './App.css';

// Text cố định của thanh điều hướng theo ngôn ngữ
const UI_TEXT = {
  vi: {
    navOverview: 'Tổng quan',
    navSkills: 'Kỹ năng',
    navExperience: 'Kinh nghiệm',
    navContact: 'Liên hệ',
    btnProjects: 'Xem dự án',
    btnSkills: 'Năng lực kỹ thuật',
    secSkills: 'Kỹ Năng Kỹ Thuật',
    secMatrix: 'Ma trận năng lực kỹ thuật (Skill Matrix)',
    colSkill: 'Kỹ năng / Công nghệ',
    colExp: 'Kinh nghiệm',
    colLastUsed: 'Sử dụng gần nhất',
    colLevel: 'Mức độ thành thạo',
    secExperience: 'Kinh Nghiệm Dự Án',
    secContact: 'Thông Tin Liên Hệ',
    contactDesc: 'Sẵn sàng trao đổi về các cơ hội hợp tác phát triển hệ thống Java, Spring Boot, Intra-mart hoặc Full-stack.'
  },
  en: {
    navOverview: 'Overview',
    navSkills: 'Skills',
    navExperience: 'Experience',
    navContact: 'Contact',
    btnProjects: 'View Projects',
    btnSkills: 'Technical Skills',
    secSkills: 'Technical Skills',
    secMatrix: 'Technical Competence Matrix',
    colSkill: 'Skill / Technology',
    colExp: 'Experience',
    colLastUsed: 'Last Used',
    colLevel: 'Proficiency Level',
    secExperience: 'Professional Experience',
    secContact: 'Contact Information',
    contactDesc: 'Open for opportunities and collaborations in Java, Spring Boot, Intra-mart, and Full-stack engineering.'
  },
  ja: {
    navOverview: '概要',
    navSkills: 'スキル',
    navExperience: '職務経歴',
    navContact: 'お問い合わせ',
    btnProjects: 'プロジェクト一覧',
    btnSkills: '技術スキル詳細',
    secSkills: 'テクニカルスキル',
    secMatrix: 'スキル習熟度マトリクス',
    colSkill: '技術・スキル',
    colExp: '実務経験',
    colLastUsed: '最終利用年',
    colLevel: '習熟度レベル',
    secExperience: '開発プロジェクト経歴',
    secContact: '連絡先情報',
    contactDesc: 'Java、Spring Boot、Intra-mart開発などの案件や協業のご相談を歓迎いたします。'
  }
};

function App() {
  const [lang, setLang] = useState('vi'); // 'vi' | 'en' | 'ja'
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

    fetch(`${apiUrl}/portfolio?lang=${lang}`)
      .then((res) => {
        if (!res.ok) throw new Error('Không thể kết nối đến máy chủ Backend.');
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [lang]);

  const ui = UI_TEXT[lang] || UI_TEXT.vi;

  if (loading && !data) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'var(--primary)' }}>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', color: '#ef4444' }}>
        <h2>Lỗi kết nối API</h2>
        <p>{error}</p>
      </div>
    );
  }

  const { profile, technicalSkills, skillMatrix, projects } = data;

  return (
    <div>
      {/* Navigation */}
      <nav className="navbar">
        <a href="#hero" className="logo">BaoDinh.Dev</a>
        <div className="nav-actions">
          <ul className="nav-links">
            <li><a href="#hero">{ui.navOverview}</a></li>
            <li><a href="#skills">{ui.navSkills}</a></li>
            <li><a href="#experience">{ui.navExperience}</a></li>
            <li><a href="#contact">{ui.navContact}</a></li>
          </ul>

          {/* Bộ chọn ngôn ngữ */}
          <div className="lang-switch">
            <button 
              className={`lang-btn ${lang === 'vi' ? 'active' : ''}`}
              onClick={() => setLang('vi')}
            >
              VIE
            </button>
            <button 
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
            >
              ENG
            </button>
            <button 
              className={`lang-btn ${lang === 'ja' ? 'active' : ''}`}
              onClick={() => setLang('ja')}
            >
              JPN
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="section hero">
        <div className="hero-content">
          <span className="badge">{profile.experienceBadge}</span>
          <h1>{profile.name}</h1>
          <h2>{profile.title}</h2>
          <p>{profile.summary}</p>
          <div className="hero-actions">
            <a href="#experience" className="btn btn-primary">{ui.btnProjects}</a>
            <a href="#skills" className="btn btn-secondary">{ui.btnSkills}</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="image-glow-wrapper">
            <img 
              src={profile.avatarUrl} 
              alt={profile.name} 
              className="hero-img" 
            />
            <div className="floating-badge">
              <span></span> Java & Spring Master
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2 className="section-title">{ui.secSkills}</h2>
        
        <div className="skills-category-grid">
          {technicalSkills.map((item, index) => (
            <div key={index} className="skill-category-card">
              <h3>{item.category}</h3>
              <div className="tag-list">
                {item.skills.map((skill, sIdx) => (
                  <span key={sIdx} className={`tag ${sIdx === 0 ? 'highlight' : ''}`}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ marginBottom: '1.2rem', color: 'var(--primary)', fontSize: '1.3rem' }}>
          {ui.secMatrix}
        </h3>
        <div className="table-container">
          <table className="matrix-table">
            <thead>
              <tr>
                <th>{ui.colSkill}</th>
                <th>{ui.colExp}</th>
                <th>{ui.colLastUsed}</th>
                <th>{ui.colLevel}</th>
              </tr>
            </thead>
            <tbody>
              {skillMatrix.map((row, index) => (
                <tr key={index}>
                  <td><strong>{row.skill}</strong></td>
                  <td>{row.exp}</td>
                  <td>{row.lastUsed}</td>
                  <td><span className="proficiency-badge">{row.level}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <h2 className="section-title">{ui.secExperience}</h2>
        <div className="timeline">
          {projects.map((proj, idx) => (
            <div key={idx} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{proj.title}</h3>
                <span className="project-period">{proj.period}</span>
              </div>
              <div className="project-role">{proj.role}</div>
              <p className="project-desc">{proj.desc}</p>
              
              <ul className="responsibilities">
                {proj.tasks.map((task, tIdx) => (
                  <li key={tIdx}>{task}</li>
                ))}
              </ul>

              <div className="tech-stack-row">
                {proj.tech.map((t, techIdx) => (
                  <span key={techIdx} className="tech-chip">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="contact-card">
          <h2>{ui.secContact}</h2>
          <p>{ui.contactDesc}</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <span className="tag highlight">{profile.toeic}</span>
            <span className="tag highlight">{profile.japanese}</span>
            <span className="tag highlight">Location: {profile.location}</span>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;