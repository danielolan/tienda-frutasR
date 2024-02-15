import React, { Component } from 'react';
import Fruta from './Fruta';
import Header from './Header'; // Importa el componente Header
import './ListaFrutas.css';
import {fruits} from "../data/frutas"

class ListaFrutas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frutas: []

    };
    console.log(fruits)
  }

  componentDidMount() {
    fetch('/frutas.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => this.setState({ frutas: data.frutas }))
      .catch(error => console.error("Error al cargar las frutas:", error));
  }

  render() {
    
    return (
      <>
        <Header /> {/* Encabezado añadido al principio */}
        <div className="lista-frutas">
          {fruits.map(fruta => (
            <Fruta
              key={fruta.id}
              nombre={fruta.nombre}
              precio={fruta.precio}
              descripcion={fruta.descripcion}
              imagen={fruta.imagen}
            />
          ))}
        </div>
      </>
    );
  }
}

export default ListaFrutas;
