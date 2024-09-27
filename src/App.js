import React, { useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import LazyLoad from 'react-lazyload';
import Modal from './components/Modal';
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomeUser from './components/WelcomeUser';
import SearchIA from './components/SearchIA';
import BrandCard from './components/BrandCards';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchedBrand, setSearchedBrand] = useState('');

  const handleSearch = (filteredBrands, brandName) => {
    setSearchedBrand(brandName);
    if (filteredBrands === null) {
      setResults(null);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setResults(filteredBrands);
      setLoading(false);
    }, 1000);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const reloadPage = () => {
    setLoading(true);
    setTimeout(() => {
      window.location.reload();
      setLoading(false);
    }, 800); // Animación de carga de 800 ms
  };

  return (
    <div className="App flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-4 mt-8">
        <div className="w-full max-w-7xl">
          <WelcomeUser />
          <div className="mt-8">
            <SearchIA onSearch={handleSearch} />
          </div>

          {loading ? (
            <div className="flex justify-center items-center mt-8">
              <ClipLoader color={"#04D99D"} loading={loading} size={50} />
            </div>
          ) : (
            <>
              {results !== null && (
                <>
                  {results.length > 0 ? (
                    <>
                      <h2 className="text-lg font-normal mt-8 mb-4">
                        Hemos encontrado{' '}
                        <span className="font-bold text-[#04D99D]">{results.length} coincidencia{results.length > 1 ? 's' : ''}</span>.
                        Revisa los resultados y asegúrate de que tu marca sea única. Si lo prefieres, puedes realizar tu examen de registrabilidad{' '}
                        <button onClick={openModal} className="text-[#04D99D] underline">aquí</button>.
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {results.map((brand, index) => (
                          <LazyLoad key={index} height={200} offset={100} once>
                            <BrandCard brand={brand} />
                          </LazyLoad>
                        ))}
                      </div>
                      <button
                        onClick={reloadPage}
                        className="mt-4 px-4 py-2 bg-black text-white border border-white rounded-lg hover:bg-white hover:text-black transition-colors"
                      >
                        Actualizar Resultados
                      </button>
                    </>
                  ) : (
                    <>
                      <h2 className="text-lg font-normal mt-8 mb-4">
                        <span className="font-bold">¡Enhorabuena!</span> No encontramos coincidencias, lo que significa que tu marca podría ser única. Haz tu examen de registrabilidad{' '}
                        <button onClick={openModal} className="text-[#04D99D] underline">aquí</button>.
                      </h2>
                      <button
                        onClick={reloadPage}
                        className="mt-4 px-4 py-2 bg-black text-white border border-white rounded-lg hover:bg-white hover:text-black transition-colors"
                      >
                        Actualizar Resultados
                      </button>
                    </>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </main>
      <Modal isOpen={isModalOpen} onClose={closeModal} brandName={searchedBrand} />
      <Footer />
    </div>
  );
}

export default App;
