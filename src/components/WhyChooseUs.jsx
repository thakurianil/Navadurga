import React from 'react';
import { ShieldCheck, ThumbsUp, Tag, Truck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const { t } = useTranslation();
    const translatedFeatures = t('wcu.features', { returnObjects: true }) || [];

    const icons = {
        0: <ShieldCheck size={32} />,
        1: <ThumbsUp size={32} />,
        2: <Tag size={32} />,
        3: <Truck size={32} />
    };

    const features = translatedFeatures.map((feat, index) => ({
        id: index + 1,
        icon: icons[index] || <ShieldCheck size={32} />,
        title: feat.title,
        desc: feat.desc
    }));

    return (
        <section id="whychooseus" className="section wcu-section">
            <div className="container">
                <div className="wcu-grid">
                    <div className="wcu-content">
                        <h4 className="section-subtitle-small">{t('wcu.subtitle')}</h4>
                        <h2 className="section-title text-left">{t('wcu.title')}</h2>
                        <p className="section-subtitle text-left wcu-desc">
                            {t('wcu.desc')}
                        </p>

                        <div className="wcu-features-grid">
                            {features.map((feature) => (
                                <div key={feature.id} className="wcu-feature-card glass">
                                    <div className="wcu-icon-wrapper">
                                        {feature.icon}
                                    </div>
                                    <h3 className="wcu-feature-title">{feature.title}</h3>
                                    <p className="wcu-feature-desc">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="wcu-image-wrapper">
                        <img
                            src="https://images.unsplash.com/photo-1542314831-c4a4e402ce3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Premium bathroom design"
                            className="wcu-main-img"
                        />
                        <div className="wcu-floating-card glass">
                            <span className="wcu-card-number text-primary">{t('wcu.satisfaction_num')}</span>
                            <span className="wcu-card-text">{t('wcu.satisfaction_text')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
