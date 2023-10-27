import React from 'react';
import logo from '../../../assets/logo.svg';
import google from '../../../assets/iconlogo/google.png';
import instra from '../../../assets/iconlogo/instra.png';
import linkedin from '../../../assets/iconlogo/linkdin.png';
import twiter from '../../../assets/iconlogo/twiter.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 bg-black text-white text-base-content">
                <aside>
                   <img src={logo} alt="" /> 
                   <p>Edwin Diaz is a software and web  <br />
                   technologies engineer, a life coach <br />
                    trainer who is also a serial .</p>
                    <div className='flex text-white'>
                     <Link>  <img className='w-[50px]' src={google} alt="" /></Link>
                     
                       <Link><img className='w-[60px]' src={linkedin} alt="" /></Link>
                      <Link>  <img className='w-[60px]' src={twiter} alt="" /></Link>
                    </div>
                </aside>
                <nav>
                    <header className="footer-title">About</header>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Service</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">Why Car Doctor</a>
                    <a className="link link-hover">About</a>
                
                </nav>
                <nav>
                    <header className="footer-title">Support</header>
                    <a className="link link-hover">Support Center</a>
                    <a className="link link-hover">Feedback</a>
                    <a className="link link-hover">Accesbility</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;