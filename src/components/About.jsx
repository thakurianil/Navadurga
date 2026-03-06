import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './About.css';

const About = () => {
    const { t } = useTranslation();
    const features = t('about.features', { returnObjects: true }) || [];

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
                            <span className="exp-number text-primary">{t('about.est')}</span>
                            <span className="exp-text">2010</span>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="about-content">
                        <h4 className="section-subtitle-small">{t('about.subtitle')}</h4>
                        <h2 className="section-title text-left">
                            {t('about.title_start')} <span className="text-primary">{t('about.title_highlight')}</span>
                        </h2>

                        <p className="about-desc">
                            {t('about.desc_1')}
                        </p>

                        <p className="about-desc">
                            {t('about.desc_2')}
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
                            <a href="#contact" className="btn btn-primary">{t('about.btn_speak')}</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
