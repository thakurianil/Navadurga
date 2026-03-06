import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
    const { t, i18n } = useTranslation();
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
        { name: t('nav.home'), href: '/#home' },
        { name: t('nav.about'), href: '/#about' },
        { name: t('nav.products'), href: '/#products' },
        { name: t('nav.brands'), href: '/#brands' },
        { name: t('nav.reviews'), href: '/#reviews' },
        { name: t('nav.contact'), href: '/#contact' },
    ];

    const toggleLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header className={`header ${isScrolled ? 'header-scrolled glass' : ''}`}>
            <div className="top-bar">
                <div className="container top-bar-inner">
                    <div className="top-info">
                        <span className="info-item"><MapPin size={14} /> {t('header.location')}</span>
                        <span className="info-item"><Phone size={14} /> +977-9800000000</span>
                    </div>
                    <div className="top-timing">{t('header.open_today')}</div>
                </div>
            </div>

            <div className="container header-main">
                <div className="logo-container">
                    <Link to="/" className="logo">
                        <img src="/logo.png" alt="Navadurga" className="logo-image" />
                    </Link>
                </div>

                <nav className="desktop-nav">
                    <ul className="nav-list">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link to={link.href} className="nav-link">{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="header-actions desktop-actions">
                    <div className="lang-switcher">
                        <button
                            className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
                            onClick={() => toggleLanguage('en')}
                        >
                            EN
                        </button>
                        <span className="lang-divider">|</span>
                        <button
                            className={`lang-btn ${i18n.language === 'np' ? 'active' : ''}`}
                            onClick={() => toggleLanguage('np')}
                        >
                            NP
                        </button>
                    </div>
                    <Link to="/#contact" className="btn btn-primary">{t('header.visit_store')}</Link>
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
                <div className="mobile-lang-switcher">
                    <button
                        className={`lang-btn mobile-lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
                        onClick={() => toggleLanguage('en')}
                    >
                        EN
                    </button>
                    <button
                        className={`lang-btn mobile-lang-btn ${i18n.language === 'np' ? 'active' : ''}`}
                        onClick={() => toggleLanguage('np')}
                    >
                        NP
                    </button>
                </div>
                <ul className="mobile-nav-list">
                    {navLinks.map((link) => (
                        <li key={link.href}>
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
                            {t('header.visit_store')}
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
