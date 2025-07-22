import { useState } from 'react';

const FeaturedProjects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const projects = [
    {
      title: 'AIDA Agent: Conversational Real Estate AI System',
      date: 'Sep 2024 - Present',
      category: 'AI/NLP',
      description: 'Led conversational AI system design with LangGraph-based RAG pipeline using FastAPI, LangChain, GPT-4',
      company: 'TrueStateAI'
    },
    {
      title: 'GRC LLM Fine-Tuning Project',
      date: '2025',
      category: 'Machine Learning',
      description: 'Fine-tuned DeepSeek-R1 LLaMA 3.1 8B on GRC data using LoRA adapters with 4-bit quantization',
      company: 'Personal Project'
    },
    {
      title: 'NLP Tool for Fake News Detection',
      date: '2024',
      category: 'Research',
      description: 'Built NLP tool using LSTM, BERT, GPT-4 for Arabic fake news detection. Published in IEEE journal',
      company: 'ESLSCA University'
    },
    {
      title: 'Catholic Cultural Center Website',
      date: 'Jan 2025 - Present',
      category: 'Full Stack',
      description: 'Developed ccf-egypt.com with admin panel, enrollment system, and mobile-first design',
      company: 'ccf-egypt.com'
    },
    {
      title: 'Travel to Egypt AI Assistant',
      date: 'Apr 2024 - Jul 2024',
      category: 'AI/Web',
      description: 'Created travel assistant app using Gemini API, Flask with chatbot and itinerary generator',
      company: 'Personal Project'
    },
    {
      title: 'Job Matching Platform',
      date: '2023',
      category: 'Web Development',
      description: 'Designed job-matching platform with PHP, SQL, React. Won 2nd place at Credit Agricole Egypt',
      company: 'Credit Agricole'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, projects.length - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.max(1, projects.length - 1)) % Math.max(1, projects.length - 1));
  };

  return (
    <div className="projects-section">
      <div className="projects-header">
        <div className="section-header">
          <span className="section-icon">🚀</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>
        
        <div className="carousel-controls">
          <button onClick={prevSlide} className="carousel-btn">
            ←
          </button>
          <button onClick={nextSlide} className="carousel-btn">
            →
          </button>
        </div>
      </div>
      
      <div className="projects-carousel">
        <div 
          className="project-cards"
          style={{ transform: `translateX(-${currentSlide * 50}%)` }}
        >
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <div className="project-image">
                  <div className="project-placeholder">
                    {project.category === 'AI/NLP' ? '🤖' :
                     project.category === 'Machine Learning' ? '⚡' :
                     project.category === 'Research' ? '📊' :
                     project.category === 'Full Stack' ? '💻' :
                     project.category === 'AI/Web' ? '🌐' : '🔧'}
                  </div>
                  <div className="project-category">{project.category}</div>
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p style={{ 
                    fontSize: '0.75rem', 
                    color: '#6b7280', 
                    marginBottom: '0.5rem',
                    lineHeight: '1.4'
                  }}>
                    {project.description}
                  </p>
                  <div style={{ 
                    fontSize: '0.7rem', 
                    color: '#9ca3af', 
                    fontWeight: '500',
                    marginBottom: '0.25rem'
                  }}>
                    {project.company}
                  </div>
                  <div className="project-date">
                    <span>📅</span>
                    <span>{project.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Slide indicators */}
      <div className="carousel-indicators">
        {Array.from({ length: Math.max(1, projects.length - 1) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects; 