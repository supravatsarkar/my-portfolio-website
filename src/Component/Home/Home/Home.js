import React from 'react';
import Skills from '../Skills/Skills';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div style={{ height: '2000px', backgroundColor: '#2B1EC2' }}>
            <TopBanner></TopBanner>
            <Skills></Skills>
        </div>
    );
};

export default Home;