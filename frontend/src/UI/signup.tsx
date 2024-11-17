import React, { useState } from 'react';
import axios from 'axios';

const Signup: React.FC = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/signup', formData);
            alert(res.data.result);
        } catch (error: any) {
            console.error(error.response?.data?.result || 'Error occurred');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="p-8 bg-white shadow-md rounded">
                <h1 className="text-2xl font-bold mb-4">Signup</h1>
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
                <button className="w-full bg-blue-500 text-white p-2 rounded">Signup</button>
            </form>
        </div>
    );
};

export default Signup;