import React, { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
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
        // Simulate form submission
        alert('Thank you for contacting us. We will get back to you shortly!');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="contact-grid">

                    {/* Contact Form */}
                    <div className="contact-form-wrapper glass">
                        <h3 className="contact-form-title">Send Us a Message</h3>
                        <p className="contact-form-subtitle">
                            Have a question about our products or need a quote? Fill out the form and our team will get back to you.
                        </p>

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="+977-98..."
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary submit-btn">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>

                    {/* Quick Contact CTA */}
                    <div className="quick-contact">
                        <h2 className="section-title text-left text-white">Let's Discuss Your Project</h2>
                        <p className="quick-contact-desc text-white">
                            Whether you're renovating a single bathroom or supplying a large construction project, Navadurga Sanitaryware & Hardware has the right solutions for you.
                        </p>

                        <div className="whatsapp-card glass">
                            <div className="whatsapp-icon-wrapper">
                                <MessageCircle size={32} />
                            </div>
                            <div className="whatsapp-content">
                                <h4>Chat with us on WhatsApp</h4>
                                <p>Get instant replies from our sales team</p>
                                <a
                                    href="https://wa.me/9779800000000"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-accent whatsapp-btn"
                                >
                                    Start Chat
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
