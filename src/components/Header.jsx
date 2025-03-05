import { useState } from "react";
import { FaBars, FaTimes,FaChartLine } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <FaChartLine className="w-8 h-8 text-blue-600 stroke-[0.5]" />
          <span className="text-2xl text-gray-700 font-Montserrat">TradeNova</span>
        </div>

        {/* Center: Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-lg font-Montserrat">
          <a href="#" className=" text-gray-700 hover:text-blue-500">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Dashboard</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Portfolio</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">News</a>
        </nav>

        {/* Right: Sign In Button */}
        <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-lg font-Montserrat">
          Sign In
        </button>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md p-4 absolute top-full left-0 w-full text-lg font-Montserrat">
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-500">Home</a>
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-500">Markets</a>
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-500">Portfolio</a>
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-500">News</a>
          <button className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Sign In
          </button>
        </nav>
      )}
    </header>
  );
}

export default Header;
