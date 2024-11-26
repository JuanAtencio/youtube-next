"use client";

import { useState } from "react";
import Link from "next/link";

// import { usePathname } from 'next/navigation';

// const links = [
//     {
//         name: "home",
//         path: "/",
//     },
//     {
//         name:"video",
//         path:"/videoplayer",
//     },
// ]

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className={`fixed top-0 left-0 z-40 bg-gray-800 bg-opacity-50 transition-opacity ${
          isOpen ? "block w-64 h-full" : "hidden"
        }`}
        onClick={toggleSidebar}
      ></div>

      <div
        className={`fixed top-0 left-0 z-50 bg-primary h-full w-64 p-4 space-y-4 text-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center space-x-3">
          <button onClick={toggleSidebar} className="lg:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <Link
            href="/"
            className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4h16M4 12h16M4 20h16"
              />
            </svg>
          </Link>
          <h1 className="text-xl font-bold">YouTube</h1>
        </div>

        <ul className="space-y-1">
          <li>
            <Link
              href="/"
              className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                />
              </svg>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              href="/explore"
              className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                />
              </svg>
              <span>Explorar</span>
            </Link>
          </li>
          <li>
            <Link
              href="/subscriptions"
              className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12h18M3 6h18M3 18h18"
                />
              </svg>
              <span>Suscripciones</span>
            </Link>
          </li>
          <li>
            <Link
              href="/library"
              className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4h16v16H4z"
                />
              </svg>
              <span>Biblioteca</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

// "use client";

// import { useState } from "react";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true); // Establecemos el estado de si el sidebar está abierto o cerrado

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen); // Cambiamos el estado al contrario de lo que esté actualmente
//   };

//   return (
//     <>
//       <div
//         className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity ${
//           isOpen ? "block w-64 h-full" : "hidden"
//         }`}
//         onClick={toggleSidebar} // Cuando hacemos clic fuera del sidebar, lo cerramos
//       ></div>

//       <div
//         className={`fixed top-0 left-0 w-64 h-full bg-primary text-white p-5 transition-transform ${
//           isOpen ? "transform-none" : "-translate-x-full"
//         }`}
//       >
//         <button
//           className="absolute top-5 right-5 text-xl text-white"
//           onClick={toggleSidebar}
//         >
//           ×
//         </button>
//         <h2 className="text-xl font-bold">Sidebar</h2>
//         <ul className="mt-5">
//           <li><a href="#" className="block py-2 hover:bg-blue-700">Inicio</a></li>
//           <li><a href="#" className="block py-2 hover:bg-blue-700">Servicios</a></li>
//           <li><a href="#" className="block py-2 hover:bg-blue-700">Sobre Nosotros</a></li>
//           <li><a href="#" className="block py-2 hover:bg-blue-700">Contacto</a></li>
//         </ul>
//       </div>

//       <button
//         className="fixed top-5 left-5 p-3 bg-blue-800 text-white rounded-lg"
//         onClick={toggleSidebar}
//       >
//         {isOpen ? "Cerrar Sidebar" : "Abrir Sidebar"}
//       </button>
//     </>
//   );
// };

// export default Sidebar;
