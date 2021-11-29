import React from 'react';
import developer from '../../../images/developer.jpg'

const Skills = () => {
    return (
        <div className="my-5 text-white container">
            <div className="row m-0">
                <div className="col-12 col-md-4 d-flex align-items-center ">
                    <div className="mx-2 my-2">
                        <h1>I working in 3+ real world project with Based On MERN </h1>
                    </div>
                </div>
                <div className="col-12 col-md-4 d-flex align-items-center ">
                    <div className="mx-2 my-2">
                        <img className="w-100 rounded shadow" src={developer} alt="" />
                    </div>
                </div>
                <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
                    <div className="mx-2 my-2 d-flex flex-column align-items-start justify-content-center w-100">
                        <h6>HTML</h6>
                        <div class="progress w-100 bg-dark mb-3" style={{ height: '10px' }}>
                            <div class="progress-bar bg-light" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h6>CSS</h6>
                        <div class="progress w-100 bg-dark mb-3" style={{ height: '10px' }}>
                            <div class="progress-bar bg-light" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h6>JavaScript</h6>
                        <div class="progress w-100 bg-dark mb-3" style={{ height: '10px' }}>
                            <div class="progress-bar bg-light" role="progressbar" style={{ width: '50%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h6>React</h6>
                        <div class="progress w-100 bg-dark mb-3" style={{ height: '10px' }}>
                            <div class="progress-bar bg-light" role="progressbar" style={{ width: '50%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h6>Node</h6>
                        <div class="progress w-100 bg-dark mb-3" style={{ height: '10px' }}>
                            <div class="progress-bar bg-light" role="progressbar" style={{ width: '25%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h6>Firebase</h6>
                        <div class="progress w-100 bg-dark mb-3" style={{ height: '10px' }}>
                            <div class="progress-bar bg-light" role="progressbar" style={{ width: '50%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h6>MongoDB</h6>
                        <div class="progress w-100 bg-dark mb-3" style={{ height: '10px' }}>
                            <div class="progress-bar bg-light" role="progressbar" style={{ width: '25%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h6>Express</h6>
                        <div class="progress w-100 bg-dark mb-3" style={{ height: '10px' }}>
                            <div class="progress-bar bg-light" role="progressbar" style={{ width: '25%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;