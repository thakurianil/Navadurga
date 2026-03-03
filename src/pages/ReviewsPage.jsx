import React from 'react';
import { ArrowLeft, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { reviewsData } from '../data/reviewsData';
import '../components/Reviews.css'; /* Reuse styles from Reviews component */

const ReviewsPage = () => {
    return (
        <div className="category-page" style={{ paddingTop: '80px', backgroundColor: 'var(--off-white)', minHeight: '100vh' }}>

            <div className="container" style={{ padding: '60px 24px' }}>
                <Link to="/" className="back-link mb-4" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-light)', fontWeight: 500, marginBottom: '40px' }}>
                    <ArrowLeft size={16} /> Back to Home
                </Link>

                <div className="text-center" style={{ marginBottom: '60px' }}>
                    <h1 className="section-title">All Customer Reviews</h1>
                    <p className="section-subtitle mx-auto">
                        Read exactly what all our clients have to say about our quality and service.
                    </p>
                </div>

                <div className="reviews-grid" style={{ marginTop: '0' }}>
                    {reviewsData.map((review) => (
                        <div key={review.id} className="review-card glass" style={{ backgroundColor: 'var(--white)' }}>
                            <Quote size={40} className="quote-icon" />
                            <div className="stars">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={18} className="star-icon filled" />
                                ))}
                                {[...Array(5 - review.rating)].map((_, i) => (
                                    <Star key={i} size={18} className="star-icon" />
                                ))}
                            </div>
                            <p className="review-text">"{review.text}"</p>

                            <div className="review-author">
                                <div className="author-avatar">
                                    {review.name.charAt(0)}
                                </div>
                                <div className="author-info">
                                    <h4 className="author-name">{review.name}</h4>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                                        <p className="author-role">{review.role}</p>
                                        <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>{review.date}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReviewsPage;
