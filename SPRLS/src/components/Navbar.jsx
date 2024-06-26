import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="flex justify-around items-center bg-yellow-500 p-2 mb-2 text-white rounded-lg">
            <Link to="/" className="hover:text-black mx-2">Home</Link>
            <Link to="/game" className="hover:text-black mx-2">Game</Link>
            <Link to="/contact" className="hover:text-black mx-2">Contact</Link>
        </nav>
    );
}

export default Navbar;