import { GoogleLogin, GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import '../../assets/style.css';
import { FaGoogle, FaLock } from "react-icons/fa";

import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import Variable from '../../../utilities/Variables';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
    const [user, setUser] = useState('');
    // const [userToken, setToken] = useState('');
    const navigate = useNavigate();
    const { GOOGLE_CLIENT_ID } = Variable();

    const notify = (msg) => {
        return toast(msg);
    }

    const handleSuccess = async (response) => {
        const { credential } = response;
        try {
            const res = await axios.post('http://localhost:5000/auth/verify_token', { token: credential });

            setUser(res.data.user);
            localStorage.setItem('token', res.data.token);
            if (res.data.token) {
                notify("Login Successfully!!");
                navigate('/resume');
            }
        } catch (error) {
            console.error('Error verifying token', error);
        }
    }
    const handleFailure = (response) => {
        notify("Login Failed! Please try again");
        console.log('Login Failed:', response);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (

        <div className='login-form row mx-0 justify-content-end align-items-lg-center pt-md-5' style={{ height: "100vh", transform: "translateX(-5%)" }}>

            <div className="col-lg-4 col-md-8 mx-lg-0 mx-auto">
                {user && (
                    <div>
                        <h1>Welcome, {user.username}</h1>
                        <p>Email: {user.email}</p>
                    </div>
                )
                }
                <form onSubmit={handleSubmit}>
                    <div classsName='form-group'>
                        <div className='d-flex align-items-center mb-3 input-cover'>
                            <FaUser className='text-secondary' />
                            <input type="text" className="authentication-input form-control fw-medium" placeholder='Enter your email' autoFocus />
                        </div>
                    </div>
                    <div classsName='form-group'>
                        <div className='d-flex align-items-center mb-3 input-cover'>
                            <FaLock className='text-secondary' />
                            <input type="password" className="authentication-input form-control fw-medium" placeholder='Enter your password' />
                        </div>
                    </div>
                    <div className='form-group mt-4 text-center'>
                        <button className='btn cta-btn rounded-5 shadow-sm py-2 w-100'>Login</button>
                    </div>
                </form>
                <div className='my-3'>
                    <p className='text-center fw-medium'>OR</p>
                </div>
                <div className='form-group mt-3 text-center'>
                    <div className='mt-2'></div>
                    <button to='http://localhost:5000/auth/google' className='btn cta-btn-2 w-100 justify-content-center rounded-5 py-1 d-flex align-items-center gap-2'>
                        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID} nonce=''>
                            <GoogleLogin
                                onSuccess={handleSuccess}
                                onError={handleFailure}
                                text='Login With'
                                type='icon'
                                shape="pill"
                                promp="account_select"
                                useOneTap
                                auto_select
                            />
                        </GoogleOAuthProvider>
                        <span> Login</span>
                    </button>
                </div>
            </div>

        </div >
    )
}

export default LoginForm