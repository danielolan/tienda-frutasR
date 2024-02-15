import React, { Component } from 'react';
import Fruta from './Fruta';
import './ListaFrutas.css';

class ListaFrutas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frutas: []
    };
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
    const { frutas } = this.state;
    return (
      <div className="lista-frutas">
        {frutas.map(fruta => (
          <Fruta key={fruta.id} nombre={fruta.nombre} precio={fruta.precio} />
        ))}
      </div>
    );
  }
}

export default ListaFrutas;
