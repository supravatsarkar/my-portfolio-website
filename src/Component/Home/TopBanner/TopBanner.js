import React from 'react';
import '../TopBanner/TopBanner.css';

const TopBanner = () => {
    return (
        <div>
            <div className="container-custom">
                <div className="container-custom row m-0">
                    <div className="col box d-none d-md-block col-md-2 col-lg-3"></div>
                    <div className="mx-4 m-md-0 d-flex align-items-center col col-md-8 col-lg-6 box text-white ">
                        <div className="">
                            <h1 className="animate__animated animate__fadeInDown ">Hello</h1>
                            <h1 className="animate__animated animate__fadeInLeft">I'm Supravat Sarkar</h1>
                            <h3 class="animate__animated animate__fadeInRight ">Junior Frontend Developer</h3>
                            <p class="animate__animated animate__fadeInUp">I am a self taught Computer Programmer and Frontend Developer. Passionate about coding and also fell well to fixed bugs.
                            </p>
                        </div>
                    </div>
                    <div className="m-0 col box d-none d-md-block col-md-2 col-lg-3"></div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;