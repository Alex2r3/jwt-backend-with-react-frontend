import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import authService from '../services/auth.service';

const User = () => {
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    if (user && user.accessToken) {
      authService.getUserBoard(user.accessToken)
        .then(response => {
          setContent(response);
        })
        .catch(err => {
          setError(err.response?.data?.message || 'No tienes permiso para ver este contenido.');
        });
    }
  }, [user]);

  return (
    <div className="page-container">
      <div className="content-card">
        <h1>Perfil de Usuario</h1>
        {error ? (
          <div className="error-message">{error}</div>
        ) : (
          <div className="user-message">
            <h3>Mensaje del Servidor:</h3>
            <p className="highlight-text">{content || 'Cargando contenido protegido...'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
