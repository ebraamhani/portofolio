const Hero = () => {
  const handleDownloadCV = () => {
    // You can replace this with your actual CV file path
    const cvUrl = '/path-to-your-cv.pdf'; // Update this with your actual CV file
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Ebraam_Hani_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="hero-section">
      {/* Abstract geometric shapes */}
      <div className="hero-shapes"></div>
      
      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Ebraam Hani</span>
        </h1>
        <p className="hero-subtitle">
          AI Engineer & Software Developer crafting intelligent solutions in NLP, Machine Learning, and Full-Stack Development.
        </p>
        
        {/* Download CV Button */}
        <button className="hero-cv-btn" onClick={handleDownloadCV}>
          <span className="cv-btn-icon">📄</span>
          <span className="cv-btn-text">Download CV</span>
        </button>
      </div>
    </div>
  );
};

export default Hero; 