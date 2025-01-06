import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <div className="bg-cover bg-center h-screen flex flex-col items-center justify-center text-center text-green-600 " style={{ backgroundImage: 'url(/background.jpg)' }}>
    <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-white p-1 px-2">Green Haven Plants</h1>
    <p className="text-lg md:text-2xl mb-8 bg-white p-1 px-2">Your one-stop shop for beautiful houseplants!</p>
    <Link to='/products'>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Get Started</button>
    </Link>
  </div>
);

export default LandingPage;