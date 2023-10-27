import React from 'react';

const ProductCart = ({ product }) => {

    const { img, price,name, rating } = product;

    return (
        <div className="card w-96 bg-base-500 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-red">{name}</h2>
                <p className='text-orange-700'>Rating: {rating}</p>
                <p className='text-orange-700'>Price ${price}</p>
                
            </div>
        </div>
    );
};

export default ProductCart;