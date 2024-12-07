import React from 'react';

const ProblemaObjetivo: React.FC = () => {
  return (
    <section className="w-full h-screen bg-white p-8 flex flex-col">
      {/* Título de la sección */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-black">Problema & Objetivo</h2>
      </div>

      {/* Contenedor de las tarjetas */}
      <div className="flex flex-1 gap-8 overflow-hidden">
        {/* Tarjeta "Problema" */}
        <div className="flex-1 rounded-lg p-6 relative overflow-hidden" style={{ backgroundColor: '#FFEB00' }}>
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Ejemplo de figura decorativa */}
            <div className="w-40 h-40 rounded-full bg-gradient-to-r from-pink-500 via-blue-500 to-green-500 opacity-50"></div>
          </div>

          <div className="relative z-10 flex flex-col h-full justify-end">
            <h3 className="text-2xl font-bold text-black mb-2">Problema</h3>
            <p className="text-black mb-4">
              Explicación breve del problema que se quiere abordar. Este texto sustituye la descripción original.
            </p>
            <p className="text-sm text-gray-700">Ejemplo: Detalle de autores u otra info</p>
          </div>
        </div>

        {/* Tarjeta "Objetivo" */}
        <div className="flex-1 rounded-lg p-6 relative overflow-hidden" style={{ backgroundColor: '#00FF99' }}>
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Otra figura decorativa */}
            <div className="w-40 h-40 bg-gradient-to-r from-yellow-500 via-pink-500 to-blue-500 opacity-50 transform rotate-45 rounded-lg"></div>
          </div>

          <div className="relative z-10 flex flex-col h-full justify-end">
            <h3 className="text-2xl font-bold text-black mb-2">Objetivo</h3>
            <p className="text-black mb-4">
              Aquí se describe el objetivo a alcanzar a partir del problema. Este texto reemplaza a la descripción original.
            </p>
            <p className="text-sm text-gray-700">Ejemplo: Detalle de autores u otra info</p>
          </div>
        </div>

        {/* Tarjeta opcional (puedes eliminarla si no la necesitas) */}
        <div className="flex-1 rounded-lg p-6 relative overflow-hidden" style={{ backgroundColor: '#00C8FF' }}>
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Otra figura decorativa */}
            <div className="w-40 h-40 bg-gradient-to-r from-green-500 via-purple-500 to-red-500 opacity-50 rounded-full"></div>
          </div>

          <div className="relative z-10 flex flex-col h-full justify-end">
            <h3 className="text-2xl font-bold text-black mb-2">Opcional</h3>
            <p className="text-black mb-4">
              Este es un espacio adicional, puedes eliminar esta tarjeta o reutilizarla.
            </p>
            <p className="text-sm text-gray-700">Autores u otra info opcional</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemaObjetivo;
