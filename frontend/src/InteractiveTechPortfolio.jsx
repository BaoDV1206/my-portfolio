import React, { useEffect, useState, useRef } from 'react';
import './InteractiveTechPortfolio.css';

// 3 avatar phong cách tạo theo hình ảnh cá nhân
const AVATAR_MAP = {
  US: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  JP_SUIT: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  KIMONO: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80'
};

const UI_CONFIG = {
  vi: {
    navIntro: 'Giới thiệu',
    navTimeline: 'Hành trình sự nghiệp',
    navProjects: 'Dự án Timeline',
    navMatrix: 'Ma trận kỹ năng',
    navSkills: 'Kỹ năng',
    heroBadge: 'Software Engineer • FWA Group (FPT Software)',
    heroTag: 'Xây dựng tương lai với',
    heroTagHigh: 'Công nghệ & AI',
    ctaTimeline: 'Hành trình sự nghiệp',
    ctaProjects: 'Khám phá dự án',
    
    // Timeline 1: Career Pathway
    timelineBadge: 'HÀNH TRÌNH PHÁT TRIỂN',
    timelineTitle: 'Dòng Sự Kiện & Kinh Nghiệm Làm Việc',
    timelineSub: 'Tia sáng năng lượng sẽ tự động di chuyển dọc theo trục thời gian khi cuộn trang.',
    careerMilestones: [
      {
        period: '2025 – HIỆN TẠI',
        company: 'FPT Software',
        role: 'Software Engineer',
        sub: 'FWA Group (FPT Worldwide Automotive / Advanced)',
        desc: 'Phát triển các giải pháp phần mềm quy mô lớn, tối ưu hóa hệ thống và tích hợp các công cụ AI hỗ trợ lập trình hiện đại.',
        tags: ['Java 21', 'Spring Boot', 'Intra-mart', 'GitHub Copilot', 'Scrum / Agile'],
        color: '#06b6d4'
      },
      {
        period: '2024 – 2025',
        company: 'Chuyên sâu CNTT Nhật Bản',
        role: 'Đào tạo & Phát triển Tiếng Nhật',
        sub: 'Nâng cao năng lực làm việc với đối tác Nhật',
        desc: 'Tập trung trau dồi khả năng giao tiếp, đọc hiểu tài liệu kỹ thuật và tác phong làm việc chuẩn doanh nghiệp Nhật Bản (N4 JLPT).',
        tags: ['Nihongo (N4)', 'IT Communication', 'Business Culture', 'Teamwork'],
        color: '#8b5cf6'
      },
      {
        period: '2023 – 2024',
        company: 'Innovation & Productivity',
        role: 'Ứng dụng AI & Tối ưu năng suất',
        sub: 'Tích hợp GitHub Copilot & LLM vào quy trình',
        desc: 'Áp dụng các mô hình ngôn ngữ lớn và công cụ lập trình AI thông minh giúp tăng 35% tốc độ hoàn thành mã nguồn và giảm tỷ lệ lỗi.',
        tags: ['GitHub Copilot', 'Prompt Engineering', 'Automation', 'Performance Tuning'],
        color: '#10b981'
      }
    ],

    // Timeline 2: Projects Pathway
    projectsBadge: 'PROJECT MILESTONES',
    projectsTitle: 'Dòng Sự Kiện & Dự Án Đã Triển Khai',
    projectsSub: 'Trục thời gian tái hiện toàn bộ 6 dự án thực chiến từ hệ thống Backend Java, chuyển đổi RPG đến Web tin tức và quản lý du lịch.',

    // Table & Skills
    matrixTitle: 'Ma Trận Năng Lực Kỹ Thuật (Skill Matrix)',
    colSkill: 'Kỹ năng / Công nghệ',
    colExp: 'Kinh nghiệm',
    colLastUsed: 'Sử dụng gần nhất',
    colLevel: 'Mức độ thành thạo',
    skillsTitle: 'Tech Stack & Nền Tảng Chuyên Môn'
  },
  en: {
    navIntro: 'About',
    navTimeline: 'Career Timeline',
    navProjects: 'Project Milestones',
    navMatrix: 'Skill Matrix',
    navSkills: 'Tech Stack',
    heroBadge: 'Software Engineer • FWA Group (FPT Software)',
    heroTag: 'Architecting the Future with',
    heroTagHigh: 'Technology & AI',
    ctaTimeline: 'Career Pathway',
    ctaProjects: 'Explore Projects',

    timelineBadge: 'CAREER PATHWAY',
    timelineTitle: 'Milestones & Professional Experience',
    timelineSub: 'Scroll down to activate the neon light beam flowing through career growth milestones.',
    careerMilestones: [
      {
        period: '2025 – PRESENT',
        company: 'FPT Software',
        role: 'Software Engineer',
        sub: 'FWA Group (FPT Worldwide Automotive / Advanced)',
        desc: 'Developing enterprise-grade software solutions, architecting backend systems, and adopting modern AI developer tooling.',
        tags: ['Java 21', 'Spring Boot', 'Intra-mart', 'GitHub Copilot', 'Scrum / Agile'],
        color: '#06b6d4'
      },
      {
        period: '2024 – 2025',
        company: 'Japan IT Specialization',
        role: 'Japanese Language & Culture Mastery',
        sub: 'Global Workplace Adaptability',
        desc: 'Intensive communication training, reading Japanese technical specifications, and adopting Japanese business etiquette (N4 JLPT).',
        tags: ['Nihongo (N4)', 'IT Communication', 'Business Culture', 'Teamwork'],
        color: '#8b5cf6'
      },
      {
        period: '2023 – 2024',
        company: 'Innovation & Productivity',
        role: 'AI Adoption & Productivity Boost',
        sub: 'Integrating GitHub Copilot & LLMs into Workflows',
        desc: 'Applying large language models and smart coding assistants to accelerate development velocity by 35% and minimize bugs.',
        tags: ['GitHub Copilot', 'Prompt Engineering', 'Automation', 'Performance Tuning'],
        color: '#10b981'
      }
    ],

    projectsBadge: 'PROJECT MILESTONES',
    projectsTitle: 'Project Execution Timeline',
    projectsSub: 'Chronological timeline showcasing 6 key production projects from Backend Java and RPG migration to Web platforms.',

    matrixTitle: 'Technical Competence Matrix',
    colSkill: 'Skill / Technology',
    colExp: 'Experience',
    colLastUsed: 'Last Used',
    colLevel: 'Proficiency Level',
    skillsTitle: 'Tech Stack & Competencies'
  },
  ja: {
    navIntro: '自己紹介',
    navTimeline: '経歴タイムライン',
    navProjects: 'プロジェクトタイムライン',
    navMatrix: 'スキルマトリクス',
    navSkills: 'スキル',
    heroBadge: 'ソフトウェアエンジニア • FWA Group (FPT Software)',
    heroTag: '未来を切り拓く',
    heroTagHigh: '先端技術 & AI',
    ctaTimeline: '経歴タイムライン',
    ctaProjects: '開発プロジェクト実績',

    timelineBadge: 'キャリアパス',
    timelineTitle: '経歴タイムライン & キャリアの歩み',
    timelineSub: 'スクロールに合わせて光のビームがタイムラインを駆け巡り、エンジニアとしての歩みを辿ります。',
    careerMilestones: [
      {
        period: '2025年 – 現在',
        company: 'FPT Software',
        role: 'ソフトウェアエンジニア',
        sub: 'FWA Group (FPT Worldwide Automotive / Advanced)',
        desc: '大規模エンタープライズソリューションの開発、システム最適化、最新のAIプログラミングツールを活用した開発を牽引。',
        tags: ['Java 21', 'Spring Boot', 'Intra-mart', 'GitHub Copilot', 'Scrum / Agile'],
        color: '#06b6d4'
      },
      {
        period: '2024年 – 2025年',
        company: '日本IT実践プログラム',
        role: '日本語コミュニケーション能力の強化',
        sub: '日本企業向けビジネス実務',
        desc: '技術仕様書の読解、業務コミュニケーション、日本企業のビジネスマナー・開発文化の習得に注力（日本語能力試験N4）。',
        tags: ['日本語 (N4)', 'ITコミュニケーション', '日本企業文化', 'チームワーク'],
        color: '#8b5cf6'
      },
      {
        period: '2023年 – 2024年',
        company: 'イノベーション & 生産性向上',
        role: 'AI活用による開発効率化',
        sub: 'GitHub Copilot & LLMの現場適用',
        desc: '大規模言語モデルおよびAIコーディング支援ツールを開発フローに導入し、開発速度を35%向上させ、バグ発生率を削減。',
        tags: ['GitHub Copilot', 'プロンプトエンジニアリング', '自動化', 'クエリ最適化'],
        color: '#10b981'
      }
    ],

    projectsBadge: 'プロジェクト実績',
    projectsTitle: 'プロジェクト開発タイムライン',
    projectsSub: 'Intra-mart、RPGからJavaへのマイグレーション、医療統計分析など手掛けた全6件の実務プロジェクト経歴。',

    matrixTitle: 'スキル習熟度マトリクス (Skill Matrix)',
    colSkill: '技術・スキル',
    colExp: '実務経験',
    colLastUsed: '最終利用年',
    colLevel: '習熟度レベル',
    skillsTitle: 'テクニカルスキル & 技術スタック'
  }
};

