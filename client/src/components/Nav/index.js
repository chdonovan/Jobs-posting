import React, { Fragment } from "react";
import { Route, NavLink, HashRouter, Switch} from "react-router-dom";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Auth from "../../utils/auth";
import logo from '../../assets/images/logo.png'

import Home from '../../pages/Home'
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';


const Nav = () => {

// const navigation = [
//     { name: 'About'},
//     { name: 'FAQ'},
//     { name: 'Login'},

//     { name: 'Main', href: '#', current: true },
//     { name: 'Dashboard', href: '#', current: false },
//     { name: 'Calendar', href: '#', current: false },
//     { name: 'Settings', href: '#', current: false },
//     { name: 'Logout', href: '#', current: false },
// ]

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }



    return (
        <HashRouter>
            <Disclosure as="nav">
            {({ open }) => (
            <>
                <Disclosure.Panel className="sm:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <a key='about' href='#about' className='text-gray-300 hover:bg-gray-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                            <NavLink exact to='/' className="nav-link" replace>About</NavLink>
                        </a>
                        <a key='contact' className='text-gray-300 hover:bg-gray-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                            <NavLink exact to='/' className="nav-link" replace>Contact Us</NavLink>
                        </a>
                        <a key='faq' href='#faq' className='text-gray-300 hover:bg-gray-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                            <NavLink exact to='/' className="nav-link" replace>FAQ</NavLink>
                        </a>
                        <a key='login' className='text-gray-300 hover:bg-gray-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                            <NavLink exact to='/Login' className="nav-link" replace>Login</NavLink>
                        </a>
                    </div>
                </Disclosure.Panel>


            <div>
                {Auth.loggedIn() ? (
                    <>
                    <li href='/' onClick={Auth.logout}>Logout</li>
                    </>
                ) : (
                    <div>
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-16">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="sm:block sm:ml-auto sm:mr-auto">
                                        <img
                                            className=" h-12"
                                            src={logo}
                                            alt="Logo"
                                        />
                                </div>
                                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
                                    <div className="hidden sm:block sm:ml-6">
                                        <div className="flex space-x-4">
                                            <div>
                                                <a key='about' href='#about'>
                                                    <NavLink exact to='/' className="nav-link text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium" replace>About</NavLink>
                                                </a>
                                                <a key='about'>
                                                    <NavLink exact to='/' className="nav-link text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium" replace>Contact Us</NavLink>
                                                </a>
                                                <a key='about' href='#faq'>
                                                    <NavLink exact to='/' className="nav-link text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium" replace>FAQ</NavLink>
                                                </a>
                                                <a key='about'>
                                                    <NavLink exact to='/Login' className="nav-link text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium" replace>Login</NavLink>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
                        <div className="object-center">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/Login" component={Login} />
                                <Route path="/Signup" component={Signup} />

                                {/* <Route path="/Dashboard" component={Dashboard} />
                                <Route path="/Calendar" component={Calendar} />
                                <Route path="/Main" component={Main} />
                                <Route path="/Settings" component={Settings} />
                                 */}
                            </Switch>
                        </div>
                        </>
                        )}
            </Disclosure>
        </HashRouter>
    );
};

export default Nav;



//           DO NOT DELETE !          //


                    // {/* Menu dropdown */}
                    // <Menu as="div" className="ml-3 relative">
                    // <div>
                    //     <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    //     <span className="sr-only">Open user menu</span>
                    //     <img
                    //         className="h-10 w-10 rounded-full"
                    //         src="#"
                    //         alt=""
                    //     />
                    //     </Menu.Button>
                    // </div>
                    // <Transition
                    //     as={Fragment}
                    //     enter="transition ease-out duration-100"
                    //     enterFrom="transform opacity-0 scale-95"
                    //     enterTo="transform opacity-100 scale-100"
                    //     leave="transition ease-in duration-75"
                    //     leaveFrom="transform opacity-100 scale-100"
                    //     leaveTo="transform opacity-0 scale-95"
                    // >
                    //     <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    //     <Menu.Item>
                    //         {({ active }) => (
                    //         <a
                    //             href="#"
                    //             className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    //         >
                    //             Dashboard
                    //         </a>
                    //         )}
                    //     </Menu.Item>
                    //     <Menu.Item>
                    //         {({ active }) => (
                    //         <a
                    //             href="#"
                    //             className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    //         >
                    //             Calendar
                    //         </a>
                    //         )}
                    //     </Menu.Item>
                    //     <Menu.Item>
                    //         {({ active }) => (
                    //         <a
                    //             href="#"
                    //             className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    //         >
                    //             Settings
                    //         </a>
                    //         )}
                    //     </Menu.Item>
                    //     <Menu.Item>
                    //         {({ active }) => (
                    //         <a
                    //             href="#"
                    //             className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    //         >
                    //             Sign out
                    //         </a>
                    //         )}
                    //     </Menu.Item>
                    //     </Menu.Items>
                    // </Transition>
                    // </Menu>
                    // {/* Menu dropdown ends */}
