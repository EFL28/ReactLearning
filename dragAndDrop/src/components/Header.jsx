import React from "react";
import logo from '../assets/logo.jpg';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="flex items-center justify-between p-4 bg-blue-500 text-white">
            <Link to="/"><img src={logo} alt="Logo" className="w-20 h-20" /> </Link>
            <h1 className="text-2xl font-bold">Elige tu propia aventura</h1>
        </header>
    );
}