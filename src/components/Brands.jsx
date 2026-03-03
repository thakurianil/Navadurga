import React from 'react';
import './Brands.css';

const Brands = () => {
    const brandLogos = [
        { name: "Jaquar", fallback: "Jaquar", color: "#1a1a1a" },
        { name: "Panchakanya", fallback: "Panchakanya", color: "#d32f2f" },
        { name: "Lisara", fallback: "Lisara", color: "#1976d2" },
        { name: "Cera", fallback: "Cera", color: "#e65100" },
        { name: "Hindware", fallback: "Hindware", color: "#004d40" },
    ];

    return (
        <section id="brands" className="section brands-section">
            <div className="container">
                <h2 className="section-title text-center">Our Trusted Brands</h2>
                <p className="section-subtitle">
                    We are proud authorized dealers of the most reputable brands in the industry, ensuring you get nothing but the best.
                </p>

                <div className="brands-marquee-container">
                    <div className="brands-track">
                        {/* Original set */}
                        {brandLogos.map((brand, index) => (
                            <div key={index} className="brand-logo-card glass">
                                <span className="brand-fallback-text" style={{ color: brand.color }}>
                                    {brand.fallback}
                                </span>
                            </div>
                        ))}
                        {/* Duplicated set for seamless animation */}
                        {brandLogos.map((brand, index) => (
                            <div key={`dup-${index}`} className="brand-logo-card glass" aria-hidden="true">
                                <span className="brand-fallback-text" style={{ color: brand.color }}>
                                    {brand.fallback}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brands;
