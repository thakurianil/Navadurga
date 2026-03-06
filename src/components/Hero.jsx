import React from 'react';
import { ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Hero.css';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section id="home" className="hero-section">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <div className="hero-text animate-fade-in">
                    <div className="hero-badge tracking-in">{t('hero.badge')}</div>
                    <h1 className="hero-title">
                        {t('hero.title_start')}
                        <span className="text-primary-gradient"> {t('hero.title_highlight')}</span>
                    </h1>
                    <p className="hero-subtitle">
                        {t('hero.subtitle')}
                    </p>

                    <div className="hero-actions">
                        <a href="#products" className="btn btn-primary hero-btn">
                            {t('hero.btn_explore')} <ArrowRight size={20} className="btn-icon" />
                        </a>
                        <a href="#contact" className="btn btn-secondary glass hero-btn">
                            {t('hero.btn_visit')}
                        </a>
                    </div>

                    <div className="hero-trust">
                        <div className="trust-item">
                            <ShieldCheck className="trust-icon" size={24} />
                            <span>{t('hero.trust_1')}</span>
                        </div>
                        <div className="trust-item">
                            <Award className="trust-icon" size={24} />
                            <span>{t('hero.trust_2')}</span>
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
                                <span className="badge-num">{t('hero.badge_1_num')}</span>
                                <span className="badge-text">{t('hero.badge_1_text')}</span>
                            </div>
                        </div>
                        <div className="floating-badge badge-2">
                            <div className="badge-content">
                                <span className="badge-num">{t('hero.badge_2_num')}</span>
                                <span className="badge-text">{t('hero.badge_2_text')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
