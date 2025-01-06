// src/components/Header.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <header className="bg-green-600 text-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link to='/' className="text-xl font-bold hover:text-green-200">Home</Link>
        <Link to='/products' className="text-xl font-bold hover:text-green-200">Products</Link>
        <Link to='/cart' className="text-xl font-bold hover:text-green-200">
          Cart ({totalQuantity})
        </Link>
      </nav>
    </header>
  );
};

export default Header;
