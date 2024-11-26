"use client";
import React, { use } from 'react'
import VideoPlayer from "@/components/VideoPlayer";
import VideosRecomendados from '@/components/VideosRecomendados';
import Comentarios from '@/components/Comentarios';


export default function Page({
  params,
}) {
  const id = use(params).id
  console.log(id)
  return (
    <div className="container bg-slate-600 grid grid-cols-2 gap-4">
    {/* Video Player */}
    <div className="p-4">
      <VideoPlayer videoId={id}/> 
    </div>

    {/* Recommended Videos */}
    <div className="flex justify-end p-4">
      <VideosRecomendados/>
    </div>
    <Comentarios className="p-4 col-span-1 md:col-span-1"/>
  </div>
  )
}
  // export default async function Page({params}) {
//   console.log(id)
//   return <div>My Post: {id}</div>
// }

  // const slug = (await params).slug
  // return <div>My Post: {slug}</div>

