import React from 'react';
import { MapPin } from 'lucide-react';
import './LocationMap.css';

const LocationMap = () => {
    return (
        <section id="location" className="section map-section bg-white">
            <div className="container">
                <h4 className="section-subtitle-small text-center">Find Us</h4>
                <h2 className="section-title text-center">Visit Our Store</h2>
                <p className="section-subtitle text-center">
                    Experience our premium collection firsthand at our showroom in Pokhara.
                </p>

                <div className="map-container glass">
                    <div className="map-overlay-card">
                        <h3 className="map-card-title">Navadurga Sanitaryware</h3>
                        <div className="map-card-address">
                            <MapPin size={20} className="map-icon" />
                            <span>Srijana Chowk, Pokhara,<br />Gandaki Province, Nepal</span>
                        </div>
                        <a
                            href="https://maps.google.com/?q=Pokhara,Nepal"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary map-btn"
                        >
                            Get Directions
                        </a>
                    </div>

                    <div className="google-map-embed">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112467.24157158309!2d83.9016183!3d28.2201994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995937bbf0376ff%3A0xf6cf823b25803e7c!2sPokhara%2C%20Nepal!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
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
