import React from 'react';
import logo from '../../../src/assets/images/login/login.svg';
import { Link } from 'react-router-dom';

const SignUp = () => {
    
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = event.name.value;
        const email = event.email.value;
        const password = event.password.value;
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" w-1/2 mr-12">
                   
                    <img src={logo} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSignUp} >
                    <h1 className="text-5xl text-center font-bold">Sign Up Here!</h1>
                      
                       <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="email" placeholder="Name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                           
                        </div>
                        <div className="form-control mt-6">
                            
                            <input className="btn btn-warning" type="submit" value="Sign Up" />
                        </div>
                      
                       </form>
                       <p className='my-4 mx-4 p-3 text-center'>Already Have an Account? <Link to='/login' className='text-orange-600 font-bold'>Login</Link></p>
                       
                </div>
            </div>
        </div>
    );
};

export default SignUp;