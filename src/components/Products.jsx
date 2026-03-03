import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categoriesData } from '../data/categoriesData';
import './Products.css';

const Products = () => {
    return (
        <section id="products" className="section products-section bg-white">
            <div className="container">
                <h4 className="section-subtitle-small text-center">Our Offerings</h4>
                <h2 className="section-title text-center">Explore Our Categories</h2>
                <p className="section-subtitle text-center">
                    Discover our wide range of premium quality sanitaryware and hardware products tailored for your needs.
                </p>

                <div className="products-grid">
                    {categoriesData.map((category) => (
                        <div key={category.id} className="category-card">
                            <div className="card-img-wrapper">
                                <img src={category.coverImg} alt={category.name} className="category-img" />
                                <div className="card-overlay"></div>
                                <div className="category-icon-wrapper glass">
                                    {category.icon}
                                </div>
                            </div>
                            <div className="category-content glass">
                                <h3 className="category-title">{category.name}</h3>
                                <p className="category-desc">{category.desc}</p>
                                <Link to={`/category/${category.id}`} className="explore-link">
                                    View Collection <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
