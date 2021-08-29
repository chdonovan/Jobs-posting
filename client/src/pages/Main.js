import React from 'react';
import { NavLink } from 'react-router-dom';

const Main = () => {
  return (
    <div className='mt-10 w-3/5 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 sm:content-around'>
      <p className='cust-font mb-16 mt-3 lg:text-3xl text-center text-base text-gray-500 sm:mt-5 sm:text-lg  mx-auto md:mt-5 md:text-xl '>
        We are here to help you with all your needs!
        <br /> Choose what you want to do:
      </p>
      <div className='mt-5 sm:mt-8 sm:flex justify-around'>
        <div className='grid justify-items-center'>
          <div className='w-60 mt-3 sm:mt-0'>
              <NavLink
                exact
                to='/JobPosting'
                className='btn-main-yellow font-bold flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-gray-600 md:py-4 md:text-lg md:px-10 nav-link'
                replace
              >
                I need help
              </NavLink>
          </div>
          <p className='mt-3 lg:text-base text-center text-base text-gray-500 sm:mt-5 sm:text-lg  mx-auto md:mt-5 md:text-xl justify-center border-opacity-0'>
            Create listing. Set your price.
            <br /> Choose between hundreds of gigs!
          </p>
        </div>
        <div className='grid justify-items-center'>
          <div className='w-60 mt-3 sm:mt-0'>
              <NavLink
                exact
                to='/Dashboard'
                className='btn-main-orange font-bold nav-link w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-gray-600 md:py-4 md:text-lg md:px-10'
                replace
              >
                I want to help
              </NavLink>
          </div>
          <p className='mt-3 lg:text-base text-center text-base text-gray-500 sm:mt-5 sm:text-lg  mx-auto md:mt-5 md:text-xl justify-center '>
            Need some cash? Easy-peasy!
            <br /> Your money just 3 clicks away!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
