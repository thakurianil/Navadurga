import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/#home' },
        { name: 'About', href: '/#about' },
        { name: 'Products', href: '/#products' },
        { name: 'Brands', href: '/#brands' },
        { name: 'Reviews', href: '/#reviews' },
        { name: 'Contact', href: '/#contact' },
    ];

    return (
        <header className={`header ${isScrolled ? 'header-scrolled glass' : ''}`}>
            <div className="top-bar">
                <div className="container top-bar-inner">
                    <div className="top-info">
                        <span className="info-item"><MapPin size={14} /> Pokhara, Nepal</span>
                        <span className="info-item"><Phone size={14} /> +977-9800000000</span>
                    </div>
                    <div className="top-timing">Open Today: 9:00 AM - 6:30 PM</div>
                </div>
            </div>

            <div className="container header-main">
                <div className="logo-container">
                    <Link to="/" className="logo">
                        <span className="logo-text-primary">Navadurga</span>
                        <span className="logo-text-secondary">Sanitaryware & Hardware</span>
                    </Link>
                </div>

                <nav className="desktop-nav">
                    <ul className="nav-list">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link to={link.href} className="nav-link">{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="header-actions desktop-actions">
                    <Link to="/#contact" className="btn btn-primary">Visit Our Store</Link>
                </div>

                <button
                    className="mobile-menu-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul className="mobile-nav-list">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.href}
                                className="mobile-nav-link"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            to="/#contact"
                            className="btn btn-primary mobile-btn"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Visit Our Store
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
