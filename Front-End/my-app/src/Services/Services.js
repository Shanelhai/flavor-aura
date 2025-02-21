import React from 'react';
import Servicedata from './Servicedata';
import './Services.css';
import { Link } from 'react-router-dom'; 
import Footer from '../Footer/Footer'; 

const Services = () => {
    return (
        <>
            <div className="services-container">
            {Servicedata.map(service => (
                <div key={service.id} className="service-card">
                    <img src={service.image} alt={service.name} className="service-image" />
                    <h3 className="service-name">{service.name}</h3>
                    <p className="service-description">{service.description}</p>
                    <Link to={service.link}>
                    <button className="service-button">{service.button}</button>
                    </Link>
                </div>
            ))}
        </div>
        <Footer />
        </>
    );
};

export default Services;
