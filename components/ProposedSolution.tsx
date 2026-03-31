"use client";

import { motion } from "framer-motion";

export default function ProposedSolution() {
  return (
    <section className="w-full bg-green-50 px-4 md:px-16 py-16 md:py-24 flex flex-col">

      {/* Heading */}
      <div className="flex items-center gap-3 mb-8 md:mb-10">
        <span className="text-green-600 text-2xl md:text-3xl font-bold">02</span>
        <h2 className="text-2xl md:text-4xl font-bold text-green-900">
          Proposed Solution
        </h2>
      </div>

      {/* Intro */}
      <div className="max-w-5xl text-base md:text-lg text-gray-700 leading-relaxed mb-10 md:mb-12 text-justify">
        <p>
          To address the limitations of traditional learning methods, <strong>safARi</strong> is designed as an all-in-one interactive learning solution that uses image recognition technology to provide an interactive and immersive learning experience by combining 3D visualization, audio, and animations.
        </p>

        <p className="mt-4 md:mt-6 font-semibold text-green-800">
          The key features of the proposed solution are as follows:
        </p>
      </div>

      {/* Boxes */}
      <div className="flex flex-col gap-6 md:gap-8">

        {[
          {
            title: "1. Image-Based AR Animal Visualization",
            desc: "The application allows users to scan animal images provided within the PDF in the app using a mobile device camera. Once the image is detected, a corresponding realistic 3D animal model is displayed in the real-world environment, making learning more engaging and immersive.",
          },
          {
            title: "2. Interactive 3D Models with Animations",
            desc: "The displayed 3D animal models are enhanced with animations that demonstrate movement and behavior, helping learners understand how animals look and act in real life. Additionally, the application includes a rotate feature that allows users to view the model from different angles along the Y-axis, further improving observation and understanding of its structure.",
          },
          {
            title: "3. Audio-Visual Learning Support",
            desc: "Along with the 3D model, the application provides audio narration and basic educational information such as the animal’s name, habitat, food habits, and key characteristics. This combination of audio and visual elements caters to different learning styles and improves retention.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white p-5 md:p-6 rounded-xl shadow-md 
            transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-green-100"
          >
            <h3 className="font-semibold text-green-800 text-base md:text-lg mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700 text-sm md:text-base text-justify">
              {item.desc}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}