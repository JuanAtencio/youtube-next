import React, { useState, useEffect } from 'react';
import Comentarios from './Comentarios';

const VideoPlayer = ({ videoId }) => {  
  // Validación del videoId (debería tener 11 caracteres alfanuméricos)
  if (!videoId || typeof videoId !== 'string' || videoId.length !== 11) {
    return <div>Error: ID del video no válido</div>;

  }

  const [loading, setLoading] = useState(true);

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  const handleIframeLoad = () => {
    setLoading(false);
  };

  return (
    <div className="flex flex-col bg-black">
      {/* Reproductor de YouTube usando el embed URL */}
      <div className="relative pb-[56.25%] w-full">
        {loading && (
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
            <div className="text-white text-xl">Cargando...</div>
          </div>
        )}
        <iframe
          src={embedUrl}
          className="absolute top-0 left-0 w-full h-full"
          allowFullScreen
          title="Video Player"
          onLoad={handleIframeLoad} // Cambia el estado de loading a false cuando el iframe esté listo
        />
      </div>
      <div className="mt-4 p-4 bg-white">
        <Comentarios />
      </div>
    </div>
  );
};

export default VideoPlayer;
