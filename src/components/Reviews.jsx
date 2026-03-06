import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { reviewsData } from '../data/reviewsData';
import './Reviews.css';

const Reviews = () => {
    const { t } = useTranslation();
    const displayReviews = reviewsData.slice(0, 3);

    return (
        <section id="reviews" className="section reviews-section bg-off-white">
            <div className="container">
                <h4 className="section-subtitle-small text-center">{t('reviews.subtitle')}</h4>
                <h2 className="section-title text-center">{t('reviews.title')}</h2>
                <p className="section-subtitle text-center">
                    {t('reviews.desc')}
                </p>

                <div className="reviews-grid">
                    {displayReviews.map((review) => (
                        <div key={review.id} className="review-card glass">
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
                                    <p className="author-role">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-5">
                    <Link to="/reviews" className="btn btn-secondary review-btn">
                        {t('reviews.btn_view_all')}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
