import React from 'react';
import project1 from '../../../images/projects/project-1.jpg'
import project2 from '../../../images/projects/project-2.jpg'
import project3 from '../../../images/projects/project-3.jpg'
import { Link } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    offset: 250,
    duration: 1200,
});

const projects = [
    {
        id: 1,
        name: 'Dazzle Watch',
        liveSite: 'https://dazzle-watch-mern.web.app/',
        clientSideRepo: 'https://github.com/supravatsarkar/watch-dazzle-client-side-a12',
        serverSideRepo: 'https://github.com/supravatsarkar/watch-dazzle-server-side-a12',
        description: 'Dazzle Watch is a branded watch selling web application based on MERN Stack. Users can buy many types of watches here.',
        technologyUse: `React js, Material UI (React UI), Node JS, Express js (node framework),
        No SQL Database (MongoDB),
        Google Firebase for authentication and client-side hosting,
        Heroku for server-side hosting.`,
        feature: `Normal User
        User can view all products on explore page
        After registering user can place an order for any product
        User can one-time register with name, email & password.
        After registering user can view details of a product with the 'BUY NOW' button
        User can Place an order with 'PLACE ORDER'. then fill the form to address and other information for placing an order.
        After login user can enter the Dashboard route. here he sees the Home, Pay, My Order, Review, logout button on the left sidebar.
        Home: - User information
        Pay: - Payment system coming soon
        My Order: - User Orders
        Review: - Post review
        Logout:- Logout from application
        Admin User
        Admin user id: admin@uncle.com & password:admin@123
        Admin can view same as a normal user and extra future.
        After login admin can enter the Dashboard route. here he sees Home, Manages All order, Add Product, Make Admin, Manages Product, logout button on the left sidebar.
        Home: - User information
        Manage All Order:- Admin can see all order of users & if admin want to delete order and update status 'Pending' to 'Shipped'
        Add Product:- Admin can add product with image and other information.
        Make Admin:- Admin can make the admin of any registered user.
        Manage Product: Admin can able to edit product info and delete any product;
        Logout:- Logout from the application`,
        images: [
            'https://i.ibb.co/tQcS0hr/project-1.png',
        ]
    },
    {
        id: 2,
        name: 'Travel Bea',
        liveSite: 'https://travelbea-assignment-11.web.app/',
        clientSideRepo: 'https://github.com/supravatsarkar/travel-bea-client-side-a11',
        serverSideRepo: 'https://github.com/supravatsarkar/travel-bea-server-side-a11.git',
        description: 'Travel Bea is a online tour or booking MERN Stack web application. user can book ticket, delete booking, manage bookings',
        technologyUse: `React js, Bootstrap, Node JS, Express js (node framework), No SQL Database (MongoDB), Google Firebase for authentication and client-side hosting, Heroku for server-side hosting.`,
        feature: `TravelBea is Tour Booking Related Website
        log in using Google with
        Booking ticket for the trip
        view and delete bookings
        Manage all users bookings [status change, delete]
        Here you can get a kind of tour, a trip agency.
        Private route`,
        images: [
            'https://i.ibb.co/RTLVf3S/project-2.png'
        ]
    },
    {
        id: 3,
        name: 'Dental House',
        liveSite: 'https://dental-house-assignment-10.web.app/',
        clientSideRepo: 'https://github.com/supravatsarkar/dental-house-client-side-a10.git',
        serverSideRepo: '',
        description: 'Dental House is a dental clinic appointment booking web application. User also see information related dental clinic',
        technologyUse: `React, React bootstrap, google firebase for authentication and hosting.`,
        feature: `Here you can find most qualified dentist from doctor with details.
        You also get dental treatment service with name, description and price from service section.
        Here you can click on a service details and you can see the details of service related
        You can get a booking appointment form for tooth checkup and treatment from appointment page
        Only After login you can access Service details, Appointment and Doctor route. It means these route are created using private route.
        Before logging in, you must register on registration page or Google Login.
        After login you can not access login and register route.
        After login you see user photo and name/email id.`,
        images: [
            'https://i.ibb.co/PmmJbBc/project-3.png'
        ]
    }
]

const Projects = () => {
    return (
        <div className="my-5 text-white container" id="projects">
            <h2 className="mb-3 mt-5">My Projects</h2>
            <div className="container row m-0">
                {
                    projects.map(project => <div
                        key={project.id}
                        className="col-12 col-md-4 " >
                        <div className="border border-1 border-light my-3 rounded" >
                            <img data-aos="zoom-in" src={project.images[0]} className="card-img-top img-fluid rounded-2 p-2" alt="..." />
                            <div data-aos="fade-up" className="card-body text-light">
                                <h5 className="card-title text-warning">{project.name}</h5>
                                <p className="card-text">{project.description}</p>
                                <Link to={`/projects/${project.id}`} style={{ textDecoration: 'none' }}><button className="btn btn-warning ">Details</button></Link>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Projects;