import React from "react";
import { NavLink } from "react-router-dom";
import skyline from '../assets/images/skyline.png';



const Main = () => {
  return (
    <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <p className="mt-3 lg:text-3xl text-center text-base text-gray-500 sm:mt-5 sm:text-lg  mx-auto md:mt-5 md:text-xl ">
        We are here to help you with all your needs!
        <br /> Choose what you want to do:
      </p>
      <div className="mt-5 sm:mt-8 sm:flex justify-center space-x-20">
        <div className="w-60 rounded-lg shadow ">
          <a>
            <NavLink
              exact
              to="/Signup"
              className="bg-cust-yellow font-bold flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-600 bg-yellow-200 hover:bg-yellow-300 md:py-4 md:text-lg md:px-10 nav-link"
              replace
            >
              I need help
            </NavLink>
            <p className="mt-3 lg:text-base text-center text-base text-gray-500 sm:mt-5 sm:text-lg  mx-auto md:mt-5 md:text-xl justify-center border-opacity-0">
                Create listing. Set your price. 
                <br /> Choose between hundreds of gigs!
            </p>
          </a>
        </div>
        <div className="w-60 mt-3 sm:mt-0 sm:ml-3">
          <a>
            <NavLink
              exact
              to="/Login"
              className="bg-cust-orange font-bold nav-link w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-600 bg-red-300 hover:bg-red-400 md:py-4 md:text-lg md:px-10"
              replace
            >
              I want to help
            </NavLink>
            <p className="mt-3 lg:text-base text-center text-base text-gray-500 sm:mt-5 sm:text-lg  mx-auto md:mt-5 md:text-xl justify-center ">
                Need some cash? Easy-peasy!
                <br /> Your money just 3 clicks away!
            </p>
          </a>
        </div>
      </div>
      <div className="bg-cover">
        <img src={skyline} />
      </div>
    </div>
  );
}

export default Main