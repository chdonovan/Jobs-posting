import React, { Fragment } from "react";
import { Route, NavLink, HashRouter, Switch} from "react-router-dom";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Auth from "../../utils/auth";
import logo from '../../assets/images/logo.png'

import { BsBriefcase } from 'react-icons/bs';
import { IoSettingsOutline, IoHomeOutline } from 'react-icons/io5';
import { VscSignOut } from 'react-icons/vsc';

import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries'

import Home from '../../pages/Home'
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';
import Main from '../../pages/Main'
import Dashboard from "../../pages/Dashboard";
import Settings from '../../pages/Settings';
import JobPosting from "../../pages/JobPosting";
import MyJobs from "../MyJobs/index"

const Nav = () => {

  const { data } = useQuery(QUERY_ME) 
  console.log(data, 'this is user data')

  const loggedIn = Auth.loggedIn();

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

// const navigation = [
//     { name: 'Main', href: '#', current: true },
//     { name: 'Dashboard', href: '#', current: false },
//     { name: 'Calendar', href: '#', current: false },
//     { name: 'Settings', href: '#', current: false },
//     { name: 'Logout', href: '#', current: false },
// ]

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
//}



    return (
      <HashRouter>
        <Disclosure as='nav'>
          {({ open }) => (
            <>
              <Disclosure.Panel className='sm:hidden'>
                <div className='px-2 pt-2 pb-3 space-y-1'>
                  <NavLink
                    exact
                    to='/'
                    className='nav-link text-gray-300 hover:bg-gray-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                    replace
                  >
                    About
                  </NavLink>
                  <NavLink
                    exact
                    to='/'
                    className='nav-link text-gray-300 hover:bg-gray-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                    replace
                  >
                    Contact Us
                  </NavLink>
                  <NavLink
                    exact
                    to='/'
                    className='nav-link text-gray-300 hover:bg-gray-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                    replace
                  >
                    FAQ
                  </NavLink>
                  <NavLink
                    exact
                    to='/Login'
                    className='nav-link text-gray-300 hover:bg-gray-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                    replace
                  >
                    Login
                  </NavLink>
                </div>
              </Disclosure.Panel>

              <div>
                {loggedIn && data ? (
                  <>
                    {/* Menu dropdown */}
                    <div className='relative flex justify-between'>
                      <div className='flex items-center h-16'>
                        <Menu as='div' className='ml-0 relative '>
                          <div>
                            <Menu.Button className='rounded-br-lg p-4 bg-gray-500 flex focus:outline-none'>
                              <MenuIcon className='h-8 text-gray-200'>
                                <span className='sr-only'>Open user menu</span>
                              </MenuIcon>
                            </Menu.Button>
                          </div>
                          <div className=''>
                            <Transition
                              as={Fragment}
                              enter='transition ease-out duration-100'
                              enterFrom='transform opacity-0 scale-95'
                              enterTo='transform opacity-100 scale-100'
                              leave='transition ease-in duration-75'
                              leaveFrom='transform opacity-100 scale-100'
                              leaveTo='transform opacity-0 scale-95'
                            >
                              <Menu.Items className='h-screen origin-top-left absolute left-0 w-16 py-1 bg-gray-300 bg-opacity-25 focus:outline-none'>
                                <Menu.Item>
                                  <NavLink
                                    exact
                                    to='/'
                                    className='block px-4 py-2 text-sm text-gray-700'
                                    replace
                                  >
                                    <IoHomeOutline className='my-2 h-8 w-8 text-gray-600 hover:text-gray-700' />
                                  </NavLink>
                                </Menu.Item>
                                <Menu.Item>
                                  <NavLink
                                    exact
                                    to='/Dashboard'
                                    className='block px-4 py-2 text-sm text-gray-700'
                                    replace
                                  >
                                    <BsBriefcase className='my-2 h-7 w-8 text-gray-600 hover:text-gray-700' />
                                  </NavLink>
                                </Menu.Item>
                                {/* <Menu.Item>
                                  <li className='block px-4 py-2 text-sm text-gray-700'>
                                    <p>Calendar icon</p>
                                  </li>
                                </Menu.Item> */}
                                <Menu.Item>
                                  <NavLink
                                    exact
                                    to='/Settings'
                                    className='block px-4 py-2 text-sm text-gray-700'
                                    replace
                                  >
                                    <IoSettingsOutline className='my-2 h-8 w-8 text-gray-600 hover:text-gray-700' />
                                  </NavLink>
                                </Menu.Item>
                                <Menu.Item>
                                  <li
                                    className='block px-4 py-2 text-sm text-gray-700'
                                    onClick={logout}
                                  >
                                    <VscSignOut className='my-2 h-8 w-8 text-gray-600 hover:text-gray-700' />
                                  </li>
                                </Menu.Item>
                              </Menu.Items>
                            </Transition>
                          </div>
                        </Menu>
                        {/* Menu dropdown ends */}

                        <div className='ml-5 mt-2'>
                          <img className=' h-14' src={logo} alt='Logo' />
                        </div>
                      </div>
                      <div className='relative flex mt-3 mr-14 items-center'>
                        <div className='mt-3 mr-14 cust-font font-bold text-gray-600'>
                          <button>
                            <NavLink
                              exact
                              to='/Myjobs'
                              className='cust-font font-bold text-gray-600 bg-gray-200 hover:bg-gray-100 px-10 py-1 rounded-xl shadow-md'
                              replace
                            >
                              My Jobs
                            </NavLink>
                          </button>
                        </div>
                        <div className='mr-5'>
                          <div>
                            <p className='cust-font font-bold text-gray-600'>
                              {data.me.firstName} {}
                              {data.me.lastName}
                            </p>
                            <p className='text-gray-500 flex justify-end'>
                              ★★★☆☆
                            </p>
                          </div>
                        </div>
                        <div className='border rounded-full border-gray-300'>
                          <span className='flex inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100'>
                            <svg
                              className='h-full w-full text-gray-300'
                              fill='currentColor'
                              viewBox='0 0 24 24'
                            >
                              <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='object-center'>
                      <Switch>
                        <Route exact path='/' component={Main} />
                        <Route path='/Dashboard' component={Dashboard} />
                        <Route path='/Settings' component={Settings} />
                        <Route path='/JobPosting' component={JobPosting} />
                        <Route path='/Myjobs' component={MyJobs} />
                      </Switch>
                    </div>
                  </>
                ) : (
                  <div>
                    <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
                      <div className='relative flex items-center justify-between h-16'>
                        <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                          {/* Mobile menu button*/}
                          <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                            <span className='sr-only'>Open main menu</span>
                            {open ? (
                              <XIcon
                                className='block h-6 w-6'
                                aria-hidden='true'
                              />
                            ) : (
                              <MenuIcon
                                className='block h-6 w-6'
                                aria-hidden='true'
                              />
                            )}
                          </Disclosure.Button>
                        </div>
                        <div className='sm:block sm:ml-auto sm:mr-auto'>
                          <img className=' h-12' src={logo} alt='Logo' />
                        </div>
                        <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-end'>
                          <div className='hidden sm:block sm:ml-6'>
                            <div className='flex space-x-4'>
                              <div>
                                <NavLink
                                  exact
                                  to='/'
                                  className='nav-link text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium'
                                  replace
                                >
                                  About
                                </NavLink>
                                <NavLink
                                  exact
                                  to='/'
                                  className='nav-link text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium'
                                  replace
                                >
                                  Contact Us
                                </NavLink>
                                <NavLink
                                  exact
                                  to='/'
                                  className='nav-link text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium'
                                  replace
                                >
                                  FAQ
                                </NavLink>
                                <NavLink
                                  exact
                                  to='/Login'
                                  className='nav-link text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium'
                                  replace
                                >
                                  Login
                                </NavLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='object-center'>
                      <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/Login' component={Login} />
                        <Route path='/Signup' component={Signup} />
                      </Switch>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </Disclosure>
      </HashRouter>
    );
};

export default Nav;