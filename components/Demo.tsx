"use client";

import { useRef } from "react";

export default function Demo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    videoRef.current?.play();
  };

  const handlePause = () => {
    videoRef.current?.pause();
  };

  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <section
      id="demo"
      className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6 text-center">
        See safARi in Action
      </h2>

      <p className="text-lg text-gray-600 text-center max-w-2xl mb-10">
        Experience how kids can explore animals in 3D using Augmented Reality.
      </p>

      {/* VIDEO */}
      <video
        ref={videoRef}
        src="/demo.mp4"
        className="w-full max-w-4xl rounded-2xl shadow-lg"
      />

      {/* CONTROLS */}
      <div className="flex gap-6 mt-6">

        {/* PLAY */}
        <button
          onClick={handlePlay}
          className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition"
        >
          ▶
        </button>

        {/* PAUSE */}
        <button
          onClick={handlePause}
          className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition"
        >
          ❚❚
        </button>

        {/* RESTART (NEW ICON STYLE 🔄) */}
        <button
          onClick={handleRestart}
          className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition"
        >
          ↻
        </button>

      </div>
    </section>
  );
}