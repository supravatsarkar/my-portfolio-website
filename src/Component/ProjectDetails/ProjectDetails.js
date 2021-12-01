import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    offset: 200,
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
        feature: [
            '----------- Normal User -----------',
            'User can view all products on explore page',
            'After registering user can place an order for any product',
            'User can one-time register with name, email & password.',
            `After registering user can view details of a product with the 'BUY NOW' button`,
            `User can Place an order with 'PLACE ORDER'. then fill the form to address and other information for placing an order.
            `,
            `After login user can enter the Dashboard route. here he sees the Home, Pay, My Order, Review, logout button on the left sidebar.
            `,
            `  > Home: - User information
            `,
            `  > Pay: - Payment system coming soon
            `,
            `  > My Order: - User Orders
            `,
            `  > Review: - Post review
            `,
            `  > Logout:- Logout from application
            `,
            '',
            '',
            `----------- Admin User -----------`,
            `Admin user id: admin@uncle.com & password:admin@123`,
            'Admin can view same as a normal user and extra future.',
            `After login admin can enter the Dashboard route. here he sees Home, Manages All order, Add Product, Make Admin, Manages Product, logout button on the left sidebar.`,
            `  > Home: - User information`,
            `  > Manage All Order:- Admin can see all order of users & if admin want to delete order and update status 'Pending' to 'Shipped'`,
            `  > Add Product:- Admin can add product with image and other information.`,
            `  > Make Admin:- Admin can make the admin of any registered user.`,
            '  > Manage Product: Admin can able to edit product info and delete any product.',
            '  > Logout:- Logout from the application.',
        ],
        images: [
            'https://i.ibb.co/tQcS0hr/project-1.png',
            'https://i.ibb.co/c2Jcr5H/dazzle-watch-mern-web-app.png',
            'https://i.ibb.co/rcbgpWQ/dazzle-watch-mern-web-app-1.png',
            'https://i.ibb.co/VNRNnNL/dazzle-watch-mern-web-app-2.png',
            'https://i.ibb.co/2FMY9HH/dazzle-watch-mern-web-app-products-618d34ddbd3ba1dc49d89e6f.png',
            'https://i.ibb.co/9y5QZjB/dazzle-watch-mern-web-app-3.png'
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
        feature: [
            'TravelBea is Tour Booking Related Website',
            'Login using Google',
            'Booking ticket for the trip',
            'View and delete bookings',
            'Manage all users bookings [status change, delete',
            'Here you can get a kind of tour, a trip agency.',
            'Private route'

        ],
        images: [
            'https://i.ibb.co/RTLVf3S/project-2.png',
            'https://i.ibb.co/gwgc0pm/travelbea-assignment-11-web-app-3.png',
            'https://i.ibb.co/wKFf3xz/travelbea-assignment-11-web-app-2.png',
            'https://i.ibb.co/qM6xZgm/travelbea-assignment-11-web-app-1.png',
            'https://i.ibb.co/w4dy7qq/travelbea-assignment-11-web-app.png',
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
        feature: [
            'Here you can find most qualified dentist from doctor with details.',
            'You also get dental treatment service with name, description and price from service section.',
            'Here you can click on a service details and you can see the details of service related',
            'You can get a booking appointment form for tooth checkup and treatment from appointment page',
            'Only After login you can access Service details, Appointment and Doctor route. It means these route are created using private route.',
            'Only After login you can access Service details, Appointment and Doctor route. It means these route are created using private route.',
            'Before logging in, you must register on registration page or Google Login',
            'After login you can not access login and register route.After login you see user photo and name/email id.'

        ],
        images: [
            'https://i.ibb.co/PmmJbBc/project-3.png',
            'https://i.ibb.co/gjRWbZn/dental-house-assignment-10-web-app-3.png',
            'https://i.ibb.co/ThJZkGL/dental-house-assignment-10-web-app-2.png',
            'https://i.ibb.co/TKZYMJz/dental-house-assignment-10-web-app-1.png',
            'https://i.ibb.co/MhDLvVC/dental-house-assignment-10-web-app.png',
        ]
    }
]

const ProjectDetails = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState({});

    useEffect(() => {
        const findProject = projects.find(project => project.id == projectId);
        // console.log('from project details-', projects, projectId);
        setProject(findProject);
    }, [projectId])
    return (
        <div className="container text-light py-5">
            <div>
                <h2 className="">Project Name: {project?.name}</h2>
                <p>{project?.description}</p>
                <h2>Technology Use</h2>
                <p>{project?.technologyUse}</p>
                <h2>Features</h2>
                {
                    project?.feature?.map(point => <ul className="text-start">
                        <li>{point}</li>
                    </ul>)
                }
                <div>
                    <a href={project?.liveSite} className="text-warning m-4" target="_blank" rel="noreferrer">Live Website</a>
                    <a href={project?.clientSideRepo} className="text-warning m-4" target="_blank" rel="noreferrer">Client Side Repo</a>
                    {
                        project?.serverSideRepo && <a href={project?.serverSideRepo} className="text-warning m-4" target="_blank" rel="noreferrer">Server Side Repo</a>
                    }
                </div>
                <div className="container ">
                    <h2 className="mt-3">Screenshots</h2>
                    <div className="row border border-2 border-warning p-4 rounded">
                        {
                            project?.images?.map((image, indx) => <div
                                key={indx}
                                class="col-12 col-md-6 col-lg-4">
                                <div className="m-3" data-aos="flip-left">
                                    <img className="img-fluid" src={image} alt="" />
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
            <Link to="/home">
                <button className="btn btn-primary">Go to Home</button>
            </Link>

        </div>
    );
};

export default ProjectDetails;