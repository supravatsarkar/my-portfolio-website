import React from 'react';
import '../TopBanner/TopBanner.css';

const TopBanner = () => {
    return (
        <div className="bg-image font-ubuntu">
            <div className="container-custom">
                <div className="container-custom row m-0">
                    <div className="col box d-none d-md-block col-md-2 col-lg-3"></div>
                    <div className="mx-4 m-md-0 d-flex align-items-center col col-md-8 col-lg-6 box text-light">
                        <div className="">
                            <h1 className="animate__animated animate__fadeInDown fw-lighter fs-1">{'<Hello/>'}</h1>
                            <h1 className="animate__animated animate__fadeInLeft">I'm Supravat Sarkar</h1>
                            <h3 class="animate__animated animate__fadeInRight ">Junior Frontend Developer</h3>
                            <p class="animate__animated animate__fadeInUp">I am a self taught Computer Programmer and Frontend Developer. Passionate about coding and also fell well to fixed bugs.
                            </p>
                            <a href="https://drive.google.com/file/d/1hCikE7sq7TiKjDdSBy6p4BxQurDMPyYR/view?usp=sharing" target='_blank' rel='noreferrer'>
                                <button type="button" class="btn btn-primary animate__animated animate__fadeInUp">Download Resume</button>
                            </a>
                        </div>
                    </div>
                    <div className="m-0 col box d-none d-md-block col-md-2 col-lg-3"></div>
                </div>
            </div>
        </div >
    );
};

export default TopBanner;