import { useState } from "react";
import { Link} from "react-router";
import { FaBars, FaTimes, FaChartLine, FaTachometerAlt, FaChartBar, FaBriefcase } from "react-icons/fa";
import WalletBalance from "./WalletBalance";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-white shadow-md top-0 left-0 w-full z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left: Logo */}
        <Link to="/">
        <div className="flex items-center space-x-2">
            <FaChartLine className="w-8 h-6 text-blue-600 stroke-[0.5]" />
            <span className="text-xl font-semibold text-gray-700 font-Montserrat">TradeNova</span>
        </div>
        </Link>

        {/* Center: Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-lg font-Montserrat">
          <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
          <Link to="/stocks" className="text-gray-700 hover:text-blue-500">Stocks</Link>
          <Link to="/dashboard" className="text-gray-700 hover:text-blue-500">Dashboard</Link>
        </nav>

        {/* Right: Wallet Balance */}
         <div className="hidden md:block bg-gray-300 px-4 py-2 rounded-md text-gray-800">
              <WalletBalance />
            </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)} // Close menu when clicking outside
      ></div>

      <nav
        className={`fixed top-0 right-0 h-full w-full bg-white shadow-md p-6 text-lg font-Montserrat transform transition-transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } z-30`}
      >
        <button className="absolute top-4 right-4 text-gray-700" onClick={() => setMenuOpen(false)}>
          <FaTimes size={24} />
        </button>
          <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
          <Link to="/stocks" className="text-gray-700 hover:text-blue-500">Stocks</Link>
          <Link to="/dashboard" className="text-gray-700 hover:text-blue-500">Dashboard</Link>
      </nav>
    </header>
  );
}

export default Header;
