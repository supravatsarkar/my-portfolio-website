import React, { useState } from 'react';
import Skills from '../Skills/Skills';
import TopBanner from '../TopBanner/TopBanner';
import Projects from '../Projects/Projects';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';


const Home = () => {
    return (
        <div style={{ minHeight: '3000px' }}>
            <TopBanner></TopBanner>
            <Skills></Skills>
            <Projects></Projects>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;

// #2B1EC2 