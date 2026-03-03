import React from 'react';
import { CheckCircle } from 'lucide-react';
import './About.css';

const About = () => {
    const features = [
        "Premium quality products for lasting durability",
        "Expert guidance and personalized customer support",
        "Authorized dealers for top international brands",
        "Wide range of sanitary and hardware selections"
    ];

    return (
        <section id="about" className="section bg-white about-section">
            <div className="container">
                <div className="about-grid">

                    {/* Image Side */}
                    <div className="about-image-wrapper">
                        <div className="image-grid">
                            <img
                                src="https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                alt="Elegant modern bathroom sink"
                                className="about-img img-1"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                alt="Premium bathroom shower fitting"
                                className="about-img img-2"
                            />
                        </div>
                        <div className="experience-badge glass">
                            <span className="exp-number text-primary">Est.</span>
                            <span className="exp-text">2010</span>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="about-content">
                        <h4 className="section-subtitle-small">About Our Company</h4>
                        <h2 className="section-title text-left">
                            Building Your Dreams With <span className="text-primary">Trusted Quality</span>
                        </h2>

                        <p className="about-desc">
                            Located in the heart of Pokhara, Gandaki Province, Navadurga Sanitaryware & Hardware has been the go-to destination for homeowners, contractors, builders, and interior designers. We believe that every space deserves the best fitting, which is why we bring you products that combine aesthetics, functionality, and longevity.
                        </p>

                        <p className="about-desc">
                            Whether you are building a new home, renovating an existing space, or managing a large-scale commercial project, our comprehensive selection and industry expertise ensure you find exactly what you need.
                        </p>

                        <ul className="about-features">
                            {features.map((feature, index) => (
                                <li key={index} className="feature-item">
                                    <CheckCircle className="feature-icon" size={22} />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="about-cta">
                            <a href="#contact" className="btn btn-primary">Speak to an Expert</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
