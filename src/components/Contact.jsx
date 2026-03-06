import React, { useState, useRef } from 'react';
import { Send, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
    const { t } = useTranslation();
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Utilizing actual EmailJS credentials
        emailjs.sendForm(
            'service_ox5j6f7', // Example inferred mapping or placeholder ID
            'template_g157jdf', // Example inferred mapping or placeholder ID
            form.current,
            '3fEnrrF1K42kCY57p' // Supplied public key
        )
            .then((result) => {
                console.log(result.text);
                setSubmitStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
            }, (error) => {
                console.log(error.text);
                setSubmitStatus('error');
            })
            .finally(() => {
                setIsSubmitting(false);
                // Hide the status message after 5 seconds
                setTimeout(() => setSubmitStatus(null), 5000);
            });
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="contact-grid">

                    {/* Contact Form */}
                    <div className="contact-form-wrapper glass">
                        <h3 className="contact-form-title">{t('contact.form_title')}</h3>
                        <p className="contact-form-subtitle">
                            {t('contact.form_subtitle')}
                        </p>

                        <form ref={form} onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">{t('contact.label_name')}</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="user_name" // Changed to match typical EmailJS template variables
                                    value={formData.user_name}
                                    onChange={(e) => {
                                        setFormData({ ...formData, user_name: e.target.value, name: e.target.value })
                                    }}
                                    required
                                    placeholder={t('contact.placeholder_name')}
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">{t('contact.label_email')}</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="user_email" // Changed to match typical EmailJS template variables
                                        value={formData.user_email}
                                        onChange={(e) => {
                                            setFormData({ ...formData, user_email: e.target.value, email: e.target.value })
                                        }}
                                        required
                                        placeholder={t('contact.placeholder_email')}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">{t('contact.label_phone')}</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="user_phone" // Changed to match typical EmailJS template variables
                                        value={formData.user_phone}
                                        onChange={(e) => {
                                            setFormData({ ...formData, user_phone: e.target.value, phone: e.target.value })
                                        }}
                                        required
                                        placeholder={t('contact.placeholder_phone')}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">{t('contact.label_message')}</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    placeholder={t('contact.placeholder_message')}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary submit-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? t('contact.btn_sending') : t('contact.btn_send')}
                                {!isSubmitting && <Send size={18} />}
                            </button>

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <div className="status-message success mt-4 p-3 bg-green-50 text-green-700 rounded-md flex items-center gap-2 border border-green-200" style={{ marginTop: '16px', padding: '12px', backgroundColor: '#ecfdf5', color: '#047857', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #a7f3d0' }}>
                                    <CheckCircle size={20} />
                                    <span>{t('contact.status_success')}</span>
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="status-message error mt-4 p-3 bg-red-50 text-red-700 rounded-md flex items-center gap-2 border border-red-200" style={{ marginTop: '16px', padding: '12px', backgroundColor: '#fef2f2', color: '#b91c1c', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #fecaca' }}>
                                    <AlertCircle size={20} />
                                    <span>{t('contact.status_error')}</span>
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Quick Contact CTA */}
                    <div className="quick-contact">
                        <h2 className="section-title text-left text-white">{t('contact.quick_title')}</h2>
                        <p className="quick-contact-desc text-white">
                            {t('contact.quick_desc')}
                        </p>

                        <div className="whatsapp-card glass">
                            <div className="whatsapp-icon-wrapper">
                                <MessageCircle size={32} />
                            </div>
                            <div className="whatsapp-content">
                                <h4>{t('contact.whatsapp_title')}</h4>
                                <p>{t('contact.whatsapp_desc')}</p>
                                <a
                                    href="https://wa.me/0452348839"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-accent whatsapp-btn"
                                >
                                    {t('contact.whatsapp_btn')}
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
