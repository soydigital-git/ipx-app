const WelcomeUser = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-12"> {/* Centrar el texto y moverlo hacia arriba */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center">
        <span className="text-white">👋 Hola, </span>
        <span className="bg-gradient-to-r from-[#04D99D] to-[#04B583] text-transparent bg-clip-text">
          Registra tu creatividad
        </span>
      </h1>
      <h2 className="text-lg sm:text-xl md:text-2xl mb-4 text-center">
        y protege legalmente tu marca con nuestro{' '}
        <span className="font-bold bg-gradient-to-r from-[#04D99D] to-[#04B583] text-transparent bg-clip-text">
          buscador inteligente.
        </span>
      </h2>
    </div>
  );
};

export default WelcomeUser;
