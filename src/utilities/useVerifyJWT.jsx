import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const useVerifyJWT = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const verifyToken = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                console.error('No token found in localStorage');
                return;
            }

            try {
                const response = await axios.get('http://localhost:5000/auth/protected-route', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                console.log(response);
                if (response.status === 401) {
                    navigate('/');
                }

            } catch (error) {
                console.error('Error verifying token:', error.response?.data || error.message);
            }
        };
        verifyToken();
    }, [navigate]);

    return null;
};
export default useVerifyJWT;
