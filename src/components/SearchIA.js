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
    e.preventPreventDefault();
    setIsDragging(false);
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
      <form
        onSubmit={handleSubmit}
        className="flex items-center h-[68px] rounded-[14px] shadow-md border-2 border-transparent bg-transparent"
        style={{
          borderImage: 'linear-gradient(to right, #ec4899, #8b5cf6) 1',
        }}
      >
        <div className="flex items-center w-full pl-4 relative">
          <Search size={24} className="absolute left-4 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar marca..."
            value={inputValue}
            onChange={handleInputChange}
            className="w-full h-full py-4 pl-12 pr-4 outline-none text-white-700 bg-transparent rounded-[14px]"  // Aplicamos el border-radius aquí también
          />
        </div>
        <div
          className="p-2 ml-4 text-gray-400 hover:text-black-600 cursor-pointer"
          onClick={() => fileInputRef.current.click()}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Upload size={24} className={isDragging ? 'text-blue-500' : ''} />
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
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-[14px] px-4 h-[50px] mx-2 hover:from-pink-600 hover:to-purple-700 transition-colors"
        >
          Buscar
        </button>
      </form>
    </div>
  );
};

export default SearchIA;
