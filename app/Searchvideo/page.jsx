
// "use client";

// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const Search = () => {
//   const router = useRouter();
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
  
//   // Tu clave de API de YouTube
//   const apiKey = 'AIzaSyDkuiC_rfCxvCf83zFS2oLpsI4OCC74QNY'; // Asegúrate de reemplazar con tu clave real de YouTube API
//   const maxResults = 10; // Número de resultados a mostrar

//   const [query, setQuery] = useState('');

//   // Aseguramos que el query solo se capture una vez que se haya cargado el cliente
//   useEffect(() => {
//     if (router.query && router.query.query) {
//       setQuery(router.query.query);
//     }
//   }, [router.query]); // Se ejecuta cada vez que cambian los valores en `router.query`

//   useEffect(() => {
//     if (query) {
//       setLoading(true);
//       setError('');
      
//       // Hacer la solicitud a la API de YouTube
//       axios.get(`https://www.googleapis.com/youtube/v3/search`, {
//         params: {
//           part: 'snippet',
//           q: query,
//           type: 'video', // Solo obtener videos
//           maxResults: maxResults,
//           key: apiKey,
//         },
//       })
//       .then((response) => {
//         setVideos(response.data.items); // Almacenar los resultados en el estado
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError('Hubo un error al obtener los resultados');
//         setLoading(false);
//       });
//     }
//   }, [query]); // Se ejecuta cada vez que cambia el valor de `query`

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Resultados para: {query}</h1>
      
//       {loading && <p>Cargando resultados...</p>}
//       {error && <p className="text-red-500">{error}</p>}
      
//       {videos.length === 0 && !loading && !error ? (
//         <p>No se encontraron resultados para "{query}".</p>
//       ) : (
//         <div>
//           {videos.map((video) => (
//             <div key={video.id.videoId} className="mb-4">
//               <h2 className="text-xl">{video.snippet.title}</h2>
//               <p>{video.snippet.description}</p>
//               <a 
//                 href={`https://www.youtube.com/watch?v=${video.id.videoId}`} 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="text-blue-500 underline"
//               >
//                 Ver video
//               </a>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Search;


// --------------------------------------

// import React, { use } from 'react'
// import Search from '@/components/Search';


// export default function Page({
//   params,
// }) {
//   const id = use(params).id
//   console.log(id)
//   return (
  
//     <div className="p-4">
//       <Search videoId={id} className="w-full"  /> 
//     </div>

//   )
// }}


"use client";

import Search from '@/components/Search'
import React from 'react'


const page = () => {


  return (
    <div>
    <Search/>
  </div>
  )
}

export default page;

