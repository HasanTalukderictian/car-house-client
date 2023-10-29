import React, { useContext } from 'react';
import login from '../../assets/images/login/login.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';


const Login = () => {
    
    const {signIn} = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your  are login Successfully',
                showConfirmButton: false,
                timer: 1500
              })
        })
        .catch(error => console.log(error))
    }
    
   

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" w-1/2 mr-12">
                   
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogin} >
                    <h1 className="text-5xl text-center font-bold">Login now!</h1>
                      
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
                            
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                      
                       </form>
                       <p className='my-4 mx-4 p-3 text-center'>New to Car Doctors? <Link to='/signup' className='text-orange-600 font-bold'>Sign Up</Link></p>
                       
                </div>
            </div>
        </div>
    );
};

export default Login;