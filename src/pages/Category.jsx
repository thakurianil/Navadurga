import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { categoriesData } from '../data/categoriesData';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import './Category.css';

const Category = () => {
    const { id } = useParams();
    const category = categoriesData.find(c => c.id === id);

    if (!category) {
        return (
            <div className="section min-vh-70 flex-center" style={{ marginTop: '80px' }}>
                <h2>Category Not Found</h2>
                <Link to="/" className="btn btn-primary mt-4">Return Home</Link>
            </div>
        );
    }

    return (
        <div className="category-page">
            <div className="category-hero" style={{ backgroundImage: `url(${category.coverImg})` }}>
                <div className="category-hero-overlay"></div>
                <div className="container category-hero-content text-center">
                    <h1 className="text-white animate-fade-in">{category.name}</h1>
                    <p className="text-white category-hero-desc mx-auto">{category.desc}</p>
                </div>
            </div>

            <section className="section bg-white category-details-section">
                <div className="container">
                    <Link to="/" className="back-link"><ArrowLeft size={16} /> Back to Home</Link>

                    <div className="category-info-grid mt-4">
                        <div className="category-text">
                            <h2 className="section-title text-left">About our {category.name}</h2>
                            <p className="category-details-para">{category.details}</p>
                            <ul className="category-features-list">
                                {category.features.map((feature, idx) => (
                                    <li key={idx}><CheckCircle className="feature-icon" size={20} /> {feature}</li>
                                ))}
                            </ul>
                            <div className="mt-4">
                                <Link to="/#contact" className="btn btn-primary">Request Quote</Link>
                            </div>
                        </div>

                        <div className="category-gallery-grid">
                            {category.images.map((img, idx) => (
                                <div key={idx} className="gallery-item glass-card">
                                    <img src={img} alt={`${category.name} product ${idx + 1}`} className="gallery-img" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Category;
