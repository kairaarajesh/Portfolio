import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Rajesh Kumar</span>
          </h1>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <p className="hero-description">
            Building robust web applications with PHP, Laravel, React, and Node.js
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">7+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>
          <div className="hero-cta">
            <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              View My Work
            </button>
            <button
              className="secondary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-card">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="code-body">
              <pre>
{`const developer = {
  name: "Rajesh Kumar",
  role: "Full Stack Developer",
  experience: "2+ years",
  skills: [
    "PHP & Laravel",
    "React & Node.js",
    "MySQL & Database Design",
    "RESTful APIs"
  ]
};`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
