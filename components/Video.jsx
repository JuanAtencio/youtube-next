import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Video = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = 'AIzaSyDkuiC_rfCxvCf83zFS2oLpsI4OCC74QNY';
  const REGION_CODE = 'US';

  useEffect(() => {
    // Function to fetch recommended videos
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos`, {
            params: {
              part: 'snippet,contentDetails,statistics',
              chart: 'mostPopular',
              regionCode: REGION_CODE,
              maxResults: 15,
              key: API_KEY,
            }
          }
        );
        setVideos(response.data.items);
      } catch (error) {
        setError('Error loading videos');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const retryFetch = () => {
    setLoading(true);
    setError(null);
    fetchVideos();
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
      <div className="bg-primary flex flex-col items-center mx-auto px-4 py-2">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Recommended Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Link to the video */}
              <Link href={`/videoplayer/${video.id}`}>
                <img
                  src={video.snippet.thumbnails.medium.url} 
                  alt={`Thumbnail of ${video.snippet.title}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-800">{video.snippet.title}</h3>
                  {/* Optional: Description or Date */}
                  <p className="text-sm text-gray-500 truncate max-w-full">{video.snippet.description}</p>
                  <p className="text-xs text-gray-400 mt-1">{new Date(video.snippet.publishedAt).toLocaleDateString()}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Video;
