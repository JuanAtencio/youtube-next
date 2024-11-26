"use client";

// import axios from 'axios';
// import Link from 'next/link';
// import Header from "./Header"

// const Search = () => {

//     const [searchQuery, setSearchQuery] = useState('');  // Almacena la consulta de búsqueda
//     const [videos, setVideos] = useState([]);  // Almacena los videos
//     const [loading, setLoading] = useState(false);  // Controla el estado de carga
//     const [error, setError] = useState(null);  // Controla los errores

//     const API_KEY = 'AIzaSyDkuiC_rfCxvCf83zFS2oLpsI4OCC74QNY';
//     const REGION_CODE = 'US';

// // Función para realizar la búsqueda
// const searchVideos = async () => {
//     if (!searchQuery.trim()) return;  // Si no hay consulta, no hacer nada

//     setLoading(true);
//     setError(null);

//     try {
//       const response = await axios.get(
//         `https://www.googleapis.com/youtube/v3/search`, {
//           params: {
//             part: 'snippet',
//             q: searchQuery,  // La consulta de búsqueda
//             type: 'video',    // Solo obtener videos
//             maxResults: 20,    // Número máximo de resultados
//             regionCode: REGION_CODE,
//             key: API_KEY,
//           }
//         }
//       );

//       setVideos(response.data.items);  // Guardamos los resultados en el estado
//     } catch (error) {
//       setError('Error al cargar los resultados');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === 'Enter') {
//       searchVideos();
//     }
//   };

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);  // Actualizamos la consulta al escribir
//   };

//   const retryFetch = () => {
//     setLoading(true);
//     setError(null);
//     searchVideos();
//   };

//   if (loading) {
//     return <div>Loading videos...</div>;
//   }

//   if (error) {
//     return (
//       <div>
//         {error}
//         <button onClick={retryFetch} className="mt-2 text-blue-500 hover:underline">
//           Retry
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="w-100 bg-primary p-4 rounded-lg shadow-lg border border-white border-opacity-30">
//       {/* Campo de búsqueda */}
//       <input
//         type="text"
//         placeholder="Buscar videos..."
//         value={searchQuery}
//         onChange={handleSearchChange}
//         onKeyDown={handleKeyDown}
//         className="w-full p-2 mb-4 rounded bg-gray-700 text-white placeholder-gray-400"
//       />

//       <h3 className="text-white text-xl font-semibold mb-4">Videos Recomendados</h3>

//       {/* Mostrar los resultados de búsqueda */}
//       <ul className="space-y-4 rounded">
//         {videos.map((video) => {
//           const videoId = video.id.videoId;  // El ID del video

//           return (
//             <li key={videoId} className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded">
//               <Link href={`/videoplayer/${videoId}`} className="flex items-center w-full">
//                 <div className="relative">
//                   {/* Imagen a la izquierda */}
//                   <img
//                     src={video.snippet.thumbnails.medium.url}
//                     alt={video.snippet.title}
//                     className="w-16 h-16 object-cover rounded mr-4"
//                   />
//                 </div>

//                 {/* Texto al costado de la imagen */}
//                 <div className="flex flex-col w-full">
//                   <span className="text-white text-sm">{video.snippet.title}</span>
//                   <span className="text-gray-400 text-xs">{video.snippet.description}</span>
//                 </div>
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default Search

"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const Search = () => {
  const router = useRouter();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  // Tu clave de API de YouTube
  const apiKey = "AIzaSyDkuiC_rfCxvCf83zFS2oLpsI4OCC74QNY"; // Asegúrate de reemplazar con tu clave real de YouTube API
  const maxResults = 5; // Número de resultados a mostrar

  // Aseguramos que el query solo se capture una vez que se haya cargado el cliente
  useEffect(() => {
    if (router.query && router.query.query) {
      setQuery(router.query.query);
    }
  }, [router.query]); // Se ejecuta cada vez que cambian los valores en `router.query`

  useEffect(() => {
    if (query) {
      setLoading(true);
      setError("");

      // Hacer la solicitud a la API de YouTube
      axios
        .get(`https://www.googleapis.com/youtube/v3/search`, {
          params: {
            part: "snippet",
            q: query,
            type: "video", // Solo obtener videos
            maxResults: 10,
            key: apiKey,
          },
        })
        .then((response) => {
          setVideos(response.data.items); // Almacenar los resultados en el estado
          setLoading(false);
        })
        .catch((err) => {
          setError("Hubo un error al obtener los resultados");
          setLoading(false);
        });
    }
  }, [query]); // Se ejecuta cada vez que cambia el valor de `query`

  return (
    <div className="p-4">
      {loading && <p>Cargando resultados...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {videos.length === 0 && !loading && !error ? (
        <p>No se encontraron resultados para "{query}".</p>
      ) : (
        <ul className="container space-y-4 rounded">
          {videos.map((video) => (
            <li
              key={video.id.videoId}
              className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded"
            >
              <Link
                href={`/videoplayer/${video.id.videoId}`}
                className="flex w-full"
              >
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                  className="w-50 h-25 object-cover rounded mr-4"
                />
                <div className="flex flex-col w-full space-y-2">
                  <span className="text-2xl text-start">
                    {video.snippet.title}
                  </span>
                  <span className="text-left justify-end text-sm text-gray-500 line-clamp-3">
                    {video.snippet.description}
                  </span>
                </div>
              </Link>
              {/* <a
                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Ver video
              </a> */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
