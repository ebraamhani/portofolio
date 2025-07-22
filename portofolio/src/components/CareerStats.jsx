const CareerStats = () => {
  const stats = [
    {
      icon: '💼',
      value: '1',
      label: 'year',
      subtitle: 'Experience'
    },
    {
      icon: '🏆',
      value: '7',
      label: '',
      subtitle: 'Certifications'
    },
    {
      icon: '🚀',
      value: '8+',
      label: '',
      subtitle: 'Projects'
    },
    {
      icon: '🎓',
      value: '1',
      label: '',
      subtitle: 'IEEE Publication'
    }
  ];

  return (
    <div className="stats-section">
      <div className="section-header">
        <span className="section-icon">📊</span>
        <h2 className="section-title">Career Highlights</h2>
      </div>
      
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">
              {stat.icon}
            </div>
            <div className="stat-value">
              {stat.value}
              {stat.label && <span className="stat-label-text"> {stat.label}</span>}
            </div>
            <div className="stat-label">
              {stat.subtitle}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerStats; 