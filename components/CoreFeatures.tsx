"use client";

import TiltCard from "./TiltCard";

export default function CoreFeatures() {
  return (
    <section
      id="features"
      className="w-full flex flex-col gap-10 py-12 px-4 sm:px-6 bg-green-50 dark:bg-green-50"
    >

      {/* Title */}
      <div className="w-full md:w-[80%] mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-left">
          CORE FEATURES
        </h2>

        <p className="text-gray-600 mt-2 text-sm sm:text-base text-left leading-relaxed">
          Explore the key features that make safARi an interactive AR-based learning platform.
        </p>
      </div>

      {/* Container */}
      <div className="w-full md:w-[80%] mx-auto flex flex-col gap-8">

        {/* ROW 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <TiltCard>
            <div className="bg-white border border-green-200 shadow-md rounded-xl p-5 sm:p-6
              transition-all duration-300 ease-in-out
              hover:bg-green-100 hover:shadow-xl cursor-pointer
              active:scale-95">

              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                Image-Based AR Recognition
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                The app uses image recognition to scan animal images from the provided PDF.
                Once detected, it instantly overlays a corresponding 3D animal model in real-world environment.
              </p>

            </div>
          </TiltCard>

          <TiltCard>
            <div className="bg-white border border-green-200 shadow-md rounded-xl p-5 sm:p-6
              transition-all duration-300 ease-in-out
              hover:bg-green-100 hover:shadow-xl cursor-pointer
              active:scale-95">

              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                3D Animal Visualization
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                safARi displays realistic 3D animal models, allowing learners to see animals beyond flat images.
                This improves understanding of shape, size, and structure.
              </p>

            </div>
          </TiltCard>

          <TiltCard>
            <div className="bg-white border border-green-200 shadow-md rounded-xl p-5 sm:p-6
              transition-all duration-300 ease-in-out
              hover:bg-green-100 hover:shadow-xl cursor-pointer
              active:scale-95">

              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                Animated Animal Behavior
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                The 3D models include animations showing real animal movement and behavior,
                making learning more dynamic and engaging.
              </p>

            </div>
          </TiltCard>

        </div>

        {/* ROW 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-[66%] mx-auto">

          <TiltCard>
            <div className="bg-white border border-green-200 shadow-md rounded-xl p-5 sm:p-6
              transition-all duration-300 ease-in-out
              hover:bg-green-100 hover:shadow-xl cursor-pointer
              active:scale-95">

              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                Audio-Visual Learning Support
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Provides audio narration with information such as habitat, food habits,
                and characteristics for better understanding and retention.
              </p>

            </div>
          </TiltCard>

          <TiltCard>
            <div className="bg-white border border-green-200 shadow-md rounded-xl p-5 sm:p-6
              transition-all duration-300 ease-in-out
              hover:bg-green-100 hover:shadow-xl cursor-pointer
              active:scale-95">

              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                User-Controlled Rotation Feature
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Users can rotate 3D animal models along the Y-axis to view them from different angles,
                improving observation and learning.
              </p>

            </div>
          </TiltCard>

        </div>

      </div>
    </section>
  );
}