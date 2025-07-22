import { useState } from 'react';

const Expertise = () => {
  const [openSections, setOpenSections] = useState({});
  const [copiedField, setCopiedField] = useState(null);

  const expertiseAreas = [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      icon: '🤖',
      skills: ['PyTorch', 'LangChain', 'HuggingFace Transformers', 'scikit-learn', 'Pandas', 'NumPy', 'MLOps', 'OpenCV', 'NLTK']
    },
    {
      id: 'programming',
      title: 'Programming Languages',
      icon: '💻',
      skills: ['Python', 'JavaScript', 'Java', 'PHP', 'SQL']
    },
    {
      id: 'web-frameworks',
      title: 'Web Development',
      icon: '🌐',
      skills: ['React', 'Node.js', 'Django', 'Flask', 'FastAPI', 'Firebase', 'REST APIs']
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      icon: '☁️',
      skills: ['AWS', 'Docker', 'Git', 'GitHub', 'MongoDB', 'MySQL']
    },
    {
      id: 'data-viz',
      title: 'Data & Visualization',
      icon: '📊',
      skills: ['Power BI', 'Matplotlib', 'Seaborn', 'Web Scraping', 'BeautifulSoup', 'Selenium']
    }
  ];

  const socialLinks = [
    { icon: '💼', label: 'LinkedIn', url: 'https://linkedin.com/in/ebraam-hani' },
    { icon: '📧', label: 'Email', url: 'mailto:ebraamhani@gmail.com' },
    { icon: '🐙', label: 'GitHub', url: 'https://github.com/ebraammm' },
    { icon: '📄', label: 'Resume', url: '#' },
    { icon: '📱', label: 'Phone', url: 'tel:+201066025545' },
    { icon: '📍', label: 'Location', url: '#' }
  ];

  const contactInfo = [
    { 
      icon: '📧', 
      label: 'Email', 
      value: 'ebraamhani@gmail.com',
      action: 'copy'
    },
    { 
      icon: '📱', 
      label: 'Phone', 
      value: '+20 106 602 5545',
      action: 'call'
    },
    { 
      icon: '📍', 
      label: 'Location', 
      value: 'Cairo, Egypt',
      action: 'copy'
    }
  ];

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const copyToClipboard = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleContactAction = (contact) => {
    if (contact.action === 'copy') {
      copyToClipboard(contact.value, contact.label.toLowerCase());
    } else if (contact.action === 'call') {
      window.open(`tel:${contact.value}`, '_self');
    }
  };

  return (
    <div className="expertise-card">
      {/* Expertise Section */}
      <div style={{ marginBottom: '2rem' }}>
        <div className="section-header">
          <span className="section-icon">⚡</span>
          <h2 className="section-title">Technical Skills</h2>
        </div>
        
        <ul className="expertise-list">
          {expertiseAreas.map((area) => (
            <li key={area.id} className="expertise-item">
              <div
                onClick={() => toggleSection(area.id)}
                className="expertise-header"
              >
                <div className="expertise-info">
                  <span>{area.icon}</span>
                  <span className="expertise-title">{area.title}</span>
                </div>
                <span className={`expertise-arrow ${openSections[area.id] ? 'open' : ''}`}>
                  ▼
                </span>
              </div>
              
              <div className={`expertise-content ${openSections[area.id] ? 'open' : ''}`}>
                <div className="skills-list">
                  {area.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Certifications Section */}
      <div style={{ marginBottom: '2rem' }}>
        <div className="section-header">
          <span className="section-icon">🏆</span>
          <h2 className="section-title">Certifications</h2>
        </div>
        <div className="contact-description">
          <div style={{ marginBottom: '0.5rem' }}>• AWS Cloud Technical Essentials</div>
          <div style={{ marginBottom: '0.5rem' }}>• Advanced Learning Algorithms (Coursera)</div>
          <div style={{ marginBottom: '0.5rem' }}>• PCEP-30-01 Python Certificate</div>
          <div style={{ marginBottom: '0.5rem' }}>• Supervised ML: Regression & Classification</div>
          <div style={{ marginBottom: '0.5rem' }}>• Unsupervised Machine Learning (IBM)</div>
        </div>
      </div>

      {/* Get in Touch Section */}
      <div>
        <div className="section-header">
          <span className="section-icon">📬</span>
          <h2 className="section-title">Get in touch</h2>
        </div>
        
        {/* Mobile-optimized contact grid */}
        <div className="contact-grid">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : '_self'}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
              className="contact-btn"
              title={link.label}
            >
              <span className="contact-btn-icon">{link.icon}</span>
              <span className="contact-btn-label">{link.label}</span>
            </a>
          ))}
        </div>
        
        {/* Contact Info Cards */}
        <div className="contact-info-cards">
          {contactInfo.map((contact, index) => (
            <div 
              key={index}
              className={`contact-info-card ${copiedField === contact.label.toLowerCase() ? 'copied' : ''}`}
              onClick={() => handleContactAction(contact)}
              style={{ cursor: 'pointer' }}
            >
              <div className="contact-info-icon">
                {copiedField === contact.label.toLowerCase() ? '✅' : contact.icon}
              </div>
              <div className="contact-info-content">
                <div className="contact-info-label">{contact.label}</div>
                <div className="contact-info-value">{contact.value}</div>
              </div>
              <div className="contact-info-action">
                {contact.action === 'copy' && copiedField !== contact.label.toLowerCase() && (
                  <span className="action-hint">Tap to copy</span>
                )}
                {contact.action === 'call' && (
                  <span className="action-hint">Tap to call</span>
                )}
                {copiedField === contact.label.toLowerCase() && (
                  <span className="action-hint copied">Copied!</span>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <p className="contact-description" style={{ marginTop: '1.5rem' }}>
          AI Engineer passionate about NLP, Machine Learning, and building innovative solutions. Let's connect!
        </p>
      </div>
    </div>
  );
};

export default Expertise; 