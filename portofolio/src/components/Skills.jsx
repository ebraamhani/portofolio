import { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('ai-ml');

  const skillCategories = [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      icon: '🤖',
      color: '#8b5cf6',
      skills: [
        { name: 'PyTorch', level: 90, description: 'Deep learning model development and training' },
        { name: 'LangChain', level: 85, description: 'Building LLM applications and RAG systems' },
        { name: 'HuggingFace Transformers', level: 88, description: 'Fine-tuning and deploying transformer models' },
        { name: 'scikit-learn', level: 85, description: 'Classical machine learning algorithms' },
        { name: 'Pandas & NumPy', level: 90, description: 'Data manipulation and numerical computing' },
        { name: 'OpenCV', level: 75, description: 'Computer vision and image processing' },
        { name: 'NLTK', level: 80, description: 'Natural language processing tasks' },
        { name: 'MLOps', level: 75, description: 'Model deployment and monitoring' }
      ]
    },
    {
      id: 'programming',
      title: 'Programming Languages',
      icon: '💻',
      color: '#10b981',
      skills: [
        { name: 'Python', level: 95, description: 'Primary language for AI/ML and backend development' },
        { name: 'JavaScript', level: 85, description: 'Frontend and full-stack web development' },
        { name: 'Java', level: 75, description: 'Object-oriented programming and enterprise applications' },
        { name: 'PHP', level: 70, description: 'Backend web development and database integration' },
        { name: 'SQL', level: 85, description: 'Database design, optimization, and complex queries' },
        { name: 'TypeScript', level: 75, description: 'Type-safe JavaScript development' }
      ]
    },
    {
      id: 'web-dev',
      title: 'Web Development',
      icon: '🌐',
      color: '#3b82f6',
      skills: [
        { name: 'React', level: 90, description: 'Component-based UI development' },
        { name: 'Node.js', level: 80, description: 'Server-side JavaScript development' },
        { name: 'Django', level: 85, description: 'Python web framework for robust applications' },
        { name: 'Flask', level: 88, description: 'Lightweight Python web framework' },
        { name: 'FastAPI', level: 85, description: 'Modern, fast web framework for APIs' },
        { name: 'Firebase', level: 80, description: 'Real-time database and authentication' },
        { name: 'REST APIs', level: 85, description: 'API design and implementation' }
      ]
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      icon: '☁️',
      color: '#f59e0b',
      skills: [
        { name: 'AWS', level: 75, description: 'Cloud services and deployment' },
        { name: 'Docker', level: 80, description: 'Containerization and deployment' },
        { name: 'Git & GitHub', level: 90, description: 'Version control and collaboration' },
        { name: 'MongoDB', level: 80, description: 'NoSQL database design and management' },
        { name: 'MySQL', level: 85, description: 'Relational database optimization' },
        { name: 'Linux', level: 75, description: 'Server administration and scripting' }
      ]
    },
    {
      id: 'data-tools',
      title: 'Data & Analytics',
      icon: '📊',
      color: '#ef4444',
      skills: [
        { name: 'Power BI', level: 80, description: 'Business intelligence and reporting' },
        { name: 'Matplotlib & Seaborn', level: 85, description: 'Data visualization and plotting' },
        { name: 'Web Scraping', level: 85, description: 'Data extraction from web sources' },
        { name: 'BeautifulSoup', level: 85, description: 'HTML/XML parsing and extraction' },
        { name: 'Selenium', level: 80, description: 'Web automation and testing' },
        { name: 'Jupyter Notebooks', level: 85, description: 'Interactive data analysis' }
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Cloud Technical Essentials",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialId: "AWS-CTE-2024",
      icon: "☁️"
    },
    {
      name: "Advanced Learning Algorithms",
      issuer: "Coursera",
      date: "2024",
      credentialId: "COURSERA-ALA-2024",
      icon: "🎓"
    },
    {
      name: "PCEP-30-01 Python Certificate",
      issuer: "OpenEDG",
      date: "2023",
      credentialId: "PCEP-30-01-2023",
      icon: "🐍"
    },
    {
      name: "Supervised ML: Regression and Classification",
      issuer: "Coursera",
      date: "2023",
      credentialId: "COURSERA-ML-2023",
      icon: "🤖"
    },
    {
      name: "Unsupervised Machine Learning",
      issuer: "IBM",
      date: "2023",
      credentialId: "IBM-UML-2023",
      icon: "📈"
    },
    {
      name: "Data Visualization with Python",
      issuer: "Coursera",
      date: "2023",
      credentialId: "COURSERA-DVP-2023",
      icon: "📊"
    }
  ];

  const getSkillColor = (level) => {
    if (level >= 90) return '#10b981';
    if (level >= 80) return '#3b82f6';
    if (level >= 70) return '#f59e0b';
    return '#ef4444';
  };

  return (
    <section id="skills" className="section-padding">
      <div className="section-header" style={{ marginBottom: '3rem' }}>
        <span className="section-icon">⚡</span>
        <h2 className="section-title">Technical Skills & Certifications</h2>
      </div>

      {/* Skills Categories */}
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                border: 'none',
                background: activeCategory === category.id ? category.color : '#f3f4f6',
                color: activeCategory === category.id ? 'white' : '#374151',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <span>{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Active Category Skills */}
        {skillCategories.map((category) => 
          activeCategory === category.id && (
            <div key={category.id} style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '1rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#111827',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span>{category.icon}</span>
                {category.title}
              </h3>
              
              <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                {category.skills.map((skill, index) => (
                  <div key={index} style={{
                    padding: '1.5rem',
                    background: '#f8fafc',
                    borderRadius: '0.5rem',
                    border: '1px solid #e2e8f0'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827' }}>
                        {skill.name}
                      </h4>
                      <span style={{
                        background: getSkillColor(skill.level),
                        color: 'white',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '0.25rem',
                        fontSize: '0.75rem',
                        fontWeight: '600'
                      }}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress bar */}
                    <div style={{
                      width: '100%',
                      height: '8px',
                      background: '#e5e7eb',
                      borderRadius: '4px',
                      overflow: 'hidden',
                      marginBottom: '0.5rem'
                    }}>
                      <div style={{
                        width: `${skill.level}%`,
                        height: '100%',
                        background: getSkillColor(skill.level),
                        borderRadius: '4px',
                        transition: 'width 0.5s ease'
                      }}></div>
                    </div>
                    
                    <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: '1.4' }}>
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>

      {/* Certifications */}
      <div>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          color: '#111827',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <span>🏆</span>
          Professional Certifications
        </h3>
        
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {certifications.map((cert, index) => (
            <div key={index} style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              border: '1px solid #e5e7eb',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  background: '#f3f4f6',
                  borderRadius: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem'
                }}>
                  {cert.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>
                    {cert.name}
                  </h4>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
                    Issued by {cert.issuer}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#9ca3af', fontSize: '0.75rem' }}>
                      {cert.date}
                    </span>
                    <span style={{ color: '#9ca3af', fontSize: '0.75rem' }}>
                      ID: {cert.credentialId}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 