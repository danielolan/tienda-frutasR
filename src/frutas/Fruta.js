// Fruta.js
import React from 'react';
import './Fruta.css'; 

function Fruta({ nombre, precio ,desscripcion}) {
  return (
    <div className="fruta">
      <h3>{nombre}</h3>
      <p>${precio}</p>
      

    </div>
  );
}

export default Fruta;
