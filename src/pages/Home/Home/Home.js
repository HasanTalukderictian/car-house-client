import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../services/Services';
import CompanyAbout from '../CompanyAbout/CompanyAbout';




const Home = () => {
    return (
        <div>
           <Banner></Banner> 
            <About></About>
            <Services></Services>
            <CompanyAbout></CompanyAbout>
        </div>
    );
};

export default Home;