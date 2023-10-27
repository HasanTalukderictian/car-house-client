import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TeamCart = ({ member }) => {

    const { name, img, facebook_id, instagram_id, linkedin_id } = member;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Exper Engine</p>
                <div className="flex space-x-4">
                   <Link to={`facebook_id`}><FaFacebook></FaFacebook></Link>
                   <Link to={`instagram_id`}><FaInstagram></FaInstagram></Link>
                   <Link to={`linkedin_id`}><FaLinkedin></FaLinkedin></Link>
                </div>
            </div>
        </div>
    );
};

export default TeamCart;