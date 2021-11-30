import React, { useState } from 'react';
import Skills from '../Skills/Skills';
import TopBanner from '../TopBanner/TopBanner';
import { BoxesLoader } from "react-awesome-loaders";

const Home = () => {
    const [loading, setLoading] = useState(true);
    window.addEventListener('load', (event) => {
        setLoading(false)
        console.log('page is fully loaded');
    });
    return (
        <div >
            {
                loading ?
                    <BoxesLoader className='mx-auto'
                        boxColor={"#6366F1"}
                        style={{ marginBottom: "20px" }}
                        desktopSize={"128px"}
                        mobileSize={"80px"}
                    />
                    :
                    <div style={{ height: '2000px', backgroundColor: '#2B1EC2' }}>
                        <TopBanner></TopBanner>
                        <Skills></Skills>
                    </div>
            }


        </div>
    );
};

export default Home;