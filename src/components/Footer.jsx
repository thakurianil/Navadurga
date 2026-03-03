import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer bg-primary">
            <div className="container footer-content">

                {/* Brand Column */}
                <div className="footer-col brand-col">
                    <div className="footer-logo">
                        <span className="logo-text-primary text-white">Navadurga</span>
                        <span className="logo-text-secondary text-white">Sanitaryware & Hardware</span>
                    </div>
                    <p className="footer-desc">
                        Your trusted partner for premium sanitaryware, plumbing supplies, and durable hardware since 2010. Elevating spaces with quality you can rely on.
                    </p>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                        <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                    </div>
                </div>

                {/* Quick Links Column */}
                <div className="footer-col">
                    <h4 className="footer-heading">Quick Links</h4>
                    <ul className="footer-links">
                        <li><Link to="/#home">Home</Link></li>
                        <li><Link to="/#about">About Us</Link></li>
                        <li><Link to="/#products">Products</Link></li>
                        <li><Link to="/#brands">Partner Brands</Link></li>
                        <li><Link to="/reviews">Customer Reviews</Link></li>
                        <li><Link to="/#contact">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Categories Column */}
                <div className="footer-col">
                    <h4 className="footer-heading">Categories</h4>
                    <ul className="footer-links">
                        <li><Link to="/category/bathroom-fittings">Bathroom Fittings</Link></li>
                        <li><Link to="/category/kitchen-fixtures">Kitchen Fixtures</Link></li>
                        <li><Link to="/category/pipes-fittings">Pipes & Fittings</Link></li>
                        <li><Link to="/category/hardware-tools">Hardware Tools</Link></li>
                    </ul>
                </div>

                {/* Contact Info Column */}
                <div className="footer-col">
                    <h4 className="footer-heading">Contact Info</h4>
                    <ul className="contact-info-list">
                        <li>
                            <MapPin size={18} className="contact-icon" />
                            <span>Pokhara, Gandaki Province, Nepal</span>
                        </li>
                        <li>
                            <Phone size={18} className="contact-icon" />
                            <span>+977-9800000000 / 061-000000</span>
                        </li>
                        <li>
                            <Mail size={18} className="contact-icon" />
                            <span>info@navadurga.com</span>
                        </li>
                        <li>
                            <Clock size={18} className="contact-icon" />
                            <span>Sun - Fri: 9:00 AM - 6:30 PM</span>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="footer-bottom">
                <div className="container bottom-inner">
                    <p>&copy; {new Date().getFullYear()} Navadurga Sanitaryware & Hardware. All rights reserved.</p>
                    <p className="developed-by">Designed with ❤️ for Nepal</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
