import React, { useEffect, useState } from 'react';
import './PortfolioPage.css';

// Danh sách ảnh theo các phong cách để người dùng lựa chọn trực tiếp
const AVATAR_STYLES = {
  US: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  JP_SUIT: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  JP_KIMONO: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80'
};

const UI_CONFIG = {
  vi: {
    nav: ['Tổng quan', 'Kỹ năng', 'Kinh nghiệm', 'Liên hệ'],
    cta1: 'Xem dự án',
    cta2: 'Kỹ năng chuyên môn',
    secSkills: 'Năng Lực & Kỹ Thuật',
    secMatrix: 'Ma Trận Kinh Nghiệm Chi Tiết',
    secExp: 'Kinh Nghiệm Thực Chiến',
    secContact: 'Kết Nối & Hợp Tác',
    cols: ['Kỹ năng', 'Kinh nghiệm', 'Năm gần nhất', 'Trình độ']
  },
  en: {
    nav: ['Overview', 'Skills', 'Experience', 'Contact'],
    cta1: 'Explore Projects',
    cta2: 'Technical Skills',
    secSkills: 'Technical Expertise',
    secMatrix: 'Competency Matrix',
    secExp: 'Featured Experience',
    secContact: 'Get In Touch',
    cols: ['Technology', 'Experience', 'Last Used', 'Proficiency']
  },
  ja: {
    nav: ['概要', 'スキル', '職務経歴', '連絡先'],
    cta1: 'プロジェクトを見る',
    cta2: 'スキル一覧',
    secSkills: 'テクニカルスキル',
    secMatrix: 'スキル習熟度マトリクス',
    secExp: 'プロジェクト経歴',
    secContact: 'お問い合わせ',
    cols: ['技術・スキル', '実務経験', '最終利用年', '習熟レベル']
  }
};

export default function PortfolioPage() {
  const [lang, setLang] = useState('vi');
  const [currentStyle, setCurrentStyle] = useState('US');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

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
        console.error(err);
        setLoading(false);
      });
  }, [lang]);

  const ui = UI_CONFIG[lang] || UI_CONFIG.vi;

  if (loading && !data) {
    return (
      <div className="pf-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h2 style={{ color: 'var(--pf-primary)' }}>Loading Portfolio Data...</h2>
      </div>
    );
  }

  const { profile, technicalSkills, skillMatrix, projects } = data;
  const avatarUrl = AVATAR_STYLES[currentStyle] || profile.avatarUrl;

  return (
    <div className="pf-wrapper">
      {/* 1. Header Navigation */}
      <nav className="pf-navbar">
        <a href="#hero" className="pf-logo">BAODINH.DEV</a>
        <div className="pf-nav-right">
          <ul className="pf-menu">
            <li><a href="#hero">{ui.nav[0]}</a></li>
            <li><a href="#skills">{ui.nav[1]}</a></li>
            <li><a href="#experience">{ui.nav[2]}</a></li>
            <li><a href="#contact">{ui.nav[3]}</a></li>
          </ul>

          <div className="pf-lang-group">
            {['vi', 'en', 'ja'].map((l) => (
              <button
                key={l}
                className={`pf-lang-btn ${lang === l ? 'active' : ''}`}
                onClick={() => setLang(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section id="hero" className="pf-section pf-hero">
        <div className="pf-hero-info">
          <div className="pf-badge">⚡ {profile.experienceBadge}</div>
          <h1>{profile.name}</h1>
          <h2>{profile.title}</h2>
          <p className="pf-hero-desc">{profile.summary}</p>
          <div className="pf-cta-row">
            <a href="#experience" className="pf-btn pf-btn-fill">{ui.cta1}</a>
            <a href="#skills" className="pf-btn pf-btn-outline">{ui.cta2}</a>
          </div>
        </div>

        <div className="pf-hero-avatar-box">
          <div className="pf-avatar-frame">
            <img src={avatarUrl} alt={profile.name} className="pf-avatar-img" />
          </div>
          {/* Bộ chọn xem nhanh Style hình ảnh */}
          <div className="pf-style-toggles">
            <button
              className={`pf-style-btn ${currentStyle === 'US' ? 'active' : ''}`}
              onClick={() => setCurrentStyle('US')}
            >
              US Style
            </button>
            <button
              className={`pf-style-btn ${currentStyle === 'JP_SUIT' ? 'active' : ''}`}
              onClick={() => setCurrentStyle('JP_SUIT')}
            >
              JP Suit
            </button>
            <button
              className={`pf-style-btn ${currentStyle === 'JP_KIMONO' ? 'active' : ''}`}
              onClick={() => setCurrentStyle('JP_KIMONO')}
            >
              Kimono
            </button>
          </div>
        </div>
      </section>

      {/* 3. Skills Section */}
      <section id="skills" className="pf-section">
        <h2 className="pf-heading">{ui.secSkills}</h2>
        <div className="pf-skills-grid">
          {technicalSkills.map((cat, idx) => (
            <div key={idx} className="pf-skill-card">
              <h3>{cat.category}</h3>
              <div className="pf-pills-wrap">
                {cat.skills.map((s, sIdx) => (
                  <span key={sIdx} className="pf-pill">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ color: 'var(--pf-primary)', marginBottom: '1.2rem', fontSize: '1.3rem' }}>
          {ui.secMatrix}
        </h3>
        <div className="pf-table-wrapper">
          <table className="pf-table">
            <thead>
              <tr>
                <th>{ui.cols[0]}</th>
                <th>{ui.cols[1]}</th>
                <th>{ui.cols[2]}</th>
                <th>{ui.cols[3]}</th>
              </tr>
            </thead>
            <tbody>
              {skillMatrix.map((item, index) => (
                <tr key={index}>
                  <td><strong>{item.skill}</strong></td>
                  <td>{item.exp}</td>
                  <td>{item.lastUsed}</td>
                  <td><span className="pf-level-tag">{item.level}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Projects Section */}
      <section id="experience" className="pf-section">
        <h2 className="pf-heading">{ui.secExp}</h2>
        <div className="pf-projects-list">
          {projects.map((proj, idx) => (
            <div key={idx} className="pf-project-card">
              <div>
                <span className="pf-proj-period">{proj.period}</span>
                <h3 className="pf-proj-title">{proj.title}</h3>
                <div className="pf-proj-role">{proj.role}</div>
                <p className="pf-proj-desc">{proj.desc}</p>
                <ul className="pf-proj-tasks">
                  {proj.tasks.map((t, tIdx) => (
                    <li key={tIdx}>{t}</li>
                  ))}
                </ul>
              </div>
              <div className="pf-tech-chips">
                {proj.tech.map((chip, cIdx) => (
                  <span key={cIdx} className="pf-chip">{chip}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Contact Section */}
      <section id="contact" className="pf-section">
        <div className="pf-contact-card">
          <h2>{ui.secContact}</h2>
          <p style={{ color: 'var(--pf-muted)', lineHeight: 1.6 }}>
            Luôn sẵn sàng đón nhận cơ hội việc làm và trao đổi kỹ thuật về Java, Spring Boot, Intra-mart hoặc kiến trúc Full-stack.
          </p>
          <div className="pf-contact-tags">
            <span className="pf-contact-tag">✉ {profile.toeic}</span>
            <span className="pf-contact-tag">🌐 {profile.japanese}</span>
            <span className="pf-contact-tag">📍 {profile.location}</span>
          </div>
        </div>
      </section>

      <footer className="pf-footer">
        <p>&copy; {new Date().getFullYear()} {profile.name}. All Rights Reserved.</p>
      </footer>
    </div>
  );
}