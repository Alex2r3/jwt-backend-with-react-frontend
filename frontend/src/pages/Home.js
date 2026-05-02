import React from 'react';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="page-container">
      <div className="hero-section">
        <h1>Bienvenido a la Aplicación</h1>
        {user ? (
          <div className="welcome-card">
            <h2>Hola, {user.username}!</h2>
            <p>Tu rol actual es: <strong>{user.roles && user.roles.join(', ')}</strong></p>
          </div>
        ) : (
          <p>Por favor, inicia sesión para acceder a más funciones.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
