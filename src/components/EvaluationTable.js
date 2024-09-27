import React from 'react';

const EvaluationTable = ({ onClose }) => {
  return (
    <div className="modal-container">
      <div className="modal-content bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Examen de Registrabilidad</h2>
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600">ASPECTO EVALUADO</th>
              <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600">MARCA REGISTRADA</th>
              <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600">NUEVA MARCA SOLICITADA</th>
              <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600">EVALUACIÓN</th>
              <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600">CONCLUSIÓN</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Similitud Fonética</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Café Andino</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Andino Coffee</td>
              <td className="px-6 py-4 whitespace-pre-line text-sm text-gray-500">
                Ambas marcas contienen "Andino",{'\n'}
                elemento clave que suena de{'\n'}
                forma similar.
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Similitud fonética moderada.</td>
            </tr>
            {/* Añade más filas según sea necesario */}
          </tbody>
        </table>

        <button 
          onClick={onClose} 
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default EvaluationTable;
