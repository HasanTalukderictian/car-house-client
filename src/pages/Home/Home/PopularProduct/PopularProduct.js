import React, { useEffect, useState } from 'react';
import ProductCart from './ProductCart';

const PopularProduct = () => {
   
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    },[])

    return (
        <div>
              <div className='my-4 mx-6 p-4 text-center space-y-4 mb-4'>
              <h2 className='text-xl text-red-600 font-semibold'>Popular Products</h2>
              <h2 className='text-5xl text-black font-semibold'>Browse Our Products</h2>
               <p>the majority have suffered alteration in some form, by injected humour, or randomised <br />
                words which don't look even slightly believable. </p> 
          
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-3'>
                {
                    products.map(product =><ProductCart key={product._id} 
                    product={product}></ProductCart>)
                }
              </div>
               <div className='text-center my-4 p-4'>
               <button className="btn btn-warning">More Products</button>
               </div>
        </div>
    );
};

export default PopularProduct;