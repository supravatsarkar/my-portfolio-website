import React from 'react';
import { NavHashLink } from 'react-router-hash-link';

const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">Navbar</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto shadow">
                            < NavHashLink className="px-2 py-1 border border-1 border-light rounded me-2 my-1 text-light bg-dark" aria-current="page" to="/home#top-banner" style={{ textDecoration: 'none' }} activeClassName="selected"
                                activeStyle={{ color: 'red' }}>Home</NavHashLink>
                            <NavHashLink className="px-2 py-1 border border-1 border-light rounded me-2 my-1 text-light bg-dark" to="/home#skills" style={{ textDecoration: 'none' }} >Skills</NavHashLink>
                            <NavHashLink className="px-2 py-1 border border-1 border-light rounded me-2 my-1 text-light bg-dark" to="/home#projects" style={{ textDecoration: 'none' }} activeClassName="selected"
                                activeStyle={{ color: 'red' }}>Projects</NavHashLink>
                            <NavHashLink className="px-2 py-1 border border-1 border-light rounded me-2 my-1 text-light bg-dark" to="/home#about" style={{ textDecoration: 'none' }} activeClassName="selected"
                                activeStyle={{ color: 'red' }}>About</NavHashLink>
                            <NavHashLink className="px-2 py-1 border border-1 border-light rounded me-2 my-1 text-light bg-dark" to="/home#contact" style={{ textDecoration: 'none' }} activeClassName="selected"
                                activeStyle={{ color: 'red' }}>Contact</NavHashLink>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;