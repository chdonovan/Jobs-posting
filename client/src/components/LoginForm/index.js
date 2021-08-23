import React, { useState } from "react";
import { Route, NavLink, HashRouter, Switch } from "react-router-dom";
import SignupForm from '../Signup';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { LockClosedIcon } from '@heroicons/react/solid'

const LoginForm = props => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);

    //update state based on form input changes 
    const handleChange = event => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    //submit form
    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            const { data } = await login({
                variables: { ...formState }
            });
            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-700">Sign in to your account</h2>
                    <HashRouter>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Don't have an account yet?{' '}
                            <NavLink exact to="/Signup" className="nav-link" replace>
                                <a href="#" className="text-blue-400 font-medium">
                                    Create one!
                                </a>
                            </NavLink>

                            <Switch>
                                <Route path="/Signup" component={SignupForm} />
                            </Switch>
                        </p>
                    </HashRouter>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleFormSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-gray-400 focus:border-gray-400 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none mt-1 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-gray-400 focus:border-gray-400 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                onChange={handleChange}
                            />
                        </div>
                    {error && <p className='ml-3 text-sm text-red-500'>Invalid email or password.</p>}
                    </div>

                    <div className='flex justify-center'>
                        <button
                            type="submit"
                            className="bg-blue-500 font-extrabold group relative w-80 flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <LockClosedIcon className="lock-icon h-5 w-5 text-white text-blue-500" aria-hidden="true" />
                            </span>
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default LoginForm;