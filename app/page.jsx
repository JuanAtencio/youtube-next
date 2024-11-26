"use client";

import Image from "next/image";

import Video from "@/components/Video";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
  <div className="flex bg-slate-600">
    <div className="">
        {/* <Sidebar/> */}
    </div>
    <div className="container">
    <Video/>  
    </div>
    </div>
  );
}
