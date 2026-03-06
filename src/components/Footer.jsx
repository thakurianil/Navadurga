import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer bg-primary">
            <div className="container footer-content">

                {/* Brand Column */}
                <div className="footer-col brand-col">
                    <div className="footer-logo">
                        <img src="/logo.png" alt="Navadurga" className="footer-logo-image" />
                    </div>
                    <p className="footer-desc">
                        {t('footer.desc')}
                    </p>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                    </div>
                </div>

                {/* Quick Links Column */}
                <div className="footer-col">
                    <h4 className="footer-heading">{t('footer.quick_links')}</h4>
                    <ul className="footer-links">
                        <li><Link to="/#home">{t('nav.home')}</Link></li>
                        <li><Link to="/#about">{t('nav.about')}</Link></li>
                        <li><Link to="/#products">{t('nav.products')}</Link></li>
                        <li><Link to="/#brands">{t('nav.brands')}</Link></li>
                        <li><Link to="/reviews">{t('nav.reviews')}</Link></li>
                        <li><Link to="/#contact">{t('nav.contact')}</Link></li>
                    </ul>
                </div>

                {/* Categories Column */}
                <div className="footer-col">
                    <h4 className="footer-heading">{t('footer.categories')}</h4>
                    <ul className="footer-links">
                        <li><Link to="/category/bathroom-fittings">Bathroom Fittings</Link></li>
                        <li><Link to="/category/kitchen-fixtures">Kitchen Fixtures</Link></li>
                        <li><Link to="/category/pipes-fittings">Pipes & Fittings</Link></li>
                        <li><Link to="/category/hardware-tools">Hardware Tools</Link></li>
                    </ul>
                </div>

                {/* Contact Info Column */}
                <div className="footer-col">
                    <h4 className="footer-heading">{t('footer.contact_info')}</h4>
                    <ul className="contact-info-list">
                        <li>
                            <MapPin size={18} className="contact-icon" />
                            <span>{t('footer.address')}</span>
                        </li>
                        <li>
                            <Phone size={18} className="contact-icon" />
                            <span>{t('footer.phone')}</span>
                        </li>
                        <li>
                            <Mail size={18} className="contact-icon" />
                            <span>{t('footer.email')}</span>
                        </li>
                        <li>
                            <Clock size={18} className="contact-icon" />
                            <span>{t('footer.hours')}</span>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="footer-bottom">
                <div className="container bottom-inner">
                    <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
                    <p className="developed-by">{t('footer.developed_by')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
