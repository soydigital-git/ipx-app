import React, { useState, useRef } from 'react';
import { Search, Upload } from 'lucide-react';

const SearchIA = () => {
  const [inputValue, setInputValue] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Búsqueda realizada:', inputValue);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    // Aquí puedes manejar el archivo soltado
    console.log('Archivo soltado:', e.dataTransfer.files[0]);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log('Archivo seleccionado:', file);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="flex items-center bg-white rounded-[14px] shadow-md h-[40px]">
        <div className="flex-grow flex items-center pl-4">
          <Search size={20} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Buscar marca..."
            value={inputValue}
            onChange={handleInputChange}
            className="w-full h-full py-2 px-2 outline-none text-gray-700 focus:ring-2 focus:ring-blue-300 rounded-[14px]"
          />
        </div>
        <div
          className="p-2 text-gray-400 hover:text-gray-600 cursor-pointer"
          onClick={() => fileInputRef.current.click()}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Upload size={20} className={isDragging ? 'text-blue-500' : ''} />
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            className="hidden"
            accept="image/*"
          />
        </div>
        <button
          type="submit"
          className="bg-orange-500 text-white rounded-[12px] px-4 h-[30px] mx-1 hover:bg-orange-600 transition-colors"
        >
          Buscar
        </button>
      </form>
    </div>
  );
};

export default SearchIA;