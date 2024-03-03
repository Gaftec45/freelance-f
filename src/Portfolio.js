import React from 'react';
// Import your images if they're local
import image1 from './assets/image/TEGA-LOG.png'; // Update the path as necessary


const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Project One",
      description: "A brief description of Project One.",
      imageUrl: image1,
      projectUrl: "http://example.com/project-one"
    },
    {
      id: 2,
      title: "Project Two",
      description: "A brief description of Project Two.",
      imageUrl: image1,
      projectUrl: "http://example.com/project-two"
    },
    // Add more portfolio items
  ];

  return (
    <div className="portfolio">
      <h2>Tega's Portfolio</h2>
      <div className="portfolio-items">
        {portfolioItems.map(item => (
          <div key={item.id} className="portfolio-item">
            <img src={item.imageUrl} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href={item.projectUrl} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;