import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: { email: formState.email, password: formState.password },
        });
        const token = mutationResponse.data.login.token;
        Auth.login(token);
        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor='email'>Email Address:</label>
                    <input
                        placeholder='Email'
                        name='email'
                        type='email'
                        id='email'
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='passowrd'>Password</label>
                    <input
                        placeholder="*****"
                        name='pass'
                        type='pass'
                        id='pass'
                        onChange={handleChange}
                    />
                </div>
                {error ? (
                    <div>
                        <p className='error-text'>Your credentials are incorrect.</p>
                    </div>
                ) : null}
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Login;