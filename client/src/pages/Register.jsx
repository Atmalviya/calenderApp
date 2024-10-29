// src/pages/Register.js
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from '../api/api'; // Adjust the import according to your API setup

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear any previous messages

    try {
      // Make an API call to register the user
      const response = await api.post('/auth/register', { email, password });
      
      if (response.status === 201) {
        // Registration successful
        setMessage('User registered successfully! Please log in.');
        setTimeout(() => {
          navigate("/login"); // Redirect to login after a short delay
        }, 2000);
      }
    } catch (err) {
      // Handle error
      console.error(err);
      setMessage('Error registering user. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign up</h1>
          <p className="text-sm dark:text-gray-600">
            Create an account to get started
          </p>
        </div>
        <form noValidate onSubmit={handleRegister} className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
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
              <label htmlFor="password" className="block mb-2 text-sm">
                Password
              </label>
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
            {message && <p className="text-center text-sm dark:text-gray-600">{message}</p>}
            <div>
              <Button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600"
              >
                Sign up
              </Button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-600">
              Already have an account?
              <a
                rel="noopener noreferrer"
                href="/login"
                className="hover:underline dark:text-violet-600"
              >
                Sign in
              </a>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
