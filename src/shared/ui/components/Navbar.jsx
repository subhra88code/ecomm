import React from "react";
import { NavLink } from "react-router";
import { ShoppingCart, LogOut } from "lucide-react";
import { Box } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="w-full px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-900">
          Sky<span className="text-blue-600">mart</span>
        </h1>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <NavLink
            to="/main"
            className={({ isActive }) =>
              `font-medium transition-colors ${
                isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
              }`
            }
            end 
          >
            Home
          </NavLink>

          <NavLink
            to="/main/product"
            className={({ isActive }) =>
              `font-medium transition-colors ${
                isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
              }`
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/main/about"
            className={({ isActive }) =>
              `font-medium transition-colors ${
                isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
              }`
            }
          >
            About
          </NavLink>
        </div>

        {/* Cart + Logout */}
        <div className="flex items-center gap-5">
          <button
            className="relative p-2 rounded-full text-gray-600
                       hover:bg-blue-50 hover:text-blue-600
                       transition-all duration-200"
          >
            <NavLink to={"/main/cart"}>
              <ShoppingCart size={22} />
            </NavLink>
          </button>

          <button
            className="relative p-2 rounded-full text-gray-600
                       hover:bg-blue-50 hover:text-blue-600
                       transition-all duration-200"
          >
            <NavLink to={"/main/orders"}>
              <Box size={22} />
            </NavLink>
          </button>

          <button
            className="flex items-center gap-2 px-4 py-2
                       rounded-lg text-red-600
                       border border-red-200
                       hover:bg-red-50
                       transition-all duration-200"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
