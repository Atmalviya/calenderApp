import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { HomePage } from "./pages/Home";
import { Layout } from "./components/Layout";
import { CalenderPage } from "./pages/CalenderPage";



export default function App() {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/calender" element={<CalenderPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </NextUIProvider>
  );
}
