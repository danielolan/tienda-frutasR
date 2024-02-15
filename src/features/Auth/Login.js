import React, { useState } from 'react';
import './Login.css';
import frutasImage from '../../assets/images/frutas.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'; // Importa la imagen correctamente

function Login({ onLogin }) {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [usuarioValido, setUsuarioValido] = useState(true);
  const [passwordValido, setPasswordValido] = useState(true);

  const validateInput = (input, setter) => {
    if (input.trim() === '') {
      setter(false);
    } else {
      setter(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateInput(usuario, setUsuarioValido);
    validateInput(password, setPasswordValido);

    if (usuario.trim() !== '' && password.trim() !== '') {
      onLogin(usuario, password); // Llama a la función de autenticación
    }
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img src={frutasImage} alt="Fondo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div className="login-box">
        <form onSubmit={handleSubmit} className="login-form">
          <h2 style={{ textAlign: 'center', fontFamily: "'Poppins', sans-serif", color: '#020202' }}>INICIAR SESION</h2>
          <div className="input-group">
            <label htmlFor="usuario">Usuario <FontAwesomeIcon icon={faUser} /></label>
            <input type="text" id="usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña <FontAwesomeIcon icon={faLock} /></label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
