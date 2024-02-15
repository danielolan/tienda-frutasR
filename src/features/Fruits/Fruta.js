import React from 'react';
import './Fruta.css'; 


function Fruta({ nombre, precio, descripcion, imagen }) {
  
 const imagens = `'${imagen}'`
 console.log(imagens)
  return (
    <div className="fruta">
      <div className="fruta-imagen">
      <img src={imagen} alt={`Imagen de ${nombre}`} />
      </div>
      <div className="fruta-info">
        <h3>{nombre}</h3>
        <p className="fruta-precio">${precio}</p>
        <p className="fruta-descripcion">{descripcion}</p>
        <button className="fruta-btn">Agregar al Carrito</button>
      </div>
    </div>
  );
}

export default Fruta;
