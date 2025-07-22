import { useState, useEffect } from 'react';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navigationItems = [
    { name: 'Home', icon: '🏠', id: 'home' },
    { name: 'About', icon: '👤', id: 'about' },
    { name: 'Experience', icon: '💼', id: 'experience' },
    { name: 'Projects', icon: '🚀', id: 'projects' },
  ];

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionId);
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sidebar">
      {/* Profile Section */}
      <div className="sidebar-profile">
        <div className="profile-avatar">
          EH
        </div>
        <h3 className="profile-name">Ebraam Hani</h3>
        <p className="profile-title">AI Engineer & Software Developer</p>
        <div className="profile-location">
          📍 Cairo, Egypt
        </div>
        <button className="resume-btn" onClick={() => window.open('#', '_blank')}>
          📄 Download CV
        </button>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        <ul className="nav-list">
          {navigationItems.map((item) => (
            <li key={item.name} className="nav-item">
              <button
                onClick={() => scrollToSection(item.id)}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer'
                }}
              >
                <span className="nav-icon">{item.icon}</span>
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar; 