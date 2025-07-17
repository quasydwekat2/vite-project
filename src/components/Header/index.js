import { Link } from "react-router-dom";
import {
  FaUser,
  FaShoppingBag,
  FaSearch,
} from "react-icons/fa";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 text-white backdrop-blur-sm bg-black/20 border-b border-white">
      {/* Top Row */}
      <div className="flex items-center justify-between px-6 py-2 border-b border-white">
        <FaSearch className="w-5 h-5 cursor-pointer" />
        <div className="flex items-center gap-4">
          <FaUser className="w-4 h-4" />
          <span className="text-sm">Log In</span>
          <FaShoppingBag className="w-4 h-4" />
          <span className="text-sm">1</span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="grid grid-cols-3 items-center justify-between px-6 py-3 border-b border-white">
        {/* Left Links */}
        <nav className="flex gap-5 text-sm justify-start">
          <Link to="/teas" className="hover:underline text-white">
            Teas
          </Link>
          <Link to="/extras" className="hover:underline text-white">
            Extras
          </Link>
          <Link to="/about" className="hover:underline text-white">
            About
          </Link>
          <Link to="/blog" className="hover:underline text-white">
            Blog
          </Link>
          <Link to="/contact" className="hover:underline text-white">
            Contact
          </Link>
        </nav>

        {/* Center Logo (now clickable) */}
        <div className="text-center">
          <Link
            to="/"
            className="hover:underline text-white"
          >
            BLOOM'S TEA
          </Link>
        </div>

        
        
      </div>
    </header>
  );
}
