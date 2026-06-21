import logo from "../assets/logo.png";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-blue-900 text-white z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          {/* Logo + School Name */}
          
          <div className="flex items-center gap-3">

             <img
    src={logo}
    alt="School Logo"
    className="w-12 h-12 rounded-full"
  />
            <h1 className="text-xl md:text-2xl font-bold">
              New Global English School
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 font-medium">
            <li>
              <a href="#home" className="hover:text-yellow-300">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-yellow-300">
                About
              </a>
            </li>

            <li>
              <a href="#facilities" className="hover:text-yellow-300">
                Facilities
              </a>
            </li>

            <li>
              <a href="#gallery" className="hover:text-yellow-300">
                Gallery
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-yellow-300">
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-blue-800">
            <ul className="flex flex-col text-center py-4 gap-5 text-lg">

              <li>
                <a href="#home" onClick={closeMenu}>
                  Home
                </a>
              </li>

              <li>
                <a href="#about" onClick={closeMenu}>
                  About
                </a>
              </li>

              <li>
                <a href="#facilities" onClick={closeMenu}>
                  Facilities
                </a>
              </li>

              <li>
                <a href="#gallery" onClick={closeMenu}>
                  Gallery
                </a>
              </li>

              <li>
                <a href="#contact" onClick={closeMenu}>
                  Contact
                </a>
              </li>

            </ul>
          </div>
        )}
      </nav>

      {/* Contact Bar */}
      <div className="bg-yellow-400 text-black text-sm md:text-sm mt-[72px] py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-1">

          <span>
            📞 8805425262 | 9370671599
          </span>

          <span>
            📍 Kurula, Kandhar, Nanded
          </span>

        </div>
      </div>
    </>
  );
}

export default Navbar;