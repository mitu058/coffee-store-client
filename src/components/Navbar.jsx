import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/more/logo1.png'

const Navbar = () => {
    return (
        <div>
            
            <nav className="flex items-center justify-between bg-[#331A15] px-4 py-2 text-white">
        {/* Left Section: Logo */}
        <div className="flex justify-center items-center space-x-2 scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
            <img className='w-10 h-10 bg-white rounded-full' src={logo} alt="" />
          <h2>Espresso Emporium</h2>
        </div>

        {/* Center Section: Menu */}
        <div className="flex flex-1 items-center justify-center">
          <ul className="flex items-center gap-10">
         <Link to='/'>
         <li className="group flex cursor-pointer flex-col">
              Home{" "}
              <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
         </Link>
            <li className="group flex cursor-pointer flex-col">
              Services{" "}
              <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex cursor-pointer flex-col">
              About{" "}
              <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          <Link to='/users'>
          <li className="group flex cursor-pointer flex-col">
              Users{" "}
              <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          </Link>
          </ul>
        </div>

        {/* Right Section: Buttons */}
        <div className="flex items-center gap-5">
          <Link to='/login'>
          <button className="rounded-full bg-[#a8650d] px-6 py-2 text-white transition-all duration-300 hover:scale-90">
            Log In
          </button>
          </Link>

          <Link to='/register'>
          <button className="rounded-full bg-[#a8650d] px-6 py-2 text-white transition-all duration-300 hover:scale-90">
            Register
          </button>
          </Link>
        </div>
      </nav>
   
        </div>
    );
};

export default Navbar;