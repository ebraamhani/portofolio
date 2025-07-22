const Experience = () => {
  const experiences = [
    {
      title: "AI Engineer",
      company: "TrueStateAI",
      location: "Riyadh, Saudi Arabia",
      period: "Sep 2024 - Present",
      type: "Full-time",
      description: "Developing cutting-edge conversational AI systems for real estate applications",
      achievements: [
        "Developed AIDA agent using FastAPI, LangChain, and GPT-4 Turbo",
        "Deployed RAG-based system with hybrid LangGraph architecture",
        "Built ML pipelines with MLOps best practices",
        "Implemented data scraping solutions using Selenium and BeautifulSoup",
        "Deployed multilingual support using langdetect and Google Translate API"
      ],
      technologies: ["FastAPI", "LangChain", "GPT-4", "RAG", "MLOps", "Selenium", "Python"],
      icon: "🤖"
    },
    {
      title: "Teaching Assistant",
      company: "ESLSCA University",
      location: "Egypt",
      period: "Feb 2025 - Present",
      type: "Part-time",
      description: "Supporting academic development in database systems and SQL optimization",
      achievements: [
        "Delivered advanced SQL and database optimization labs using MySQL",
        "Guided student projects and provided technical mentorship",
        "Evaluated assignments and provided constructive feedback",
        "Contributed to curriculum development for database courses"
      ],
      technologies: ["MySQL", "SQL", "Database Design", "Performance Optimization"],
      icon: "👨‍🏫"
    },
    {
      title: "AI Engineer",
      company: "Estragaya Company",
      location: "Egypt",
      period: "Feb 2025 - June 2025",
      type: "Contract",
      description: "Specialized in LLM fine-tuning for financial and governance applications",
      achievements: [
        "Fine-tuned DeepSeek R1 LLaMA 3.1 8B on GRC/finance datasets",
        "Implemented LoRA adapters for efficient model adaptation",
        "Deployed model on HIM system using PyTorch and Hugging Face Transformers",
        "Optimized model performance for domain-specific tasks"
      ],
      technologies: ["PyTorch", "Hugging Face", "LLaMA", "LoRA", "Fine-tuning", "GRC"],
      icon: "🏦"
    },
    {
      title: "Software Developer",
      company: "Catholic Cultural Center",
      location: "Egypt",
      period: "Aug 2024 - Jan 2025",
      type: "Full-time",
      description: "Full-stack development with integrated AI chatbot capabilities",
      achievements: [
        "Created full-stack website using React and Firebase",
        "Integrated NLP-based chatbot for user interaction",
        "Designed comprehensive admin system with real-time database",
        "Implemented responsive web design principles",
        "Successfully launched ccf-egypt.com with full functionality"
      ],
      technologies: ["React", "Firebase", "NLP", "Chatbot", "Admin Systems", "Responsive Design"],
      icon: "💻"
    },
    {
      title: "Software Developer",
      company: "EX3 Tech, ESLSCA University",
      location: "Egypt",
      period: "Apr 2024 - Jul 2024",
      type: "Full-time",
      description: "University project showcase and e-commerce platform development",
      achievements: [
        "Built websites to showcase university projects and achievements",
        "Launched e-commerce platform with modern UI/UX",
        "Integrated payment-ready interface components",
        "Developed using React.js and Firebase backend"
      ],
      technologies: ["React.js", "Firebase", "E-commerce", "UI/UX", "Payment Integration"],
      icon: "🛒"
    },
    {
      title: "Software Engineer Intern",
      company: "Credit Agricole",
      location: "Egypt",
      period: "Jun 2023 - Aug 2023",
      type: "Internship",
      description: "Digital banking team member focusing on backend and frontend development",
      achievements: [
        "Participated in digital banking team development",
        "Worked on backend integrations using PHP and MySQL",
        "Conducted frontend testing for internal banking tools",
        "Gained experience with XAMPP development environment",
        "Won 2nd place in Project Green Contest with job-matching platform"
      ],
      technologies: ["PHP", "React", "MySQL", "XAMPP", "Digital Banking"],
      icon: "🏛️"
    },
    {
      title: "Mobile Software Developer",
      company: "Opener VC",
      location: "Egypt",
      period: "Apr 2023 - May 2023",
      type: "Internship",
      description: "Intensive mobile development sprint in startup environment",
      achievements: [
        "Completed intensive Flutter development sprint",
        "Built multiple prototype mobile applications",
        "Practiced Agile/Scrum methodologies in startup simulation",
        "Gained experience in rapid prototyping and iterative development"
      ],
      technologies: ["Flutter", "Mobile Development", "Agile", "Scrum", "Prototyping"],
      icon: "📱"
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="section-header" style={{ marginBottom: '3rem' }}>
        <span className="section-icon">💼</span>
        <h2 className="section-title">Work Experience</h2>
      </div>

      <div style={{ position: 'relative' }}>
        {/* Timeline line */}
        <div style={{
          position: 'absolute',
          left: '2rem',
          top: '0',
          bottom: '0',
          width: '2px',
          background: 'linear-gradient(to bottom, #3b82f6, #1d4ed8)',
          zIndex: 1
        }}></div>

        {experiences.map((exp, index) => (
          <div key={index} style={{ 
            position: 'relative', 
            marginBottom: '3rem',
            paddingLeft: '5rem'
          }}>
            {/* Timeline dot */}
            <div style={{
              position: 'absolute',
              left: '1rem',
              top: '1rem',
              width: '2rem',
              height: '2rem',
              borderRadius: '50%',
              background: 'rgba(15, 23, 42, 0.8)',
              backdropFilter: 'blur(20px)',
              border: '3px solid #3b82f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.875rem',
              zIndex: 2,
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
            }}>
              {exp.icon}
            </div>

            {/* Experience card */}
            <div style={{
              background: 'rgba(15, 23, 42, 0.6)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              padding: '2.5rem',
              borderRadius: '20px',
              border: '1px solid rgba(148, 163, 184, 0.1)',
              transition: 'all 0.4s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.1)';
            }}>
              
              {/* Header */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.375rem', fontWeight: '700', color: '#f8fafc' }}>
                    {exp.title}
                  </h3>
                  <span style={{
                    background: exp.type === 'Full-time' ? 'rgba(16, 185, 129, 0.2)' : exp.type === 'Part-time' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(99, 102, 241, 0.2)',
                    color: exp.type === 'Full-time' ? '#10b981' : exp.type === 'Part-time' ? '#f59e0b' : '#6366f1',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    border: '1px solid',
                    borderColor: exp.type === 'Full-time' ? 'rgba(16, 185, 129, 0.3)' : exp.type === 'Part-time' ? 'rgba(245, 158, 11, 0.3)' : 'rgba(99, 102, 241, 0.3)'
                  }}>
                    {exp.type}
                  </span>
                </div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#3b82f6', marginBottom: '0.25rem' }}>
                  {exp.company === 'Catholic Cultural Center' ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <a 
                        href="https://ccf-egypt.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ 
                          color: '#3b82f6', 
                          textDecoration: 'none',
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.textDecoration = 'underline';
                          e.target.style.color = '#1d4ed8';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.textDecoration = 'none';
                          e.target.style.color = '#3b82f6';
                        }}
                      >
                        {exp.company} 🌐
                      </a>
                      <span style={{ fontSize: '0.75rem', color: '#64748b', fontStyle: 'italic' }}>
                        (click to visit)
                      </span>
                    </div>
                  ) : (
                    exp.company
                  )}
                </h4>
                <div style={{ display: 'flex', gap: '1rem', color: '#94a3b8', fontSize: '0.875rem' }}>
                  <span>📍 {exp.location}</span>
                  <span>📅 {exp.period}</span>
                </div>
              </div>

              {/* Description */}
              <p style={{ color: '#cbd5e1', lineHeight: '1.6', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                {exp.description}
              </p>

              {/* Achievements */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h5 style={{ fontSize: '1rem', fontWeight: '600', color: '#f8fafc', marginBottom: '1rem' }}>
                  Key Achievements:
                </h5>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      marginBottom: '0.5rem',
                      color: '#cbd5e1',
                      lineHeight: '1.5'
                    }}>
                      <span style={{ color: '#3b82f6', marginRight: '0.5rem', fontSize: '0.875rem' }}>✓</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h5 style={{ fontSize: '1rem', fontWeight: '600', color: '#f8fafc', marginBottom: '0.75rem' }}>
                  Technologies:
                </h5>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} style={{
                      background: 'rgba(59, 130, 246, 0.1)',
                      color: '#3b82f6',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      border: '1px solid rgba(59, 130, 246, 0.2)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(59, 130, 246, 0.2)';
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(59, 130, 246, 0.1)';
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 