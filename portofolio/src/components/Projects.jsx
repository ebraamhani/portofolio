import { useState } from 'react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "AIDAAgent: Conversational Real Estate AI System",
      description: "Led conversational AI system design, real-time data scraping, and hybrid LangGraph-based RAG pipeline using FastAPI, LangChain, and GPT-4 for TrueStateAI in Riyadh.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      category: "AI/ML",
      technologies: ["FastAPI", "LangChain", "GPT-4", "LangGraph", "RAG Pipeline"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      company: "TrueStateAI, Riyadh",
      period: "Sep 2024 - Present"
    },
    {
      id: 2,
      title: "GRC LLM Fine-Tuning Project",
      description: "Fine-tuned DeepSeek-R1 LLaMA 3.1 8B on governance, risk, and compliance (GRC) data using LoRA adapters with 4-bit quantization. Deployed model using PyTorch, Hugging Face Transformers, and evaluated domain-specific generation quality using APQC-aligned prompts.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      category: "AI/ML",
      technologies: ["PyTorch", "Hugging Face", "LoRA", "LLaMA 3.1", "4-bit Quantization"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      period: "2025"
    },
    {
      id: 3,
      title: "NLP Tool for Fake News Detection",
      description: "Built NLP tool to detect fake news about diabetes on Arabic social media using LSTM, BERT, and GPT-4. Labeled data with expert input, presented at IMSA IEEE Conference, and published in IEEE journal.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      category: "AI/ML",
      technologies: ["LSTM", "BERT", "GPT-4", "NLP", "Arabic Text Processing"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      company: "ESLSCA University",
      period: "2024",
      achievement: "Published in IEEE Journal"
    },
    {
      id: 4,
      title: "Job-Matching Platform",
      description: "Designed job-matching platform with PHP, SQL (XAMPP), and React. Developed accessibility features, resume screening, and matching logic. Won 2nd place nationally in the Project Green Contest.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      category: "Web Development",
      technologies: ["PHP", "SQL", "React", "XAMPP", "Resume Screening"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      company: "Credit Agricole Egypt",
      period: "2023",
      achievement: "2nd Place Nationally"
    },
    {
      id: 5,
      title: "Local Brands Clothing Website",
      description: "Built an e-commerce platform for Egyptian brands with intuitive UI and custom shopping flows to boost engagement and sales for Local Lens Startup.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      category: "E-Commerce",
      technologies: ["React", "E-commerce", "UI/UX", "Shopping Flows"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      company: "Local Lens Startup",
      period: "Mar 2024 - Jun 2024"
    },
    {
      id: 6,
      title: "Travel to Egypt Application",
      description: "Created a travel assistant app using Gemini API, Flask, web scraping, and integrated a chatbot with itinerary generator and attraction recommender.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      category: "AI/ML",
      technologies: ["Gemini API", "Flask", "Web Scraping", "Chatbot", "Itinerary Generator"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      period: "Apr 2024 - Jul 2024"
    },
    {
      id: 7,
      title: "CCF-Egypt.com Website",
      description: "Developed and launched ccf-egypt.com to support the Catholic Cultural Center's mission with admin panel, enrollment system, and mobile-first design.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      category: "Web Development",
      technologies: ["React", "Admin Panel", "Enrollment System", "Mobile-First Design"],
      liveUrl: "https://ccf-egypt.com",
      githubUrl: "#",
      featured: true,
      company: "Catholic Cultural Center",
      period: "Jan 2025 - Present"
    }
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index) => {
    setActiveProject(index);
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-accent">🚀</span>
            Featured Projects
          </h2>
          <p className="section-subtitle">
            Showcasing my latest work and innovative solutions across AI/ML, web development, and e-commerce
          </p>
        </div>

        {/* Projects Carousel */}
        <div className="projects-carousel">
          {/* Main Project Display */}
          <div className="project-main">
            <div className="project-card featured">
              <div className="project-image">
                <img 
                  src={projects[activeProject].image} 
                  alt={projects[activeProject].title}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="project-placeholder">
                  <span>📁</span>
                </div>
                <div className="project-overlay">
                  <div className="project-category">{projects[activeProject].category}</div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-info">
                  <div className="project-header">
                    <h3 className="project-title">{projects[activeProject].title}</h3>
                    {projects[activeProject].company && (
                      <div className="project-company">{projects[activeProject].company}</div>
                    )}
                    <div className="project-period">{projects[activeProject].period}</div>
                    {projects[activeProject].achievement && (
                      <div className="project-achievement">🏆 {projects[activeProject].achievement}</div>
                    )}
                  </div>
                  
                  <p className="project-description">{projects[activeProject].description}</p>
                  
                  <div className="project-technologies">
                    {projects[activeProject].technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-actions">
                    {projects[activeProject].liveUrl !== "#" && (
                      <a 
                        href={projects[activeProject].liveUrl} 
                        className="project-btn live-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>🌐</span>
                        Live Demo
                      </a>
                    )}
                    <a 
                      href={projects[activeProject].githubUrl} 
                      className="project-btn github-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>📂</span>
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <button className="carousel-btn prev-btn" onClick={prevProject}>
            <span>←</span>
          </button>
          <button className="carousel-btn next-btn" onClick={nextProject}>
            <span>→</span>
          </button>

          {/* Project Indicators */}
          <div className="carousel-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === activeProject ? 'active' : ''}`}
                onClick={() => goToProject(index)}
              />
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="all-projects">
          <h3 className="subsection-title">All Projects</h3>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`project-card ${index === activeProject ? 'active' : ''}`}
                onClick={() => goToProject(index)}
              >
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="project-placeholder">
                    <span>📁</span>
                  </div>
                  <div className="project-overlay">
                    <div className="project-category">{project.category}</div>
                  </div>
                </div>
                
                <div className="project-content">
                  <div className="project-header">
                    <h4 className="project-title">{project.title}</h4>
                    {project.company && (
                      <div className="project-company">{project.company}</div>
                    )}
                    <div className="project-period">{project.period}</div>
                    {project.achievement && (
                      <div className="project-achievement">🏆 {project.achievement}</div>
                    )}
                  </div>
                  
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-tag more">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 