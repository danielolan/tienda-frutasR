import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./login/Login";
import ListaFrutas from "./frutas/ListaFrutas";



function App() {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(false);

  const manejarAutenticacion = async (usuario, password) => {
    try {
      const respuesta = await fetch('/usuarios.json'); 
      const datos = await respuesta.json();
      const usuarioValido = datos.usuarios.some(u => u.usuario === usuario && u.password === password);
      if (usuarioValido) {
        setUsuarioAutenticado(true);
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      console.error("Error al cargar los usuarios,", error);
      alert("Error al cargar los usuarios.");
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            !usuarioAutenticado ? (
              <Login onLogin={manejarAutenticacion} />
            ) : (
              <Navigate replace to="/frutas" />
            )
          }
        />
        <Route
          path="/frutas"
          element={
            usuarioAutenticado ? (
              <ListaFrutas />
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
