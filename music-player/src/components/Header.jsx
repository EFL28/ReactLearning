import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            {/* Logo */}
            <Link to="/"><h1 className="font-semibold text-3xl">MultiSource</h1></Link>
        </header>
    );
}

export default Header;