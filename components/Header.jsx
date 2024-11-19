import React from "react";
import Image from "next/image";

const Header = () => {
  return (
<header className="bg-primary flex">
  {/* Logo alineado a la izquierda */}
  <div className="flex justify-start p-4">
    <img src="/logo.png" alt="Youtube" className="h-8" />
  </div>

  {/* Barra de búsqueda centrada */}
  <div className="flex-grow mx-4 ">
    <div className="flex justify-center">
      <input
        type="text"
        placeholder="Search"
        className="w-full max-w-md px-4 py-2 mt-2 border bg-primary text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  </div>

  {/* Botones a la derecha */}
  <div className="flex space-x-6 ml-auto p-2 mx-10">
    <button className="text-gray-600 hover:text-white">Inicio</button>
    <button className="text-gray-600 hover:text-white">Tendencias</button>
    <button className="text-gray-600 hover:text-white">Suscripciones</button>
  </div>

</header>



  );
};

export default Header;
