"use client";

import { useState } from "react";

const destinations = [
  {
    emoji: "🏛️",
    name: "La Candelaria",
    tag: "Destino #1 del guía",
    description:
      "El corazón histórico de Bogotá. Diego lo ha recorrido muchas veces y aún no sabe dónde queda el Museo del Oro exactamente, pero lo busca con mucho entusiasmo.",
    disclaimer: "⚠️ Itinerario sujeto a si Diego recuerda el camino.",
  },
  {
    emoji: "⛰️",
    name: "Monserrate",
    tag: "Ejercicio disfrazado de tour",
    description:
      "Subida a pie. Obligatoria. El teleférico existe pero Diego lo considera 'trampa'. Vista espectacular desde arriba — si hay tiempo antes de que cierren.",
    disclaimer: "⚠️ El guía descansa cada 47 escalones. Es parte del tour.",
  },
  {
    emoji: "🛍️",
    name: "Usaquén",
    tag: "Mercado de pulgas premium",
    description:
      "El mercado de pulgas de los domingos. Diego compra cosas que no necesita y tú cargas con el entusiasmo. Zona de brunch incluida si el guía tiene hambre.",
    disclaimer: "⚠️ No nos responsabilizamos por compras impulsivas.",
  },
  {
    emoji: "🎨",
    name: "La Macarena",
    tag: "Barrio artístico™",
    description:
      "Graffiti, restaurantes y gatos callejeros. Diego conoce exactamente dos restaurantes aquí. Ambos están en Google Maps. El tour incluye señalar el graffiti más grande.",
    disclaimer: "⚠️ Diego puede proponer 'conocer más' el barrio indefinidamente.",
  },
  {
    emoji: "🍖",
    name: "Andrés DC",
    tag: "Rumba con disclaimer",
    description:
      "La discoteca-restaurante más famosa de Colombia. Inicio garantizado. Desarrollo caótico. Final: por determinar. Diego baila bien según Diego.",
    disclaimer: "⚠️ El guía no responde mensajes después de las 10pm en este destino.",
  },
  {
    emoji: "🌽",
    name: "Paloquemao",
    tag: "Tour gastronómico nivel dios",
    description:
      "El mejor mercado de Bogotá según el guía. Chontaduro, frutas exóticas y el mejor sancocho del universo. Diego come primero para 'verificar la calidad'.",
    disclaimer: "⚠️ Llegada a las 6am. El guía llega a las 7:30am. Es normal.",
  },
];

export default function DestinationsSlider() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + destinations.length) % destinations.length);
  const next = () => setCurrent((c) => (c + 1) % destinations.length);

  const dest = destinations[current];

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-[#f7a012] px-6 sm:px-8 py-6 flex items-center gap-4">
          <span className="text-5xl">{dest.emoji}</span>
          <div>
            <p className="text-white/80 text-xs font-semibold uppercase tracking-widest">
              {dest.tag}
            </p>
            <h3 className="text-white text-2xl sm:text-3xl font-bold">{dest.name}</h3>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 sm:px-8 py-6">
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
            {dest.description}
          </p>
          <div className="mt-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3">
            <p className="text-gray-500 dark:text-gray-400 text-sm italic">{dest.disclaimer}</p>
          </div>
        </div>

        {/* Footer nav */}
        <div className="px-6 sm:px-8 pb-6 flex items-center justify-between">
          <button
            onClick={prev}
            className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 hover:text-[#f7a012] transition-colors font-medium text-sm cursor-pointer"
          >
            ← Anterior
          </button>

          <div className="flex gap-2">
            {destinations.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  i === current
                    ? "bg-[#f7a012] w-6"
                    : "bg-gray-300 dark:bg-gray-600 w-2"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 hover:text-[#f7a012] transition-colors font-medium text-sm cursor-pointer"
          >
            Siguiente →
          </button>
        </div>
      </div>

      <p className="text-center text-gray-400 dark:text-gray-600 text-sm mt-4">
        Destino {current + 1} de {destinations.length}
      </p>
    </div>
  );
}
