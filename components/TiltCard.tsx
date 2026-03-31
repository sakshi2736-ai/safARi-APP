"use client";

import { useState } from "react";

export default function TiltCard({ children }: { children: React.ReactNode }) {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e: any) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    setStyle({
      transform: `rotateX(${y * -10}deg) rotateY(${x * 10}deg) scale(1.03)`,
    });
  };

  const reset = () => {
    setStyle({
      transform: "rotateX(0deg) rotateY(0deg) scale(1)",
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={style}
      className="transition-transform duration-300 ease-out"
    >
      {children}
    </div>
  );
}