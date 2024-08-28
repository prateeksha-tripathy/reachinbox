import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="bg-black text-white py-4 shadow-md">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">
          <a href="/">REACHINBOX</a>
        </div>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-blue-400">Home</a></li>
          <li><a href="#" className="hover:text-blue-400">About</a></li>
          <li><a href="#" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
