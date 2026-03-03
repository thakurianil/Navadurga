import React from 'react';
import { ArrowRight, ShieldCheck, Award } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <div className="hero-text animate-fade-in">
                    <div className="hero-badge tracking-in">Premium Quality Assured</div>
                    <h1 className="hero-title">
                        Elevating Spaces with
                        <span className="text-primary-gradient"> Unmatched Quality</span>
                    </h1>
                    <p className="hero-subtitle">
                        Welcome to Navadurga Sanitaryware & Hardware. We provide top-tier plumbing supplies, sanitary fittings, and durable hardware to build the home of your dreams.
                    </p>

                    <div className="hero-actions">
                        <a href="#products" className="btn btn-primary hero-btn">
                            Explore Products <ArrowRight size={20} className="btn-icon" />
                        </a>
                        <a href="#contact" className="btn btn-secondary glass hero-btn">
                            Visit Our Store
                        </a>
                    </div>

                    <div className="hero-trust">
                        <div className="trust-item">
                            <ShieldCheck className="trust-icon" size={24} />
                            <span>100% Genuine</span>
                        </div>
                        <div className="trust-item">
                            <Award className="trust-icon" size={24} />
                            <span>Authorized Dealer</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual animate-slide-in-right">
                    <div className="image-wrapper glass-card">
                        <img
                            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Modern luxurious bathroom setting with premium sanitary fittings"
                            className="hero-image"
                        />
                        <div className="floating-badge badge-1">
                            <div className="badge-content">
                                <span className="badge-num">10+</span>
                                <span className="badge-text">Years of Trust</span>
                            </div>
                        </div>
                        <div className="floating-badge badge-2">
                            <div className="badge-content">
                                <span className="badge-num">Premium</span>
                                <span className="badge-text">Brands Available</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
