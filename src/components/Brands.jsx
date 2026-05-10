import React from 'react';
import { useTranslation } from 'react-i18next';
import './Brands.css';

const Brands = () => {
    const { t } = useTranslation();
    const brandLogos = [
        { name: "Jaquar", fallback: "Jaquar", color: "#1a1a1a" },
        { name: "Panchakanya", fallback: "Panchakanya Pipe Fittings", color: "#d32f2f" },
        { name: "Berger", fallback: "Berger Paints", color: "#004b87" },
        { name: "ANI", fallback: "ANI Tiles", color: "#4a4a4a" },
        { name: "Laminam", fallback: "Laminam Surface Solutions", color: "#7f7f7f" },
        { name: "Cera", fallback: "Cera", color: "#e65100" },
    ];

    return (
        <section id="brands" className="section brands-section">
            <div className="container">
                <h2 className="section-title text-center">{t('brands.title')}</h2>
                <p className="section-subtitle">
                    {t('brands.subtitle')}
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
