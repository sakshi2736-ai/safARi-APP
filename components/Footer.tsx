export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-3 text-center">

        {/* Logo / Title */}
        <h2 className="text-xl sm:text-2xl font-bold tracking-wide">
          safARi
        </h2>

        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-400 max-w-md leading-relaxed">
          An AR-based educational app for learning about animals.
        </p>

        {/* Divider (small UI improvement) */}
        <div className="w-12 h-[2px] bg-green-600 rounded-full mt-1"></div>

        {/* Copyright */}
        <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
          © {new Date().getFullYear()} safARi. All rights reserved.
        </p>

      </div>
    </footer>
  );
}