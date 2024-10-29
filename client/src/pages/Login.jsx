// src/pages/Login.js
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import { Button } from '@/components/ui/button';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, login } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState('');

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user, navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/auth/login', { email, password });
            const token = response.data.token;
            localStorage.setItem('token', token);
            login({ email }); // Update AuthContext with the user's info
            navigate('/'); // Redirect to the homepage
        } catch (err) {
            setError('Invalid credentials');
            console.error(err);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                <p className="text-sm dark:text-gray-600">Sign in to access your account</p>
            </div>
            <form noValidate onSubmit={handleLogin} className="space-y-12">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="leroy@jenkins.com"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                            required
                        />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label htmlFor="password" className="text-sm">Password</label>
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                        </div>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="*****"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                            required
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <Button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 ">Sign in</Button>
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <p className="px-6 text-sm text-center dark:text-gray-600">
                        Dont have an account yet? 
                        <a rel="noopener noreferrer" href="/register" className="hover:underline dark:text-violet-600">Sign up</a>.
                    </p>
                </div>
            </form>
        </div>
        </div>
    );
};
