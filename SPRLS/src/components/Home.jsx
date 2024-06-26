import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-gray-300">
      <h1 className="text-4xl font-bold mb-4">Home</h1>
      <Navbar />
      <p className="m-4"> Juega el clásico juego piedra, papel, tijeras pero con una vuelta de tuerca</p>

      <Link to="/game" className="mt-4">
        <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 hover:text-black">Comenzar Juego</button>
      </Link>
    </div>
  );
}

export default Home;