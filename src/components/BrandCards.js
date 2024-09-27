import React from 'react';

const BrandCard = ({ brand }) => {
  return (
    <div className="bg-black text-white border border-gray-500 rounded-lg p-6 shadow-lg w-full">
      <h3 className="text-xl font-bold mb-4 uppercase">{brand}</h3> {/* Quitamos text-center */}
      <div className="text-sm space-y-2 text-left"> {/* Alineamos todo el contenido a la izquierda con text-left */}
        <p><strong>Marca denominativa:</strong> CONST BRANDS</p>
        <p><strong>Estado:</strong> Activo</p>
        <p><strong>Productos y servicios:</strong> Lorem ipsum. Lorem ipsum. Lorem ipsum.</p>
        <p><strong>Clase:</strong> D20, Q21</p>
        <p><strong>Número de serie:</strong> 00000000</p>
        <p><strong>Propietarios:</strong> Daniel Max</p>
      </div>
    </div>
  );
};

export default BrandCard;
