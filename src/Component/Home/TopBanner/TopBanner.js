import React from 'react';
import '../TopBanner/TopBanner.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    offset: 100,
    duration: 1500,
});


const TopBanner = () => {
    return (
        <div className="bg-image font-ubuntu">
            <div className="container-custom">
                <div className="container-custom row m-0">
                    <div className="col box d-none d-md-block col-md-2 col-lg-3"></div>
                    <div className="mx-4 m-md-0 d-flex align-items-center col col-md-8 col-lg-6 box text-light">
                        <div className="" >
                            <h1 className=" fs-1" data-aos="zoom-in-down">{'<Hello/>'}</h1>
                            <h1 className="" data-aos="zoom-in-right">I'm Supravat Sarkar</h1>
                            <h3 class=" " data-aos="zoom-in-left">Junior Frontend Developer</h3>
                            <p class="" data-aos="zoom-in-up">I am a self taught Computer Programmer and Frontend Developer. Passionate about coding and also fell well to fixed bugs.
                            </p>
                            <a href="https://drive.google.com/file/d/1hCikE7sq7TiKjDdSBy6p4BxQurDMPyYR/view?usp=sharing" target='_blank' rel='noreferrer'>
                                <button type="button" class="btn btn-primary " data-aos="zoom-in-up">Download Resume</button>
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