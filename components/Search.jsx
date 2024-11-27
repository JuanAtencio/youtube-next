
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

  const apiKey = "AIzaSyDkuiC_rfCxvCf83zFS2oLpsI4OCC74QNY"; // Asegúrate de reemplazar con tu clave real de YouTube API


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
      axios
        .get(`https://www.googleapis.com/youtube/v3/search`, {
          params: {
            part: "snippet",
            q: query,
            type: "video",
            maxResults: 10,
            key: apiKey,
          },
        })
        .then((response) => {
          setVideos(response.data.items); 
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
