import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomeUser from './components/WelcomeUser';
import SearchIA from './components/SearchIA';
import BrandCard from './components/BrandCards';
import ClipLoader from "react-spinners/ClipLoader";
import LazyLoad from 'react-lazyload';

import './App.css';

function App() {
  const [loading, setLoading] = useState(false); // Estado de carga
  const [results, setResults] = useState(null); // Estado de resultados

  // Función que maneja la búsqueda
  const handleSearch = (filteredBrands) => {
    if (filteredBrands === null) {
      setResults(null); // Si solo se ingresaron espacios, no mostrar nada
      return;
    }

    setLoading(true); // Muestra el spinner mientras se cargan los resultados
    setTimeout(() => {
      setResults(filteredBrands); // Actualizamos el estado con las coincidencias
      setLoading(false); // Ocultamos el spinner
    }, 1000); // Simulamos un pequeño retardo
  };

  return (
    <div className="App flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-7xl">
          <WelcomeUser userName="Tu Nombre" />
          <div className="mt-8">
            <SearchIA onSearch={handleSearch} />
          </div>

          {/* Mostramos el spinner mientras se cargan los resultados */}
          {loading ? (
            <div className="flex justify-center items-center mt-8">
              <ClipLoader color={"#04D99D"} loading={loading} size={50} />
            </div>
          ) : (
            <>
              {/* No mostrar nada si no hay resultados ni búsqueda válida */}
              {results !== null && (
                <>
                  {results.length > 0 ? (
                    <h2 className="text-3xl font-bold mt-8 mb-4">
                      Tienes {results.length} coincidencia{results.length > 1 ? 's' : ''}:
                    </h2>
                  ) : (
                    <h2 className="text-3xl font-bold mt-8 mb-4">No hay coincidencias</h2>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {results.map((brand, index) => (
                      <LazyLoad key={index} height={200} offset={100} once>
                        <BrandCard brand={brand} />
                      </LazyLoad>
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;


