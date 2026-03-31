"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const leavesRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLHeadingElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) {
      console.warn(`Section not found: ${id}`);
      return;
    }

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    if (!leavesRef.current) return;

    const leaves = Array.from(
      leavesRef.current.children
    ) as HTMLDivElement[];

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const cols = 6;
    const rows = 5;

    const spacingX = window.innerWidth / cols;
    const spacingY = window.innerHeight / rows;

    const safeRadiusX = 260;
    const safeRadiusY = 220;

    leaves.forEach((leaf) => {
      gsap.set(leaf, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        rotation: Math.random() * 360,
        scale: 0.8 + Math.random() * 0.3,
        opacity: 0.7,
      });
    });

    gsap.to(leaves, {
      x: centerX,
      y: centerY,
      duration: 1,
      ease: "power2.in",
      stagger: 0.01,
      onComplete: () => {
        leaves.forEach((leaf, i) => {
          const col = i % cols;
          const row = Math.floor(i / cols);

          let xDest = col * spacingX + spacingX / 2;
          let yDest = row * spacingY + spacingY / 2;

          const offsetLimitX = spacingX * 0.3;
          const offsetLimitY = spacingY * 0.3;

          xDest += (Math.random() - 0.5) * offsetLimitX;
          yDest += (Math.random() - 0.5) * offsetLimitY;

          if (
            Math.abs(xDest - centerX) < safeRadiusX &&
            Math.abs(yDest - centerY) < safeRadiusY
          ) {
            yDest += yDest < centerY ? -safeRadiusY : safeRadiusY;
          }

          gsap.to(leaf, {
            x: xDest,
            y: yDest,
            duration: 1.5,
            ease: "power2.out",
            onComplete: () => {
              const particle = () => {
                gsap.to(leaf, {
                  x: `+=${(Math.random() - 0.5) * 80}`,
                  y: `+=${(Math.random() - 0.5) * 80}`,
                  rotation: `+=${(Math.random() - 0.5) * 90}`,
                  duration: 1,
                  ease: "sine.inOut",
                  onComplete: particle,
                });
              };
              particle();
            },
          });
        });

        if (logoRef.current) {
          gsap.fromTo(
            logoRef.current,
            { opacity: 0, scale: 0.5, y: 40 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 1,
              ease: "back.out(1.7)",
              delay: 0.3,
            }
          );
        }

        if (taglineRef.current) {
          const letters = taglineRef.current.querySelectorAll("span");

          gsap.to(letters, {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.05,
            duration: 0.8,
            ease: "back.out(1.7)",
            delay: 0.7,
          });
        }

        if (buttonRef.current) {
          gsap.fromTo(
            buttonRef.current,
            { opacity: 0, scale: 0.5, y: 30 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.8,
              ease: "back.out(1.7)",
              delay: 1.2,
            }
          );
        }
      },
    });
  }, []);

  const tagline = "Explore Animals in 3D with AR";

  return (
    <section className="relative w-full h-screen bg-gradient-to-b from-green-50 to-green-100 overflow-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-20 flex justify-end gap-6 p-6 bg-white/60 backdrop-blur-md shadow-md">

        <button onClick={() => scrollToSection("home")} className="font-semibold hover:text-green-800">
          Home
        </button>

        <button onClick={() => scrollToSection("demo")} className="font-semibold hover:text-green-800">
          Demo
        </button>

        <button onClick={() => scrollToSection("features")} className="font-semibold hover:text-green-800">
          Features
        </button>

        <button onClick={() => scrollToSection("team")} className="font-semibold hover:text-green-800">
          Team
        </button>

      </nav>

      {/* Leaves */}
      <div
        ref={leavesRef}
        className="absolute w-full h-full top-0 left-0 pointer-events-none"
      >
        {[...Array(30)].map((_, i) => (
          <img
            key={i}
            src="/leaf.png"
            alt="leaf"
            className="absolute w-[90px] h-[90px] object-contain"
          />
        ))}
      </div>

      {/* HERO */}
      <div
        id="home"
        className="relative z-10 flex flex-col items-center justify-center h-full gap-1 text-center px-4"
      >
        <img
          ref={logoRef}
          src="/logo.png"
          alt="safARi logo"
          className="w-[450px] h-[450px] object-contain opacity-0"
        />

        <h1
          ref={taglineRef}
          className="text-4xl md:text-5xl font-bold text-green-900 tracking-wider -mt-10"
        >
          {tagline.split("").map((letter, index) => (
            <span
              key={index}
              className="inline-block opacity-0 translate-y-4 scale-90"
            >
              {letter === " " ? "\u00A0\u00A0" : letter}
            </span>
          ))}
        </h1>

        {/* ✅ UPDATED DOWNLOAD BUTTON */}
        <a
          ref={buttonRef}
          href="https://drive.google.com/uc?export=download&id=1FcJqobFoXQkRHynqQWEzS7Bzyg8zVxrM"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-full bg-green-600 text-white font-semibold shadow-lg opacity-0 hover:bg-green-700 transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
        >
          Download App
        </a>

      </div>
    </section>
  );
}