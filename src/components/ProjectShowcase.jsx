import React from 'react';
import './ProjectShowcase.css';

const ProjectShowcase = () => {
    const projects = [
        {
            title: "Luxury Villa Plumbing",
            img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Sanitary & Pipes"
        },
        {
            title: "Commercial Complex",
            img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Complete Construction Flow"
        },
        {
            title: "Modern Apartment Bathrooms",
            img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Tiles & Fittings"
        }
    ];

    return (
        <section id="projects" className="section projects-section bg-light">
            <div className="container">
                <h4 className="section-subtitle-small text-center">Our Portfolio</h4>
                <h2 className="section-title text-center">Project Showcase</h2>
                <p className="section-subtitle text-center">
                    A glimpse of some of the premium constructions and renovations we have supplied.
                </p>

                <div className="projects-grid mt-4">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card shadow-sm rounded">
                            <div className="project-img-wrapper">
                                <img src={project.img} alt={project.title} className="project-img" />
                                <div className="project-overlay glass">
                                    <h3 className="project-title">{project.title}</h3>
                                    <span className="project-category">{project.category}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectShowcase;
