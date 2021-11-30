import React from 'react';
import project1 from '../../../images/projects/project-1.png'
import project2 from '../../../images/projects/project-2.png'
import project3 from '../../../images/projects/project-3.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    offset: 250,
    duration: 1200,
});

const Projects = () => {
    return (
        <div className="my-5 text-white container">
            <h2 className="mb-3 mt-5">My Projects</h2>
            <div className="row m-0">
                <div className="col-12 col-md-4 " >
                    <div class="card border border-0 my-3" data-aos="zoom-in-right">
                        <img src={project1} class="card-img-top img-fluid shadow " alt="..." />
                        <div class="card-body text-primary">
                            <h5 class="card-title">Dazzle Watch</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">View Details</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div class="card border border-0 my-3" data-aos="zoom-in-up">
                        <img src={project2} class="card-img-top img-fluid shadow" alt="..." />
                        <div class="card-body text-primary " >
                            <h5 class="card-title">Travel Bea</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">View Details</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 rounded shadow">
                    <div class="card border border-0 my-3" data-aos="zoom-in-left">
                        <img src={project3} class="card-img-top img-fluid shadow" alt="..." />
                        <div class="card-body text-primary">
                            <h5 class="card-title">Dental House</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">View Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;