import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Checkout = () => {

    const service = useLoaderData();
    const { title, _id, price,img } = service;
    const {user} = useContext(AuthContext);
    
    const handleForm = event => {
        event.preventDefault();
        const form = event.target;
        const name = user?.name || form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const price = user?.price;
        const message = form.message.value;
        const order  ={
            customerName: name,
            email: email,
            date,
            service:_id,
            price:price,
            message:message
        }

        console.log(order);

        fetch('http://localhost:5000/boooking',{
            method:'POST',
            headers: {
               'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                form.reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your Booking Successfully',
                    showConfirmButton: false,
                    timer: 2500
                  })
            }
        })

    }


    return (
        <div>
            <h3 className='text-4xl text-center'>Book Service : {title}</h3>

            <div>
                <form onSubmit={handleForm}>
                <div className='mx-26 my-25 p-4'>
                       
                       <div className='my-4 mx-4 p-6 bg-slate-200 rounded'>
                       <div className="form-control w-full my-12 mx-6 p-4  ">
                           
                           <div className=' lg:flex space-x-4 md:flex space-x-4 sm:grid mb-3 mr-4 '>
                           
                           <input type="text" name='name' defaultValue={user?.displayName}placeholder="First Name" className="input input-bordered w-full " />
                           <input type="date" name='date' className="input input-bordered w-full " />
                           </div>

                           <div className=' lg:flex space-x-4 md:flex space-x-4 sm:grid mb-3 mr-4  '>
                           <input type="text" name='price' placeholder="price" defaultValue= {'$ ' + price} readOnly className="input input-bordered w-full " />
                           <input type="email" name='email' defaultValue={user?.email} readOnly  placeholder="Your Email" className="input input-bordered w-full " />
                           </div>

                             <div className=' lg:flex space-x-4 md:flex space-x-4 sm:grid mb-3 mr-4 '>
                             <textarea className="textarea textarea-bordered w-full" name='message' placeholder="Write Your Message"></textarea>
                             </div>
                             
                             <div className=' lg:flex space-x-4 md:flex space-x-4 sm:grid mb-3 mr-4 '>
                                <input type="submit" value="Order"  className="btn  bg-[#FF3811] w-full"/>
                            
                             </div>
                            

                       </div>
                       </div>
                        
                   
                           
                            

                  

                        </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;