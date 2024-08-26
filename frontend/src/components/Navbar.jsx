// import { useState } from 'react';
import { Link } from 'react-router-dom';
// import LOGO from "../assets/l3.png"


const Navbar = () => {
  

  return (
    <nav className=" bg-blue-500  p-4  ">
      <div className="container ml-60 md:mt-2 md:mb-5 flex justify-between items-center">
        <Link to="/" className="text-white text-sm  mr-80 font-bold">
          <img className="h-[160px] w-auto" src="" alt="Example" />
          <p className='mt-1 text-3xl text-center'>demo</p>
        </Link>

        <div className="hidden md:flex  text-lg space-x-20 ml-20">
          <Link to="/" className="text-white font-bold">
            Home
          </Link>
          <Link to="/dash" className="text-white font-bold hover::shadow-black-500/50 ">
           DashBoroard
          </Link>
          <Link to="/services" className="text-white font-bold">
          About
          </Link>
          <Link to="/" className="text-white  font-bold">
            Contact
          </Link>
        </div>

        <div className="flex space-x-4 ml-20">
          
            

          
            <>
              <Link to="/">
                <button className=" shadow-md bg-black shadow-black-500/50 ml-10 text-xl font-bold text-white px-4 py-2 rounded">
                  Sign In
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-black shadow-md  font-bold text-white text-xl px-4 py-2 rounded">
                  Sign Up
                </button>
              </Link>
            </>
     
        </div>

        <div className="md:hidden">
          {/* Mobile menu toggle button */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
