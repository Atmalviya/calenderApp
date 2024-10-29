// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    return user ? children : <Navigate to="/login" replace />;
};
