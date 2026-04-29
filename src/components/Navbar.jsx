import React from "react";

const Navbar = ({ cartCount }) => {
  return (
    <div>
      <div className="navbar bg-base-100 max-w-7xl mx-auto shadow-sm">

       
        <div className="navbar-start ">
          <a className="btn btn-ghost text-4xl text-primary ">DigiTools</a>
        </div>

       
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
          </ul>
        </div>

      
        <div className="navbar-end gap-4">

         
          <div className="relative cursor-pointer">
            <span className="text-2xl">🛒</span>
            <span className="absolute -top-2 -right-3 bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          </div>

          <a className="btn btn-ghost">Login</a>

          <a className="btn bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-none rounded-full px-6">
            Get Started
          </a>

        </div>

      </div>
    </div>
  );
};

export default Navbar;