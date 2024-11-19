
"use client";

import React from 'react'



import Link from 'next/link'
import VideoPlayer from "@/components/VideoPlayer";
import VideosRecomendados from '@/components/VideosRecomendados';
import Comentarios from '@/components/Comentarios';

import { useRouter } from 'next/router';


const mainVideoUrl = "https://www.youtube.com/embed/LB6_e2uA7rE";

const recommendedVideos = [
  {
    id: 1,
    title: "Video 1",
    thumbnail: "https://via.placeholder.com/150x90",
    channel: "Canal 1",
  },
  {
    id: 2,
    title: "Video 2",
    thumbnail: "https://via.placeholder.com/150x90",
    channel: "Canal 2",
  },
  {
    id: 3,
    title: "Video 3",
    thumbnail: "https://via.placeholder.com/150x90",
    channel: "Canal 3",
  },
  {
    id: 4,
    title: "Video 4",
    thumbnail: "https://via.placeholder.com/150x90",
    channel: "Canal 4",
  },
  {
    id: 5,
    title: "Video 5",
    thumbnail: "https://via.placeholder.com/150x90",
    channel: "Canal 5",
  },
];

const page = () => {
  return (
    <div className="bg-slate-600 grid grid-cols-2 gap-4">
    {/* Video Player */}
    <div className="p-4">
      <VideoPlayer className="w-full"  /> 
    </div>

    {/* Recommended Videos */}
    <div className="flex justify-end p-4">
      <VideosRecomendados videos={recommendedVideos}/>
    </div>
    <Comentarios className="p-4 col-span-1 md:col-span-1"/>
  </div>
  )
}

export default page



// import React from 'react'

// const VideoId = () => {
//   return (
//     <div>   
//       <h1>id dinamico</h1>
//     </div>
//   )
// }

// export default VideoId
