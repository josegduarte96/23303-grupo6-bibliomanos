import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const MensajeBienvenida = () => {
  // Función para mostrar el mensaje de bienvenida
  const showWelcomeMessage = () => {
    Swal.fire({
      title: 'Bienvenido! Preparate para la hermosa aventura de leer',
      width: 600,
      padding: '3em',
      color: '#a73916',
      background: '#fff url("")',
      backdrop: `
        rgba(0,0,0,0.4)
        left top
        no-repeat
      `
    });
  };

  
  useEffect(() => {
  
    const mensajeBienvenidaAccepted = sessionStorage.getItem('mensajeBienvenidaAccepted');

      if (!mensajeBienvenidaAccepted) {
      showWelcomeMessage();
      sessionStorage.setItem('mensajeBienvenidaAccepted', 'true');
    }
  }, []);

  return null;
};

export default MensajeBienvenida;
