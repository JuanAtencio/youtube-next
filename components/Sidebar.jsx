
"use client";

import { useState } from 'react';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name:"video",
        path:"/videoplayer",
    },
]

const Sidebar = () => {


 const pathname = usePathname();
 console.log(pathname);
 

  const [open, setOpen] = useState(true);

  const toggleSidebar = () => setOpen(!open);

  return (
    <div>
      {/* Sidebar para pantallas grandes */}
      <div className={`fixed inset-0 flex z-50 ${open ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
        <div className="bg-primary w-64 p-4 space-y-4 text-white">
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
          
            <Link href="/" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16M4 12h16M4 20h16" />
                </svg>
              </Link>
              <h1 className="text-xl font-bold">YouTube</h1>
          </div>

          <ul className="space-y-1">
            <li>
            <Link href="/explore" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="/explore" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                <span>Explorar</span>
              </Link>
            </li>
            <li>
              <Link href="/subscriptions" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h18M3 6h18M3 18h18" />
                </svg>
                <span>Suscripciones</span>
              </Link>
            </li>
            <li>
              <Link href="/library" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16v16H4z" />
                </svg>
                <span>Biblioteca</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Sidebar para pantallas pequeñas */}
      <div className={`lg:hidden fixed inset-0 z-50 bg-gray-800 ${open ? 'block' : 'hidden'}`}>
        <div className="w-64 bg-gray-800 p-4 space-y-4 text-white">
          <ul className="space-y-2">
            <li>
              <Link href="/" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16M4 12h16M4 20h16" />
                </svg>
                <span>Inicio</span>
              </Link>
            </li>
            <li>
              <Link href="/explore" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                <span>Explorar</span>
              </Link>
            </li>
            <li>
              <Link href="/subscriptions" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h18M3 6h18M3 18h18" />
                </svg>
                <span>Suscripciones</span>
              </Link>
            </li>
            <li>
              <Link href="/library" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16v16H4z" />
                </svg>
                <span>Biblioteca</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