export default function InteractiveTechPortfolio() {
  const [lang, setLang] = useState('vi');
  const [avatarStyle, setAvatarStyle] = useState('KIMONO');
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Ref cho Timeline 1 (Hành trình làm việc)
  const careerWrapperRef = useRef(null);
  const careerBeamRef = useRef(null);

  // Ref cho Timeline 2 (Dự án thực tế)
  const projectWrapperRef = useRef(null);
  const projectBeamRef = useRef(null);

  // Đổi Avatar tự động theo ngôn ngữ
  const handleLanguageChange = (selectedLang) => {
    setLang(selectedLang);
    if (selectedLang === 'en') {
      setAvatarStyle('US');
    } else if (selectedLang === 'ja') {
      setAvatarStyle('JP_SUIT');
    } else {
      setAvatarStyle('KIMONO');
    }
  };

  // Nạp dữ liệu từ Backend
  useEffect(() => {
    setLoading(true);
    const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

    fetch(`${apiUrl}/portfolio?lang=${lang}`)
      .then((res) => {
        if (!res.ok) throw new Error('Không thể kết nối Backend');
        return res.json();
      })
      .then((data) => {
        setPortfolioData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [lang]);

  // Quản lý Scroll Beam riêng biệt cho cả 2 timeline
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      // 1. Scroll Beam cho Timeline Career
      if (careerWrapperRef.current && careerBeamRef.current) {
        const rect = careerWrapperRef.current.getBoundingClientRect();
        const height = careerWrapperRef.current.offsetHeight;
        let progress = (windowHeight - rect.top) / (height + windowHeight * 0.4);
        progress = Math.max(0, Math.min(1, progress));
        careerBeamRef.current.style.height = `${progress * 100}%`;
      }

      // 2. Scroll Beam cho Timeline Projects
      if (projectWrapperRef.current && projectBeamRef.current) {
        const rect = projectWrapperRef.current.getBoundingClientRect();
        const height = projectWrapperRef.current.offsetHeight;
        let progress = (windowHeight - rect.top) / (height + windowHeight * 0.4);
        progress = Math.max(0, Math.min(1, progress));
        projectBeamRef.current.style.height = `${progress * 100}%`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [portfolioData]);

  const ui = UI_CONFIG[lang] || UI_CONFIG.vi;

  if (loading && !portfolioData) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#030712', color: '#06b6d4' }}>
        <h2>Đang nạp Portfolio...</h2>
      </div>
    );
  }

  const { profile, technicalSkills, skillMatrix, projects } = portfolioData;

  return (
    <div style={{ background: '#030712', minHeight: '100vh', color: '#f9fafb' }}>
      {/* 1. Header Navigation */}
      <header className="it-navbar">
        <a href="#about" className="it-logo">
          <div className="it-logo-badge">FWA</div>
          <div>
            <span style={{ fontWeight: 800, color: '#fff' }}>BAODINH.DEV</span>
            <span style={{ display: 'block', fontSize: '0.72rem', color: '#06b6d4', fontFamily: 'monospace' }}>
              FPT Software • FWA Group
            </span>
          </div>
        </a>

        <ul className="it-nav-links">
          <li><a href="#about">{ui.navIntro}</a></li>
          <li><a href="#career-timeline">{ui.navTimeline}</a></li>
          <li><a href="#projects-timeline">{ui.navProjects}</a></li>
          <li><a href="#matrix">{ui.navMatrix}</a></li>
          <li><a href="#skills">{ui.navSkills}</a></li>
        </ul>

        <div className="it-lang-switcher">
          {['vi', 'en', 'ja'].map((l) => (
            <button
              key={l}
              className={`it-lang-btn ${lang === l ? 'active' : ''}`}
              onClick={() => handleLanguageChange(l)}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      {/* 2. Hero Section */}
      <section id="about" className="it-hero">
        <div className="it-hero-left">
          <div className="it-pill-tag">
            <span className="it-pill-dot" />
            <span>{ui.heroBadge}</span>
          </div>
          <h1 className="it-hero-title">
            {ui.heroTag} <br />
            <span className="it-gradient-text glow-text">{ui.heroTagHigh}</span>
          </h1>
          <p className="it-hero-desc">{profile.summary}</p>
          <div className="it-btn-group">
            <a href="#career-timeline" className="it-btn-primary">{ui.ctaTimeline}</a>
            <a href="#projects-timeline" style={{ padding: '0.85rem 1.8rem', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', textDecoration: 'none', fontWeight: 600 }}>
              {ui.ctaProjects}
            </a>
          </div>
        </div>

        <div className="it-hero-right">
          <div className="it-avatar-container">
            <img src={AVATAR_MAP[avatarStyle] || profile.avatarUrl} alt="Dinh Van Bao Avatar" />
          </div>
          <div className="it-style-selector">
            <button
              className={`it-style-btn ${avatarStyle === 'US' ? 'active' : ''}`}
              onClick={() => setAvatarStyle('US')}
            >
              US Style
            </button>
            <button
              className={`it-style-btn ${avatarStyle === 'JP_SUIT' ? 'active' : ''}`}
              onClick={() => setAvatarStyle('JP_SUIT')}
            >
              JP Suit
            </button>
            <button
              className={`it-style-btn ${avatarStyle === 'KIMONO' ? 'active' : ''}`}
              onClick={() => setAvatarStyle('KIMONO')}
            >
              Kimono
            </button>
          </div>
        </div>
      </section>

      {/* 3. TIMELINE 1: HÀNH TRÌNH PHÁT TRIỂN NGHỀ NGHIỆP */}
      <section id="career-timeline" className="it-timeline-section">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', textTransform: 'uppercase', color: '#06b6d4', background: 'rgba(6,182,212,0.1)', padding: '0.35rem 0.9rem', borderRadius: '999px', border: '1px solid rgba(6,182,212,0.3)' }}>
            {ui.timelineBadge}
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginTop: '0.8rem', color: '#fff' }}>
            {ui.timelineTitle}
          </h2>
          <p style={{ color: '#9ca3af', maxWidth: '620px', margin: '0.8rem auto 0', fontSize: '0.95rem' }}>
            {ui.timelineSub}
          </p>
        </div>

        <div className="it-timeline-wrapper" ref={careerWrapperRef}>
          <div className="it-timeline-track-bg" />
          <div className="it-timeline-beam" ref={careerBeamRef} />

          {ui.careerMilestones.map((item, index) => {
            const isEven = index % 2 === 1;
            return (
              <div key={index} className={`it-timeline-item ${isEven ? 'even' : ''}`}>
                <div className="it-timeline-node" style={{ borderColor: item.color, boxShadow: `0 0 15px ${item.color}80` }}>
                  <div className="it-node-pulse" style={{ background: item.color }} />
                </div>

                <div className="it-timeline-content it-glass-card" style={{ borderLeft: `3px solid ${item.color}` }}>
                  <div className="it-card-header">
                    <span className="it-period-badge" style={{ color: item.color, borderColor: `${item.color}50`, background: `${item.color}15` }}>
                      {item.period}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#9ca3af', fontFamily: 'monospace' }}>
                      {item.company}
                    </span>
                  </div>
                  <h3 className="it-proj-title">{item.role}</h3>
                  <div className="it-proj-role" style={{ color: item.color }}>{item.sub}</div>
                  <p className="it-proj-desc">{item.desc}</p>
                  <div className="it-tech-pills">
                    {item.tags.map((t, idx) => (
                      <span key={idx} className="it-tech-pill" style={{ color: '#f3f4f6' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. TIMELINE 2: DỰ ÁN THỰC CHIẾN (DẠNG TRỤC THỜI GIAN ĐAN XEN) */}
      <section id="projects-timeline" className="it-timeline-section" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '6rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', textTransform: 'uppercase', color: '#8b5cf6', background: 'rgba(139,92,246,0.1)', padding: '0.35rem 0.9rem', borderRadius: '999px', border: '1px solid rgba(139,92,246,0.3)' }}>
            {ui.projectsBadge}
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginTop: '0.8rem', color: '#fff' }}>
            {ui.projectsTitle}
          </h2>
          <p style={{ color: '#9ca3af', maxWidth: '640px', margin: '0.8rem auto 0', fontSize: '0.95rem' }}>
            {ui.projectsSub}
          </p>
        </div>

        <div className="it-timeline-wrapper" ref={projectWrapperRef}>
          <div className="it-timeline-track-bg" />
          <div className="it-timeline-beam" ref={projectBeamRef} style={{ background: 'linear-gradient(180deg, #8b5cf6 0%, #06b6d4 50%, #10b981 100%)' }} />

          {projects.map((proj, index) => {
            const isEven = index % 2 === 1;
            return (
              <div key={index} className={`it-timeline-item ${isEven ? 'even' : ''}`}>
                <div className="it-timeline-node" style={{ borderColor: '#8b5cf6', boxShadow: '0 0 15px rgba(139,92,246,0.6)' }}>
                  <div className="it-node-pulse" style={{ background: '#8b5cf6' }} />
                </div>

                <div className="it-timeline-content it-glass-card">
                  <div className="it-card-header">
                    <span className="it-period-badge" style={{ color: '#c4b5fd', borderColor: 'rgba(139,92,246,0.4)', background: 'rgba(139,92,246,0.12)' }}>
                      {proj.period}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#06b6d4', fontFamily: 'monospace' }}>
                      Milestone #{projects.length - index}
                    </span>
                  </div>
                  <h3 className="it-proj-title">{proj.title}</h3>
                  <div className="it-proj-role" style={{ color: '#34d399' }}>{proj.role}</div>
                  <p className="it-proj-desc">{proj.desc}</p>

                  <ul className="it-proj-tasks">
                    {proj.tasks.map((task, tIdx) => (
                      <li key={tIdx}>{task}</li>
                    ))}
                  </ul>

                  <div className="it-tech-pills">
                    {proj.tech.map((t, techIdx) => (
                      <span key={techIdx} className="it-tech-pill">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. BẢNG MA TRẬN KINH NGHIỆM CHI TIẾT */}
      <section id="matrix" style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 6%' }}>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, textAlign: 'center', marginBottom: '2.5rem', color: '#fff' }}>
          {ui.matrixTitle}
        </h2>
        <div style={{ background: 'rgba(17, 24, 39, 0.72)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', overflowX: 'auto', padding: '1.2rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <th style={{ padding: '1rem', color: '#9ca3af', fontSize: '0.85rem', textTransform: 'uppercase' }}>{ui.colSkill}</th>
                <th style={{ padding: '1rem', color: '#9ca3af', fontSize: '0.85rem', textTransform: 'uppercase' }}>{ui.colExp}</th>
                <th style={{ padding: '1rem', color: '#9ca3af', fontSize: '0.85rem', textTransform: 'uppercase' }}>{ui.colLastUsed}</th>
                <th style={{ padding: '1rem', color: '#9ca3af', fontSize: '0.85rem', textTransform: 'uppercase' }}>{ui.colLevel}</th>
              </tr>
            </thead>
            <tbody>
              {skillMatrix.map((item, index) => (
                <tr key={index} style={{ borderBottom: index === skillMatrix.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem', fontWeight: 700, color: '#f3f4f6' }}>{item.skill}</td>
                  <td style={{ padding: '1rem', color: '#9ca3af' }}>{item.exp}</td>
                  <td style={{ padding: '1rem', color: '#06b6d4', fontFamily: 'monospace' }}>{item.lastUsed}</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', padding: '0.25rem 0.65rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600 }}>
                      {item.level}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. PHÂN LOẠI KỸ NĂNG THEO NHÓM */}
      <section id="skills" style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 6% 6rem' }}>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, textAlign: 'center', marginBottom: '2.5rem', color: '#fff' }}>
          {ui.skillsTitle}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {technicalSkills.map((cat, idx) => (
            <div key={idx} className="it-glass-card" style={{ padding: '1.8rem', borderRadius: '18px' }}>
              <h3 style={{ color: '#06b6d4', fontSize: '1.15rem', marginBottom: '1rem' }}>{cat.category}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {cat.skills.map((s, sIdx) => (
                  <span
                    key={sIdx}
                    style={{ fontSize: '0.8rem', padding: '0.3rem 0.65rem', borderRadius: '6px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#d1d5db' }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '2.5rem', textAlign: 'center', color: '#6b7280', fontSize: '0.85rem' }}>
        <p>&copy; {new Date().getFullYear()} {profile.name} • Software Engineer at FPT Software (FWA Group)</p>
      </footer>
    </div>
  );
}