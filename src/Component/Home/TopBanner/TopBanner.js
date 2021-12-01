import React from 'react';
import '../TopBanner/TopBanner.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    offset: 0,
    duration: 1500,
});


const TopBanner = () => {
    return (
        <div className="bg-image font-ubuntu ">
            <div className="container-custom ">
                <div className="container row m-0 mx-auto">
                    <div className="col box d-none d-md-block col-md-2 col-lg-3"></div>
                    <div className="mx-2 m-md-0 d-flex align-items-center justify-content-center col col-md-8 col-lg-6 box text-light ">
                        <div className="" >
                            <h1 className="fw-lighter fs-1" data-aos="zoom-in-down" data-aos-offset='10'>{'<Hello/>'}</h1>
                            <h1 className="" data-aos="fade-up" data-aos-offset='10'>I'm Supravat Sarkar</h1>
                            <h3 className=" " data-aos="fade-up" data-aos-delay="200" data-aos-offset='10'>Junior Frontend Developer</h3>
                            <p className="" data-aos="fade-up" data-aos-delay="400" data-aos-offset='10'>I am a self taught Computer Programmer and Frontend Developer. Passionate about coding and also fell well to fixed bugs.
                            </p>
                            <a href="https://drive.google.com/file/d/1hCikE7sq7TiKjDdSBy6p4BxQurDMPyYR/view?usp=sharing" target='_blank' rel='noreferrer'>
                                <button type="button" className="btn btn-primary " data-aos="zoom-in-up" data-aos-delay="600" data-aos-offset='10'>Download Resume</button>
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

{/* <div className="container bg-image font-ubuntu w-100">
            <div className="container-custom w-100">
                <div className="container row m-0 ">
                    <div className="col box d-none d-md-block col-md-2 col-lg-3"></div>
                    <div className="mx-2 m-md-0 d-flex align-items-center col col-md-8 col-lg-6 box text-light">
                        <div className="" >
                            <h1 className="fw-lighter fs-1" data-aos="zoom-in-down" data-aos-offset='10'>{'<Hello/>'}</h1>
                            <h1 className="" data-aos="fade-up" data-aos-offset='10'>I'm Supravat Sarkar</h1>
                            <h3 className=" " data-aos="fade-up" data-aos-delay="200" data-aos-offset='10'>Junior Frontend Developer</h3>
                            <p className="" data-aos="fade-up" data-aos-delay="400" data-aos-offset='10'>I am a self taught Computer Programmer and Frontend Developer. Passionate about coding and also fell well to fixed bugs.
                            </p>
                            <a href="https://drive.google.com/file/d/1hCikE7sq7TiKjDdSBy6p4BxQurDMPyYR/view?usp=sharing" target='_blank' rel='noreferrer'>
                                <button type="button" className="btn btn-primary " data-aos="zoom-in-up" data-aos-delay="600" data-aos-offset='10'>Download Resume</button>
                            </a>
                        </div>
                    </div>
                    <div className="m-0 col box d-none d-md-block col-md-2 col-lg-3"></div>
                </div>
            </div>
        </div > */}