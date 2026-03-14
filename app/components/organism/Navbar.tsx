import ThemeToggle from "../ThemeToggle";

export default function () {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <span className="text-xl font-bold text-gray-900 dark:text-white">
          Diego&apos;s <span className="text-[#f7a012]">Travels</span>
        </span>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-400">
          <a href="#about" className="hover:text-[#f7a012] transition-colors">
            El guía
          </a>
          <a
            href="#services"
            className="hover:text-[#f7a012] transition-colors"
          >
            Servicios
          </a>
          <a
            href="#destinations"
            className="hover:text-[#f7a012] transition-colors"
          >
            Destinos
          </a>
          <a
            href="#testimonials"
            className="hover:text-[#f7a012] transition-colors"
          >
            Testimonios
          </a>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="bg-[#f7a012] hover:bg-[#e09010] text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
          >
            Contactar
          </a>
        </div>
      </div>
    </nav>
  );
}
