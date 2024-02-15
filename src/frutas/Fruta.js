import React from 'react';
import './Fruta.css'; 

function Fruta({ nombre, precio, descripcion, imagen }) {
  return (
    <div className="fruta">
      <img src={imagen} alt={`Imagen de ${nombre}`} />
      <h3>{nombre}</h3>
      <p>${precio}</p>
      <p>{descripcion}</p>
    </div>
  );
}

export default Fruta;
