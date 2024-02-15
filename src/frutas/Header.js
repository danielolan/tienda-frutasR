// Header.js
import React from 'react';
import './Header.css';

function Header() {
  // Función para manejar clics en los enlaces que no hace nada
  const handleLinkClick = (event) => {
    event.preventDefault(); // Esto previene la acción por defecto del enlace
    // Aquí puedes agregar cualquier otra lógica que quieras ejecutar en el clic
  };

  return (
    <header className="header">
      <nav className="nav-bar">
        <a href="/" className="nav-link" onClick={handleLinkClick}>Inicio</a>
        <a href="/contacto" className="nav-link" onClick={handleLinkClick}>Contacto</a>
        <a href="/carrito" className="nav-link" onClick={handleLinkClick}>Carrito</a>
      </nav>
    </header>
  );
}

export default Header;
