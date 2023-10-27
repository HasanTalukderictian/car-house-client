import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../services/Services';
import CompanyAbout from '../CompanyAbout/CompanyAbout';
import PopularProduct from './PopularProduct/PopularProduct';
import Team from './Team/Team';




const Home = () => {
    return (
        <div>
           <Banner></Banner> 
            <About></About>
            <Services></Services>
            <CompanyAbout></CompanyAbout>
            <PopularProduct></PopularProduct>
            <Team></Team>
        </div>
    );
};

export default Home;