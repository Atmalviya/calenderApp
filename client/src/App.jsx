// src/App.js
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { HomePage } from "./pages/Home";
import { CalenderPage } from "./pages/CalenderPage";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import ContextWrapper from "./context/ContextWrapper";

export default function App() {
  return (
    <NextUIProvider>
      <AuthProvider>
        <ContextWrapper>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {/* Protect the routes */}
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <HomePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/calender"
                element={
                  <ProtectedRoute>
                    <CalenderPage />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </ContextWrapper>
      </AuthProvider>
    </NextUIProvider>
  );
}
