import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Brands from '../components/Brands';
import Products from '../components/Products';
import WhyChooseUs from '../components/WhyChooseUs';
import Reviews from '../components/Reviews';
import LocationMap from '../components/LocationMap';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Brands />
            <Products />
            <WhyChooseUs />
            <Reviews />
            <LocationMap />
            <Contact />
        </>
    );
};

export default Home;
