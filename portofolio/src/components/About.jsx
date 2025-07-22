const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="section-header" style={{ marginBottom: '2rem' }}>
        <span className="section-icon">👤</span>
        <h2 className="section-title">About Me</h2>
      </div>

      <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {/* Bio */}
        <div style={{ 
          background: 'rgba(15, 23, 42, 0.6)', 
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          padding: '2rem', 
          borderRadius: '20px', 
          border: '1px solid rgba(148, 163, 184, 0.1)',
          transition: 'all 0.3s ease'
        }}>
          <h3 style={{ 
            fontSize: '1.25rem', 
            fontWeight: '600', 
            color: '#f8fafc', 
            marginBottom: '1rem', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem' 
          }}>
            <span>🎯</span> Professional Summary
          </h3>
          <p style={{ color: '#cbd5e1', lineHeight: '1.7', marginBottom: '1rem' }}>
            Passionate AI Engineer with 3+ years of experience specializing in Natural Language Processing, Machine Learning, and Full-Stack Development. 
            Currently working at TrueStateAI, developing cutting-edge conversational AI systems using advanced RAG pipelines and LLM fine-tuning.
          </p>
          <p style={{ color: '#cbd5e1', lineHeight: '1.7' }}>
            My expertise spans from research (IEEE published paper on Arabic fake news detection) to production systems, 
            with a strong foundation in both theoretical AI concepts and practical software engineering.
          </p>
        </div>

        {/* Education */}
        <div style={{ 
          background: 'rgba(15, 23, 42, 0.6)', 
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          padding: '2rem', 
          borderRadius: '20px', 
          border: '1px solid rgba(148, 163, 184, 0.1)',
          transition: 'all 0.3s ease'
        }}>
          <h3 style={{ 
            fontSize: '1.25rem', 
            fontWeight: '600', 
            color: '#f8fafc', 
            marginBottom: '1rem', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem' 
          }}>
            <span>🎓</span> Education
          </h3>
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontWeight: '600', color: '#f8fafc', marginBottom: '0.5rem' }}>
              B.Sc. in Computer Science
            </h4>
            <p style={{ color: '#94a3b8', marginBottom: '0.5rem' }}>ESLSCA University, Egypt</p>
            <p style={{ color: '#94a3b8', marginBottom: '0.5rem' }}>GPA: 8.00/10.00 | 2021-2024</p>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
              <strong>Focus:</strong> AI, Data Science, Machine Learning, Deep Learning, NLP, Computer Vision
            </p>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div style={{ 
        background: 'rgba(15, 23, 42, 0.6)', 
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        padding: '2rem', 
        borderRadius: '20px', 
        border: '1px solid rgba(148, 163, 184, 0.1)', 
        marginTop: '2rem',
        transition: 'all 0.3s ease'
      }}>
        <h3 style={{ 
          fontSize: '1.25rem', 
          fontWeight: '600', 
          color: '#f8fafc', 
          marginBottom: '1.5rem', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem' 
        }}>
          <span>🏆</span> Key Achievements
        </h3>
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          <div style={{ 
            padding: '1.5rem', 
            background: 'rgba(15, 23, 42, 0.3)', 
            borderRadius: '12px', 
            border: '1px solid rgba(148, 163, 184, 0.1)',
            transition: 'all 0.3s ease'
          }}>
            <h4 style={{ fontWeight: '600', color: '#3b82f6', marginBottom: '0.5rem' }}>📄 IEEE Publication</h4>
            <p style={{ color: '#cbd5e1', fontSize: '0.875rem' }}>
              Published research on "NLP Tool for Fake News Detection" focusing on Arabic social media content using LSTM, BERT, and GPT-4
            </p>
          </div>
          <div style={{ 
            padding: '1.5rem', 
            background: 'rgba(15, 23, 42, 0.3)', 
            borderRadius: '12px', 
            border: '1px solid rgba(148, 163, 184, 0.1)',
            transition: 'all 0.3s ease'
          }}>
            <h4 style={{ fontWeight: '600', color: '#3b82f6', marginBottom: '0.5rem' }}>🥈 2nd Place Winner</h4>
            <p style={{ color: '#cbd5e1', fontSize: '0.875rem' }}>
              Project Green Contest at Credit Agricole Egypt 2023 - Job matching platform with accessibility features
            </p>
          </div>
          <div style={{ 
            padding: '1.5rem', 
            background: 'rgba(15, 23, 42, 0.3)', 
            borderRadius: '12px', 
            border: '1px solid rgba(148, 163, 184, 0.1)',
            transition: 'all 0.3s ease'
          }}>
            <h4 style={{ fontWeight: '600', color: '#3b82f6', marginBottom: '0.5rem' }}>🌐 Live Website</h4>
            <p style={{ color: '#cbd5e1', fontSize: '0.875rem' }}>
              Successfully launched ccf-egypt.com with full admin panel and enrollment system
            </p>
          </div>
        </div>
      </div>

      {/* Current Focus */}
      <div style={{ 
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(29, 78, 216, 0.1) 100%)', 
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        padding: '2rem', 
        borderRadius: '20px', 
        marginTop: '2rem', 
        color: '#f8fafc',
        border: '1px solid rgba(59, 130, 246, 0.2)',
        transition: 'all 0.3s ease'
      }}>
        <h3 style={{ 
          fontSize: '1.25rem', 
          fontWeight: '600', 
          marginBottom: '1rem', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem' 
        }}>
          <span>🚀</span> Current Focus
        </h3>
        <p style={{ lineHeight: '1.7', color: '#cbd5e1' }}>
          Leading AI development at TrueStateAI, specializing in conversational AI systems and RAG-based architectures. 
          Passionate about advancing NLP capabilities and building production-ready AI solutions that solve real-world problems.
        </p>
      </div>
    </section>
  );
};

export default About; 