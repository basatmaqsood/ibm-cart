// src/App.js
import React from "react";
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ProductListing from "./components/ProductListing";
import CartPage from "./components/CartPage";
import Header from "./components/Header";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductListing />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  </Router>
);

export default App; // Complete structure with Redux setup
