function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-900 text-white p-4 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          New Global English School
        </h1>

        <ul className="flex gap-6">
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

      </div>
    </nav>
  );
}

export default Navbar;