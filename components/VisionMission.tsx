"use client";

import { motion } from "framer-motion";

export default function VisionMission() {
  return (
    <section className="w-full flex flex-col gap-8 md:gap-10 py-12 md:py-16 px-4 md:px-6 bg-white dark:bg-white">

      <div className="w-full md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 text-left">
            <span className="text-green-600">03</span> Vision
          </h2>

          <div className="bg-green-50 shadow-md rounded-xl p-5 md:p-6 border border-green-200
                          transition-all duration-300 ease-in-out
                          hover:-translate-y-2 hover:bg-green-100 hover:shadow-xl hover:scale-[1.02]">

            <p className="text-gray-700 text-sm md:text-base text-left leading-relaxed">
              To transform traditional learning into an interactive and immersive experience using Augmented Reality.
              Our vision is to make education more engaging, visual, and easy to understand for students, especially children,
              by replacing traditional textbook learning with 3D real-world simulations. We aim to create a future where learning
              feels like exploration rather than memorization.
            </p>

          </div>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 text-left">
            <span className="text-green-600">04</span> Mission
          </h2>

          <div className="bg-green-50 shadow-md rounded-xl p-5 md:p-6 border border-green-200
                          transition-all duration-300 ease-in-out
                          hover:-translate-y-2 hover:bg-green-100 hover:shadow-xl hover:scale-[1.02]">

            <p className="text-gray-700 text-sm md:text-base text-left leading-relaxed">
              To develop an engaging AR-based application that enhances understanding of animals through 3D visualization,
              audio effects, and real-time interaction. Our mission is to bridge the gap between theoretical learning and
              practical experience by allowing users to interact with animals virtually. We aim to improve curiosity,
              creativity, and learning retention among students through immersive technology.
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}