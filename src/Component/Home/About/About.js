import React from 'react';
import photo from '../../../images/about.jpg'

const About = () => {
    return (
        <div className="container font-nunito">

            <div className="row m-0">
                <div className="col d-none d-md-block col-md-2 col-lg-3"></div>
                <div className="mx-4 m-md-0 d-flex align-items-center col col-md-8 col-lg-6 box text-light  ">
                    <div className="border border-2 border-warning p-3 rounded text-warning">
                        <h2 className="">About Me</h2>
                        <img class="w-50 rounded-circle mb-3 border border-2 border-warning" src={photo} alt="dev-img" />
                        <p >Hey! My name is Supravat Sarkar. I'm from Bankura which is located in West Bengal, India. I'm a Junior Frontend Developer. I completed Bachalar of Arts from Burdwan University and also I'm a drop out student of CSE. I describe my self as a passionate developer who loves coding, problem solving, implement new things, fixed bug.</p>
                        <p>
                            In my free time you can find me at the gym 🏋️‍♂️, at the beach 🏖 or on tech meetups
                        </p>
                        <p>Currently I learning MERN stack Development.</p>
                        <button type="button" class="btn btn-warning">Hire Me</button>
                    </div>
                </div>
                <div className="m-0 col d-none d-md-block col-md-2 col-lg-3"></div>
            </div>
        </div >
    );
};

export default About;