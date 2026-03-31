export default function Team() {
  return (
    <section
      id="team"
      className="w-full flex flex-col gap-10 py-12 px-4 sm:px-6"
    >

      {/* Title */}
      <div className="w-full md:w-[80%]">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-left">
          <span className="text-green-600">06</span> MEET THE DEVELOPERS
        </h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base text-left">
          The people behind the safARi AR learning experience.
        </p>
      </div>

      {/* 1st Row - Professor */}
      <div className="w-full flex justify-center">
        <div className="w-full md:w-[50%] bg-white border border-gray-200 shadow-md rounded-2xl p-5 sm:p-6
          transition-all duration-300 ease-in-out
          hover:bg-green-50 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]
          active:scale-95">

          <div className="flex flex-col items-center text-center">

            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-600 text-white flex items-center justify-center text-base sm:text-lg font-bold">
              PB
            </div>

            <h3 className="mt-4 text-base sm:text-lg font-semibold text-gray-800">
              Prof. Satish Bangal
            </h3>

            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Project Guide
            </p>

            <p className="text-gray-700 text-xs sm:text-sm mt-3 leading-relaxed">
              Provided academic guidance and technical direction throughout the project. Reviewed the system design and helped refine the implementation strategy.
            </p>

          </div>
        </div>
      </div>

      {/* 2nd Row */}
      <div className="w-full md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* AR Developer */}
        <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-5 sm:p-6
          transition-all duration-300 ease-in-out
          hover:bg-green-50 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]
          active:scale-95">

          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-600 text-white flex items-center justify-center text-base sm:text-lg font-bold">
            DK
          </div>

          <h3 className="mt-4 text-base sm:text-lg font-semibold text-gray-800">
            Miss. Devashree Kinjale
          </h3>

          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            AR Developer
          </p>

          <p className="text-gray-700 text-xs sm:text-sm mt-3 leading-relaxed">
Developed the Augmented Reality features of the application. Implemented image recognition, integrated 3D models and animations, and ensured smooth interaction and functionality within the AR environment.          </p>
        </div>

        {/* Web Developer */}
        <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-5 sm:p-6
          transition-all duration-300 ease-in-out
          hover:bg-green-50 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]
          active:scale-95">

          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-600 text-white flex items-center justify-center text-base sm:text-lg font-bold">
            SK
          </div>

          <h3 className="mt-4 text-base sm:text-lg font-semibold text-gray-800">
            Miss. Sakshi Koshti
          </h3>

          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Web Developer
          </p>

          <p className="text-gray-700 text-xs sm:text-sm mt-3 leading-relaxed">
Designed and developed the project website and user interfaces. Built the frontend using modern web technologies and ensured the platform was responsive, interactive, and easy to navigate.          </p>
        </div>

      </div>

      {/* 3rd Row */}
      <div className="w-full md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* UI/UX */}
        <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-5 sm:p-6
          transition-all duration-300 ease-in-out
          hover:bg-green-50 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]
          active:scale-95">

          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-600 text-white flex items-center justify-center text-base sm:text-lg font-bold">
            SK
          </div>

          <h3 className="mt-4 text-base sm:text-lg font-semibold text-gray-800">
            Miss. Shweta Kokate
          </h3>

          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            UI/UX Designer
          </p>

          <p className="text-gray-700 text-xs sm:text-sm mt-3 leading-relaxed">
Designed the animal cards and visual assets used in the application. Created and managed audio narration and content to ensure an engaging and user-friendly learning experience.          </p>
        </div>

        {/* Documentation */}
        <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-5 sm:p-6
          transition-all duration-300 ease-in-out
          hover:bg-green-50 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]
          active:scale-95">

          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-600 text-white flex items-center justify-center text-base sm:text-lg font-bold">
            KK
          </div>

          <h3 className="mt-4 text-base sm:text-lg font-semibold text-gray-800">
            Miss. Kartiki Korade
          </h3>

          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Documentation Manager
          </p>

          <p className="text-gray-700 text-xs sm:text-sm mt-3 leading-relaxed">
Prepared and maintained the project documentation. Organised technical explanations, research references, and reports to clearly describe the system architecture, methodology, and project outcomes.          </p>
        </div>

      </div>

    </section>
  );
}