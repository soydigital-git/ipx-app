import React from 'react';

const WelcomeUser = () => {
  return (
    <div className="text-left">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        <span className="text-white">👋 Hola, </span>
        <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
          Registra tu creatividad
        </span>
      </h1>
      <h2 className="text-xl sm:text-2xl md:text-3xl mb-4">
        y protege legalmente tu marca con nuestro{' '}
        <span className="font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
          buscador inteligente.
        </span>
      </h2>
    </div>
  );
};

export default WelcomeUser;
