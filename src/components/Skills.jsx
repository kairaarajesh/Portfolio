import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      title: 'Backend Development',
      skills: [
        { name: 'PHP', level: 90 },
        { name: 'Laravel', level: 85 },
        { name: 'Node.js', level: 65 },
        { name: 'RESTful APIs', level: 80 },
      ]
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 65 },
        { name: 'JavaScript', level: 70 },
        { name: 'HTML/CSS', level: 97 },
        { name: 'Responsive Design', level: 85 },
      ]
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Git & GitHub', level: 80 },
        { name: 'Database Design', level: 85 },
        { name: 'API Integration', level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-stack">
          <h3>Technologies I Work With</h3>
          <div className="tech-badges">
            <span className="tech-badge">PHP</span>
            <span className="tech-badge">Laravel</span>
            <span className="tech-badge">React</span>
            <span className="tech-badge">Node.js</span>
            <span className="tech-badge">MySQL</span>
            <span className="tech-badge">MongoDB</span>
            <span className="tech-badge">JavaScript</span>
            <span className="tech-badge">HTML5</span>
            <span className="tech-badge">CSS3</span>
            <span className="tech-badge">Git</span>
            <span className="tech-badge">RESTful APIs</span>
            <span className="tech-badge">Responsive Design</span>
            <span className="tech-badge">Database Design</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
