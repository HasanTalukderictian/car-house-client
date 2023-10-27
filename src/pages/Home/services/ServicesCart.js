import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
const ServicesCart = ({service}) => {
    
    const {title, img, price} = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} className='rounded-lg' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn "><FaArrowRight></FaArrowRight></button>
                </div>
            </div>
        </div>
    );
};

export default ServicesCart;