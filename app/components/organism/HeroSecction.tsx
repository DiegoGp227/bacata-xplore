import { destPreview } from "@/src/data/data";
import Image from "next/image";

export default function HeroSecction() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-gray-950 overflow-hidden pt-16">
      {/* Bogotá background photo */}
      <Image
        src="/Bogota 1.jpeg"
        alt="Bogotá"
        fill
        className="object-cover object-center opacity-40"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-gray-950/20 via-gray-950/70 to-gray-950" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-gray-400 text-xs font-medium px-4 py-2 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f7a012] animate-pulse" />
          Bogotá, Colombia · Agencia activa desde 2025
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6 max-w-5xl">
          No nos perdemos.
          <br />
          <span className="text-[#f7a012]">
            Descubrimos destinos inesperados.
          </span>
          <br />
          <span className="text-gray-500 text-4xl sm:text-5xl md:text-6xl font-normal">
            (más o menos)
          </span>
        </h1>

        <p className="text-gray-400 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed">
          Tours a cualquier parte del mundo. Sujeto a disponibilidad
          presupuestal del guia y al espacio mental que tenga el mismo para
          inventarse cuaquier pendejada.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-[#f7a012] hover:bg-[#e09010] text-white font-bold px-8 py-4 rounded-full text-lg transition-colors"
          >
            Solicitar tour
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#destinations"
            className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-[#f7a012]/50 text-gray-300 hover:text-white px-8 py-4 rounded-full text-lg transition-all"
          >
            Ver destinos
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 text-center mb-16">
          {[
            { value: "∞", label: "destinos activos" },
            { value: "1", label: "guía disponible" },
            { value: "∞", label: "historias inventadas" },
            { value: "0", label: "garantías de exito" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl sm:text-4xl font-bold text-[#f7a012]">
                {s.value}
              </p>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Destination strip */}
      <div className="relative z-10 border-t border-white/5 bg-white/2 px-4 py-5">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3 sm:gap-4">
          {destPreview.map((d) => (
            <a
              key={d.name}
              href="#destinations"
              className="flex items-center gap-2 bg-white/5 hover:bg-[#f7a012]/10 border border-white/10 hover:border-[#f7a012]/40 text-gray-400 hover:text-[#f7a012] px-4 py-2 rounded-full text-sm font-medium transition-all"
            >
              <span>{d.emoji}</span>
              {d.name}
            </a>
          ))}
        </div>
        <p className="text-center text-gray-700 text-xs mt-3">
          Próximas paradas — clic para explorar
        </p>
      </div>
    </section>
  );
}
