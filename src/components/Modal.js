import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';

const Modal = ({ isOpen, onClose, brandName }) => {
  const [email, setEmail] = useState(''); // Para simular el envío por correo

  if (!isOpen) return null;

  const handlePDFDownload = () => {
    const element = document.getElementById('registrability-exam');
    
    // Configuración para generar el PDF en formato horizontal
    html2pdf().from(element).set({
      margin: 1,
      filename: `${brandName}_Examen_Registrabilidad.pdf`,
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'landscape' } // Cambiamos a orientación horizontal (landscape)
    }).save();
  };

  const handleEmailSend = (e) => {
    e.preventDefault();
    if (email) {
      alert(`El análisis de registrabilidad ha sido enviado a: ${email}`);
      setEmail('');
    } else {
      alert('Por favor, ingresa un email válido.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-6xl mx-4">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Este es el análisis de registrabilidad de tu marca: <span className="text-[#04D99D]">{brandName}</span>
        </h2>
        <div id="registrability-exam" className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 table-auto border text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border">
                  Aspecto Evaluado
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border">
                  Marca Registrada
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border">
                  Nueva Marca Solicitada
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border">
                  Evaluación
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border">
                  Conclusión
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="hover:bg-gray-100 cursor-pointer transition-all">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 border">Similitud Fonética</td>
                <td className="px-6 py-4 text-sm text-gray-500 border">Café Andino</td>
                <td className="px-6 py-4 text-sm text-gray-500 border">Andino Coffee</td>
                <td className="px-6 py-4 text-sm text-gray-500 border">
                  Ambas marcas contienen "Andino", <br />
                  elemento clave que suena de <br />
                  forma similar.
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 border">Similitud fonética moderada.</td>
              </tr>
              <tr className="hover:bg-gray-100 cursor-pointer transition-all">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 border">Similitud Visual</td>
                <td className="px-6 py-4 text-sm text-gray-500 border">Café Andino</td>
                <td className="px-6 py-4 text-sm text-gray-500 border">Andino Coffee</td>
                <td className="px-6 py-4 text-sm text-gray-500 border">
                  Las palabras "Café" y "Coffee" <br />
                  son similares visualmente, <br />
                  y ambas comparten "Andino".
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 border">Similitud visual significativa.</td>
              </tr>
              <tr className="hover:bg-gray-100 cursor-pointer transition-all">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 border">Similitud Conceptual</td>
                <td className="px-6 py-4 text-sm text-gray-500 border">
                  Café relacionado <br />
                  con la región andina.
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 border">
                  Café relacionado <br />
                  con la región andina.
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 border">
                  Ambas marcas evocan <br />
                  productos de café <br />
                  relacionados con la región andina.
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 border">Alta similitud conceptual.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Botón para descargar PDF */}
        <div className="flex justify-between mt-6">
          <button
            onClick={handlePDFDownload}
            className="px-4 py-2 bg-[#04D99D] text-white rounded-lg hover:bg-[#04B986] transition-colors"
          >
            Descargar PDF
          </button>

          {/* Formulario para enviar por correo */}
          <form onSubmit={handleEmailSend} className="flex items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu correo"
              className="px-4 py-2 border rounded-lg mr-2 text-black"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#04D99D] text-white rounded-lg hover:bg-[#04B986] transition-colors"
            >
              Enviar por correo
            </button>
          </form>
        </div>

        {/* Botón de cerrar */}
        <div className="flex justify-end mt-6">
          <button
            className="px-4 py-2 bg-[#04D99D] text-white rounded-lg hover:bg-[#04B986] transition-colors"
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
