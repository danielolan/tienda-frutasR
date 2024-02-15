import React, { useState } from 'react';
import './Login.css'; // Asegúrate de tener este archivo CSS para los estilos

function Login({ onLogin }) {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(usuario, password); // Llama a la función de autenticación pasada por el componente padre
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>INICIAR SESION</h2>
        <div className="input-group">
          <label htmlFor="usuario">Usuario</label>
          <input
            type="text"
            id="usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default Login;
