import React from 'react';
import { MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './LocationMap.css';

const LocationMap = () => {
    const { t } = useTranslation();

    return (
        <section id="location" className="section map-section bg-white">
            <div className="container">
                <h4 className="section-subtitle-small text-center">{t('location.subtitle')}</h4>
                <h2 className="section-title text-center">{t('location.title')}</h2>
                <p className="section-subtitle text-center">
                    {t('location.desc')}
                </p>

                <div className="map-container glass">
                    <div className="map-overlay-card">
                        <h3 className="map-card-title">{t('location.store_name')}</h3>
                        <div className="map-card-address">
                            <MapPin size={20} className="map-icon" />
                            <span>{t('location.address_line1')}<br />{t('location.address_line2')}</span>
                        </div>
                        <a
                            href="https://www.google.com/maps/place/Navadurga+Sanitaryware+and+Hardware/@28.2177905,83.9837224,17z/data=!4m16!1m9!3m8!1s0x3995954091ecd0cd:0x8cf24278bd6d3e6e!2sNavadurga+Sanitaryware+and+Hardware!8m2!3d28.2177905!4d83.9837224!9m1!1b1!16s%2Fg%2F11rr5jt0hw!3m5!1s0x3995954091ecd0cd:0x8cf24278bd6d3e6e!8m2!3d28.2177905!4d83.9837224!16s%2Fg%2F11rr5jt0hw?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary map-btn"
                        >
                            {t('location.btn_directions')}
                        </a>
                    </div>

                    <div className="google-map-embed">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.688846985023!2d83.98114747514101!3d28.21779517589304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995954091ecd0cd%3A0x8cf24278bd6d3e6e!2sNavadurga%20Sanitaryware%20and%20Hardware!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Navadurga Sanitaryware Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationMap;
