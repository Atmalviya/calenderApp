// src/context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setUser({ email: 'user@example.com' }); // Replace with your actual user data retrieval
        }
        setLoading(false); // Done checking
    }, []);

    const login = (userData) => setUser(userData);
    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    if (loading) return <div>Loading...</div>; // or a spinner component

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
