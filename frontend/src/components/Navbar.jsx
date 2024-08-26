import { Link } from 'react-router-dom';
// import LOGO from "../assets/l3.png"

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-500 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
           
            <span className="ml-4 text-white text-3xl font-extrabold tracking-wide">
              demo
            </span>
          </Link>
        </div>

        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-white text-lg font-semibold hover:text-gray-300 transition duration-300">
            Home
          </Link>
          <Link to="/dash" className="text-white text-lg font-semibold hover:text-gray-300 transition duration-300">
            Dashboard
          </Link>
          <Link to="/services" className="text-white text-lg font-semibold hover:text-gray-300 transition duration-300">
            About
          </Link>
          <Link to="/contact" className="text-white text-lg font-semibold hover:text-gray-300 transition duration-300">
            Contact
          </Link>
        </div>

        <div className="flex space-x-4">
          <Link to="/">
            <button className="bg-black text-white text-l font-bold px-4 py-2 rounded-full shadow-lg hover:bg-gray-800 transition duration-300">
              Sign In
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-black text-white text-l font-bold px-4 py-2 rounded-full shadow-lg hover:bg-gray-800 transition duration-300">
              Sign Up
            </button>
          </Link>
        </div>

        <div className="md:hidden">
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
