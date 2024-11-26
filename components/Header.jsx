"use client";

import React from "react";
import Image from "next/image";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "./Sidebar";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  // const handleKeyDown = (e) => {
  //   if (e.key === 'Enter') {
  //     searchVideos();
  //   }
  // };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      //Redirige a la pagina de resultados con la query como paarametro
      router.push(`/Searchvideo?query=${searchQuery}`);
    }
  };

  return (
    <header className="bg-primary flex">
      {/* Logo alineado a la izquierda */}

      <div className="flex justify-start p-4">
        <Sidebar />
        <img src="/logo.png" alt="Youtube" className="h-8" />
      </div>

      {/* Barra de búsqueda centrada */}
      <div className="flex-grow mx-4 ">
        <div className="flex justify-center">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              // onKeyDown={handleKeyDown}
              className="w-full max-w-md px-4 py-2 mt-2 border bg-primary text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </form>
        </div>
      </div>
      {/* Botones a la derecha */}
      <div className="flex space-x-6 ml-auto p-2 mx-10">
        <button className="text-gray-600 hover:text-white">Inicio</button>
        <button className="text-gray-600 hover:text-white">Tendencias</button>
        <button className="text-gray-600 hover:text-white">
          Suscripciones
        </button>
      </div>
    </header>
  );
};

export default Header;
