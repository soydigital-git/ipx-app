import React, { useState } from 'react';
import levenshtein from 'fast-levenshtein';

const brands = [
  "Coca-Cola", "Pepsi", "Fanta", "Sprite", "Dr Pepper", "Mountain Dew", 
  "Heineken", "Budweiser", "Corona", "Absolut Vodka", "Jack Daniel's", 
  "Johnnie Walker", "Nike", "Adidas", "Zara", "H&M", "Gucci", "Louis Vuitton",
  // Agrega más marcas aquí según sea necesario...
];

// Función para obtener coincidencias aproximadas usando Levenshtein
const getClosestMatches = (input, brands) => {
  const threshold = 3;  // Ajusta la tolerancia de errores
  return brands.filter(brand => levenshtein.get(input.toLowerCase(), brand.toLowerCase()) <= threshold);
};

const SearchIA = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      alert('Por favor, ingrese una palabra válida.');
      onSearch(null, ''); // Pasa null si el input no es válido
      return;
    }

    const closestMatches = getClosestMatches(inputValue, brands);
    onSearch(closestMatches, inputValue); // Ahora también pasamos el nombre de la marca ingresada
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto relative">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="w-full p-3 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring focus:ring-[#04D99D] pr-16" // Se ajusta el padding derecho para el botón
        placeholder="Buscar una marca..."
      />
      <button 
        type="submit" 
        className="absolute right-0 top-0 mt-1 mr-1 bg-[#04D99D] text-white px-4 py-2 rounded-lg hover:bg-[#04B986] transition-colors focus:outline-none"
      >
        Buscar
      </button>
    </form>
  );
};

export default SearchIA;
