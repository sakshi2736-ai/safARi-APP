"use client";

import { motion } from "framer-motion";

export default function Problem() {
  return (
    <section className="w-full bg-white px-4 md:px-16 py-16 md:py-24 flex flex-col">

      {/* Heading */}
      <div className="flex items-center gap-3 mb-8 md:mb-10">
        <span className="text-green-600 text-2xl md:text-3xl font-bold">01</span>
        <h2 className="text-2xl md:text-4xl font-bold text-green-900">
          Problem Statement
        </h2>
      </div>

      {/* Intro */}
      <div className="max-w-5xl text-base md:text-lg text-gray-700 leading-relaxed mb-10 md:mb-12 text-justify">
        <p>
          Understanding animals through traditional methods is often limited, as most content is presented in static 2D formats. This reduces engagement and makes it difficult for learners to fully grasp concepts. At the same time, although technologies like Augmented Reality (AR) exist, many learners are unaware of their potential in education.
        </p>

        <p className="mt-4 md:mt-6 font-semibold text-green-800">
          The main issues can be summarised as follows:
        </p>
      </div>

      {/* Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {[
          {
            title: "1. Lack of Interactivity in Traditional Learning Methods",
            desc: "Traditional 2D learning tools such as textbooks and images lack interactivity, preventing students from actively engaging with the content.",
          },
          {
            title: "2. Reduced Student Engagement",
            desc: "Static images and text-based content often fail to capture students’ attention, especially in today’s digital environment. This leads to lower interest levels, reduced participation, and decreased motivation to explore the subject further.",
          },
          {
            title: "3. Limited Understanding of Animal Characteristics",
            desc: "2D learning methods do not effectively demonstrate animal features such as movement, behavior, and real-world context. As a result, learners may struggle to fully understand and visualize these concepts.",
          },
          {
            title: "4. Lack of Awareness About Augmented Reality (AR)",
            desc: "Many people have already interacted with AR through filters, games, or applications, but they are not aware that this technology is called Augmented Reality. This lack of awareness limits its adoption as an effective and engaging educational tool.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-green-50 p-5 md:p-6 rounded-xl shadow-md 
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