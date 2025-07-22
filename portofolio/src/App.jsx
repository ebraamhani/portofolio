import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import CareerStats from './components/CareerStats'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Expertise from './components/Expertise'
import './App.css'

function App() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // Prevent body scroll when mobile nav is open
  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.classList.add('mobile-nav-open');
    } else {
      document.body.classList.remove('mobile-nav-open');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('mobile-nav-open');
    };
  }, [isMobileNavOpen]);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  const navigationItems = [
    { name: 'Home', icon: '🏠', id: 'home' },
    { name: 'About', icon: '👤', id: 'about' },
    { name: 'Experience', icon: '💼', id: 'experience' },
    { name: 'Projects', icon: '🚀', id: 'projects' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      closeMobileNav();
    }
  };

  return (
    <div className="portfolio-container">
      {/* Mobile Navigation Toggle */}
      <button 
        className={`mobile-nav-toggle ${isMobileNavOpen ? 'active' : ''}`}
        onClick={toggleMobileNav}
        aria-label="Toggle mobile navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${isMobileNavOpen ? 'active' : ''}`}>
        <div className="mobile-nav-content">
          <ul className="mobile-nav-list">
            {navigationItems.map((item) => (
              <li key={item.name} className="mobile-nav-item">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="mobile-nav-link"
                  style={{
                    width: '100%',
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer'
                  }}
                >
                  <span className="mobile-nav-icon">{item.icon}</span>
                  <span>{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sidebar - Hidden on mobile, visible on desktop */}
      <div className={`sidebar-wrapper ${isMobileNavOpen ? 'active' : ''}`}>
        <Sidebar />
      </div>
      
      {/* Main Content */}
      <div className="main-content">
        {/* Center Content - Now much larger */}
        <div className="center-content" style={{ maxWidth: 'none', flex: '1' }}>
          {/* Home Section */}
          <section id="home" style={{ marginBottom: '4rem' }}>
            <Hero />
            <CareerStats />
          </section>
          
          {/* About Section */}
          <About />
          
          {/* Experience Section */}
          <Experience />
          
          {/* Projects Section */}
          <Projects />
          
          
        </div>
        
        {/* Right Sidebar - Contact Info */}
        <div className="right-sidebar">
          <Expertise />
        </div>
      </div>
    </div>
  )
}

export default App
