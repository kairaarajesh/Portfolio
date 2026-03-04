import { useState } from 'react';
import './Projects.css';

function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'KaitWorld Website',
      description: 'A comprehensive business website built with PHP and Laravel framework, featuring dynamic content management and responsive design.',
      tech: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
      category: 'web',
      type: 'PHP/Laravel'
    },
    {
      id: 2,
      title: 'Unikaa Beauty CRM',
      description: 'Customer Relationship Management system for beauty industry with appointment scheduling, inventory management, and customer analytics.',
      tech: ['PHP', 'Laravel', 'MySQL', 'Vue.js'],
      category: 'crm',
      type: 'PHP/Laravel'
    },
    {
      id: 3,
      title: 'PickNowCRM',
      description: 'Advanced CRM platform for e-commerce businesses with order tracking, customer management, and sales analytics dashboard.',
      tech: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
      category: 'crm',
      type: 'PHP/Laravel'
    },
    {
      id: 4,
      title: 'VPay Bus Booking',
      description: 'Online bus ticket booking system with real-time seat selection, payment gateway integration, and booking management.',
      tech: ['PHP', 'Laravel', 'MySQL', 'Payment Gateway'],
      category: 'booking',
      type: 'PHP/Laravel'
    },
    {
      id: 5,
      title: 'PickNow Ecommerce',
      description: 'Full-featured e-commerce platform with product catalog, shopping cart, order management, and secure payment processing.',
      tech: ['PHP', 'Laravel', 'MySQL', 'Stripe API'],
      category: 'ecommerce',
      type: 'PHP/Laravel'
    },
    {
      id: 6,
      title: 'Unikaa Beauty Website',
      description: 'Modern beauty salon website built with Node.js backend and React frontend, featuring service booking and gallery showcase.',
      tech: ['Node.js', 'React', 'Express', 'MongoDB'],
      category: 'web',
      type: 'Node.js/React'
    },
    {
      id: 7,
      title: 'Stacking CRM',
      description: 'Inventory and warehouse management CRM built with React, featuring real-time stock tracking and order fulfillment.',
      tech: ['React', 'Redux', 'REST API', 'Material-UI'],
      category: 'crm',
      type: 'React'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'crm', label: 'CRM Systems' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'web', label: 'Websites' },
    { id: 'booking', label: 'Booking Systems' }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A showcase of my professional work across various domains
        </p>

        <div className="project-filters">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-type">{project.type}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-footer">
                <span className="project-category">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
