import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';
import React, { useState } from 'react';
// import '../../assets/style.css';
import { FaEnvelope, FaGoogle, FaLock } from "react-icons/fa";

import { FaUser } from "react-icons/fa";

import Variable from '../../../utilities/Variables';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const [user, setUser] = useState();
    const navigate = useNavigate();
    const { GOOGLE_CLIENT_ID } = Variable();
    const [formData, setFormData] = useState({ username: '', email: '', password: '', cpassword: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSuccess = async (response) => {
        const { credential } = response;
        try {
            const res = await axios.post('http://localhost:5000/auth/verify_token', { token: credential });

            setUser(res.data.user);
            localStorage.setItem('token', res.data.token);
            if (res.data.token) {
                navigate('/resume');
            }
        } catch (error) {
            console.error('Error verifying token', error);
        }
    }
    const handleFailure = (response) => {
        console.log('Login Failed:', response);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.email != '' || formData.password != '') {
            const res = axios.post('http://localhost:5000/auth/signup', formData);
            console.log(res);
            localStorage.setItem('token', res.data.token);
        }
        console.log(formData);
    }
    return (
        <div className="row mx-0 justify-content-start align-items-end align-items-lg-center register-form pt-md-5" style={{ height: "100vh", transform: "translateX(5%)" }}>
            <div className="col-lg-4 col-10 col-md-8 mx-lg-0 mx-auto">
                <form onSubmit={handleSubmit}>
                    <div classsName='form-group'>
                        <div className='d-flex align-items-center mb-3 input-cover'>
                            <FaUser className='text-secondary' />
                            <input type="text" className="authentication-input form-control fw-medium" name='username' placeholder='Enter your name' value={formData.username} onChange={handleChange} />
                        </div>
                    </div>
                    <div classsName='form-group'>
                        <div className='d-flex align-items-center mb-3 input-cover'>
                            <FaEnvelope className='text-secondary' />
                            <input type="text" className="authentication-input form-control fw-medium" name='email' placeholder='Enter your email' autoFocus value={formData.email} onChange={handleChange} />
                        </div>
                    </div>
                    <div classsName='form-group'>
                        <div className='d-flex align-items-center mb-3 input-cover'>
                            <FaLock className='text-secondary' />
                            <input type="password" className="authentication-input form-control fw-medium" name='password' placeholder='Enter your password' value={formData.password} onChange={handleChange} />
                        </div>
                    </div>
                    <div classsName='form-group'>
                        <div className='d-flex align-items-center mb-3 input-cover'>
                            <FaLock className='text-secondary' />
                            <input type="password" className="authentication-input form-control fw-medium" name='cpassword' placeholder='Enter your confrim password' value={formData.cpassword} onChange={handleChange} />
                        </div>
                    </div>
                    <div className='form-group mt-4 text-center'>
                        <button type='submit' className='btn cta-btn rounded-5 shadow-sm py-2 w-100'>Register</button>
                    </div>
                </form>
                <div className='my-3'>
                    <p className='text-center fw-medium'>OR</p>
                </div>
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
                    <span> Register</span>
                </button>
            </div>
        </div>
    )
}

export default RegisterForm