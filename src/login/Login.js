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
      <div className="login-image">
        {/* Aquí puedes insertar tu imagen usando <img src="URL_DE_TU_IMAGEN" alt="Descripción" /> */}
      </div>
      <div className="login-box">
        <form onSubmit={handleSubmit} className="login-form">
          <h2 style={{ textAlign: 'center', fontFamily: "'Poppins', sans-serif", color: '#83617A' }}>INICIAR SESION</h2>
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
    </div>
  );
}

export default Login;
