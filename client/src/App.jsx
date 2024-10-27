import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { HomePage } from "./pages/Home";
import { Layout } from "./components/Layout";



export default function App() {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </NextUIProvider>
  );
}
