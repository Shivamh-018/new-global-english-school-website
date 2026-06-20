function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          New Global English School
        </h1>

        <ul className="flex gap-6">
          <li>Home</li>
          <li>About</li>
          <li>Admissions</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;