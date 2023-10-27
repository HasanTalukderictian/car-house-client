import React from 'react';
import calender from '../../../assets/icon/calender.png';
import call from '../../../assets/icon/call.png';
import loc from '../../../assets/icon/location.png';

const CompanyAbout = () => {
    return (
        <div className='bg-black w-full  mb-3'>

            <div className='text-white my-7 mx-8 items-center lg:flex md:flex sm:grid'>

                  <div className='flex text-white p-2 w-1/3 space-x-4 my-12 mx-8 mt-15'>
                      <div>
                         <img className='w-[45px]' src={calender} alt="" />
                      </div>
                      <div>
                          <p>We are open monday-friday</p>
                          <h2>7:00 am - 9:00 pm</h2>
                      </div>
                  </div>
                 
                  <div className='flex text-white p-2  space-x-4 w-1/3 my-12 mx-8 mt-15'>
                      <div>
                         <img className='w-[45px]' src={call} alt="" />
                      </div>
                      <div>
                          <p>Have a question?</p>
                          <h2>+2546 251 2658</h2>
                      </div>
                  </div>

                  <div className='flex text-white p-2  space-x-4 w-1/3 my-12 mx-8 mt-15'>
                      <div>
                         <img className='w-[45px]' src={loc} alt="" />
                      </div>
                      <div>
                          <p>Need a repair? our address</p>
                          <h2>Liza Street, New York</h2>
                      </div>
                  </div>
            </div>
            
        </div>
    );
};

export default CompanyAbout;