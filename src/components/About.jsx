import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="lead">
              Full Stack Developer with 2+ years of professional experience in building scalable web applications
              and CRM systems.
            </p>
            <p>
              I specialize in developing enterprise-level applications using modern web technologies.
              My expertise spans across both frontend and backend development, with a strong focus on
              creating efficient, user-friendly solutions.
            </p>
            <p>
              Throughout my career, I've successfully delivered multiple projects including e-commerce platforms,
              CRM systems, and booking applications. I'm passionate about writing clean, maintainable code
              and continuously learning new technologies to stay at the forefront of web development.
            </p>
          </div>
          <div className="experience-timeline">
            <h3>Professional Journey</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4>Full Stack Developer</h4>
                  <span className="timeline-period">2022 - Present</span>
                  <p>Developing and maintaining enterprise web applications using PHP, Laravel, React, and Node.js</p>
                  <ul>
                    <li>Built multiple CRM systems and e-commerce platforms</li>
                    <li>Implemented RESTful APIs and database architectures</li>
                    <li>Collaborated with cross-functional teams</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
