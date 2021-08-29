import React from 'react';
import picture from '../assets/images/hero.png'
import {NavLink} from "react-router-dom";


const Home = () => {

    return (
      <div>
        <main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
          <div className='sm:text-center lg:text-left'>
            <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl'>
              <span className='block xl:inline text-gray-600'>Need a gig?</span>{' '}
              <span className='block cust-orange xl:inline'>
                You are in the right place!
              </span>
            </h1>
            <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
              <div className='rounded-md shadow'>
                <NavLink
                  exact
                  to='/Signup'
                  className='shadow-lg btn-main-yellow w-full flex items-center justify-center px-8 py-3 border border-transparent text-base rounded-md text-white font-bold bg-cust-orange hover:bg-red-400 md:py-4 md:text-lg md:px-10 nav-link'
                  replace
                >
                  Sign up
                </NavLink>
              </div>
              <div className='mt-3 sm:mt-0 sm:ml-3'>
                <NavLink
                  exact
                  to='/Login'
                  className='shadow-lg nav-link w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-gray-600 bg-gray-100 hover:bg-gray-200 md:py-4 md:text-lg md:px-10'
                  replace
                >
                  Login
                </NavLink>
              </div>
            </div>
          </div>
        </main>
        <div className='hero-img lg:absolute lg:inset-y-60 lg:right-12 lg:w-7/12'>
          <img alt='avatar' src={picture} />
        </div>
      </div>
    );
}

export default Home;