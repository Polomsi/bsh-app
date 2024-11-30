import React from 'react';

const Navbar = () => {
  return (
    <nav className="p-4 bg-blue-500 text-white">
      <ul className="flex justify-between">
        <li>Inicio</li>
        <li>Acerca</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
};

export default Navbar;