import React, { useState } from 'react';
import axios from 'axios';
import { storeToken } from '../Business/localstorage_crud';
import { useNavigate } from 'react-router-dom';

const Signin: React.FC = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const navigate = useNavigate();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/signin', formData);
            //localStorage.setItem('token', res.data.result); 
            storeToken(res.data.result);
            navigate('/dashboard');
            alert('Signin successful!');
        } catch (error: any) {
            console.error(error.response?.data?.message || 'Error occurred');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="p-8 bg-white shadow-md rounded">
                <h1 className="text-2xl font-bold mb-4">Signin</h1>
                <input
                    type="text"
                    placeholder="Username"
                    className="block w-full p-2 mb-4 border rounded"
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="block w-full p-2 mb-4 border rounded"
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button className="w-full bg-blue-500 text-white p-2 rounded">Signin</button>
            </form>
        </div>
    );
};

export default Signin;