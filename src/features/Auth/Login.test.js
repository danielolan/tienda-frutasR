// Login.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './Login'; // Ajusta la ruta de importación según sea necesario

describe('Login Component', () => {
  test('renders Login component', () => {
    render(<Login onLogin={() => {}} />);
    expect(screen.getByText(/iniciar sesion/i)).toBeInTheDocument();
  });

  test('allows the user to enter username and password', () => {
    render(<Login onLogin={() => {}} />);

    fireEvent.change(screen.getByLabelText(/usuario/i), {
      target: { value: 'testuser' },
    });
    fireEvent.change(screen.getByLabelText(/contraseña/i), {
      target: { value: 'password' },
    });

    expect(screen.getByLabelText(/usuario/i).value).toBe('testuser');
    expect(screen.getByLabelText(/contraseña/i).value).toBe('password');
  });

  // Aquí puedes agregar más pruebas, como simular el envío del formulario y verificar que `onLogin` se llama con los argumentos correctos
});
