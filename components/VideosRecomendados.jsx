import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const VideosRecomendados = () => {

  const [videosRecomendados, setVideosRecomendados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = 'AIzaSyDkuiC_rfCxvCf83zFS2oLpsI4OCC74QNY';
  const REGION_CODE = 'US';

  useEffect(() => {
    // Function to fetch recommended videos
    const fetchVideosRecomendados = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos`, {
            params: {
              part: 'snippet,contentDetails,statistics',
              chart: 'mostPopular',
              regionCode: REGION_CODE,
              maxResults: 10,
              key: API_KEY,
            }
          }
        );
        setVideosRecomendados(response.data.items);
      } catch (error) {
        setError('Error loading videos');
      } finally {
        setLoading(false);
      }
    };

    fetchVideosRecomendados();
  }, []);

  const retryFetch = () => {
    setLoading(true);
    setError(null);
    fetchvideosRecomendados();
  };

  if (loading) {
    return <div>Loading videos...</div>;
  }

  if (error) {
    return (
      <div>
        {error}
        <button onClick={retryFetch} className="mt-2 text-blue-500 hover:underline">
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="container w-64 bg-primary p-4 rounded-lg shadow-lg border border-white border-opacity-30">
      <h3 className="text-white text-xl font-semibold mb-4">Videos Recomendados</h3>
      <ul className="space-y-4 rounded">
        {videosRecomendados.map((video) => (
          <li key={video.id} className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded">
          <Link href={`/videoplayer/${video.id}`} className="flex items-center w-full">
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              className="w-16 h-16 object-cover rounded mr-4"
            /> 
            
            <div className="flex flex-col w-full">
              <span className="text-white text-sm">{video.snippet.title}</span>
            </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default VideosRecomendados
