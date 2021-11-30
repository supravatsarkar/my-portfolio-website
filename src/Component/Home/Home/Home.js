import React, { useState } from 'react';
import Skills from '../Skills/Skills';
import TopBanner from '../TopBanner/TopBanner';
import { WifiLoader } from "react-awesome-loaders";

const Home = () => {
    const [loading, setLoading] = useState(true);
    window.addEventListener('load', (event) => {
        setTimeout(() => { setLoading(false) }, 2000);
        console.log('page is fully loaded');
    });
    return (
        <div >
            {
                loading ?
                    <div className="d-flex justify-content-center align-items-center min-vh-100">
                        <WifiLoader
                            background={"transparent"}
                            desktopSize={"150px"}
                            mobileSize={"150px"}
                            text={""}
                            backColor="#E8F2FC"
                            frontColor="#4645F6"
                        />
                    </div>
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