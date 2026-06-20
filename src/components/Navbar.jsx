function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-900 text-white p-4 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          New Global English School
        </h1>

       <ul className="flex gap-6">
  <li className="hover:text-yellow-300 cursor-pointer">Home</li>
  <li className="hover:text-yellow-300 cursor-pointer">About</li>
  <li className="hover:text-yellow-300 cursor-pointer">Admissions</li>
  <li className="hover:text-yellow-300 cursor-pointer">Gallery</li>
  <li className="hover:text-yellow-300 cursor-pointer">Contact</li>
</ul>
      </div>
    </nav>
  );
}

export default Navbar;