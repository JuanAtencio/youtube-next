import React from 'react'

const VideosRecomendados = ({videos}) => {
  return (
    <div className="w-64 bg-primary p-4 rounded-lg shadow-lg border border-white border-opacity-30">
      <h3 className="text-white text-xl font-semibold mb-4">Videos Recomendados</h3>
      <ul className="space-y-4 rounded">
        {videos.map((video) => (
          <li key={video.id} className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex flex-col">
              <span className="text-white text-sm">{video.title}</span>
              <span className="text-gray-400 text-xs">{video.channel}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default VideosRecomendados
