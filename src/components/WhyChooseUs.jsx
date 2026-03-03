import React from 'react';
import { ShieldCheck, ThumbsUp, Tag, Truck } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const features = [
        {
            id: 1,
            icon: <ShieldCheck size={32} />,
            title: "Trusted Brands",
            desc: "Authorized dealer for high-quality, internationally renowned brands."
        },
        {
            id: 2,
            icon: <ThumbsUp size={32} />,
            title: "Premium Quality",
            desc: "Products that stand the test of time with excellent durability."
        },
        {
            id: 3,
            icon: <Tag size={32} />,
            title: "Competitive Pricing",
            desc: "Get the best value for your investment with our fair pricing policy."
        },
        {
            id: 4,
            icon: <Truck size={32} />,
            title: "Reliable Service",
            desc: "Timely delivery and exceptional customer support before and after sales."
        }
    ];

    return (
        <section id="whychooseus" className="section wcu-section">
            <div className="container">
                <div className="wcu-grid">
                    <div className="wcu-content">
                        <h4 className="section-subtitle-small">Why Choose Us</h4>
                        <h2 className="section-title text-left">The Navadurga Advantage</h2>
                        <p className="section-subtitle text-left wcu-desc">
                            With years of experience in the sanitaryware and hardware industry, we understand what it takes to build a durable and beautiful space. Our commitment to excellence sets us apart.
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
                            <span className="wcu-card-number text-primary">100%</span>
                            <span className="wcu-card-text">Customer Satisfaction</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
