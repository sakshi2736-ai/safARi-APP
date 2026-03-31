"use client";

import { useState } from "react";

export default function AppPreview() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    "/screenshot1.png",
    "/screenshot2.png",
    "/screenshot3.png",
    "/screenshot4.png",
  ];

  const nextImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % images.length);
  };

  const prevImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      (selectedIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section className="w-full flex flex-col gap-6 py-10 px-4 sm:px-6 bg-white dark:bg-white">

      {/* Title */}
      <div className="w-full md:w-[80%]">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 text-left">
          <span className="text-green-600">05</span> App Preview
        </h2>

        <p className="text-gray-600 text-sm sm:text-base text-left leading-relaxed mb-6">
          Take a look at how safARi brings animals to life using Augmented Reality.
        </p>
      </div>

      {/* Grid */}
      <div className="w-full md:w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">

        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => setSelectedIndex(i)}
            className="cursor-pointer bg-green-50 border border-green-200 shadow-md rounded-xl p-3 flex items-center justify-center
            transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.03]
            active:scale-95"
          >
            <img
              src={img}
              alt={`Screenshot ${i + 1}`}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}

      </div>

      {/* MODAL */}
      {selectedIndex !== null && (
        <div
          onClick={() => setSelectedIndex(null)}
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4"
        >
          {/* BOX */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white p-4 sm:p-6 rounded-2xl shadow-2xl 
                       w-[90%] sm:w-[80%] md:w-[60%] max-w-3xl flex items-center justify-center"
          >
            {/* IMAGE */}
            <img
              src={images[selectedIndex]}
              alt="Preview"
              className="w-full h-auto object-contain rounded-lg"
            />

            {/* LEFT BUTTON */}
            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 
              bg-green-600 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full text-xl 
              flex items-center justify-center shadow-lg hover:scale-110 transition"
            >
              ‹
            </button>

            {/* RIGHT BUTTON */}
            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 
              bg-green-600 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full text-xl 
              flex items-center justify-center shadow-lg hover:scale-110 transition"
            >
              ›
            </button>

            {/* CLOSE */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-2 right-3 sm:right-4 text-xl sm:text-2xl font-bold text-gray-600 hover:text-black"
            >
              ×
            </button>
          </div>
        </div>
      )}

    </section>
  );
}