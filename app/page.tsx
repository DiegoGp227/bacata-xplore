import Image from "next/image";
import DestinationsSlider from "./components/DestinationsSlider";
import ContactForm from "./components/ContactForm";
import HeroSecction from "./components/organism/HeroSecction";

const services = [
  {
    icon: "🚶",
    name: "Tour a pie por Bogotá",
    description:
      "Destino sujeto al humor del guía. El recorrido oficial no existe. Cada tour es una obra de improvisación urbana.",
  },
  {
    icon: "🌙",
    name: "Tour nocturno",
    description:
      "Itinerario confidencial. No por misterio — es que Diego lo decide en el camino. Resultados: imprevisibles. Memorias: garantizadas.",
  },
  {
    icon: "📸",
    name: "Tour fotográfico",
    description:
      "Resultados varían. Diego señala las cosas. Tú las fotografías. Si quedas bien en la foto es mérito tuyo.",
  },
  {
    icon: "🍽️",
    name: "Tour gastronómico",
    description:
      "El guía come primero. Para verificar la calidad. Es protocolo de seguridad, no gula. Técnicamente.",
  },
];

const testimonials = [
  {
    quote: "Llegué como turista, no sé bien cómo terminé.",
    name: "María G.",
    stars: 5,
  },
  {
    quote: "El guía no sabía dónde estábamos. Fue perfecto.",
    name: "Anónimo",
    stars: 5,
  },
  {
    quote: "Advertencia: sí genera dependencia.",
    name: "Laura M.",
    stars: 5,
  },
  {
    quote: "Vine por un día, me quedé una semana. Diego no se disculpó.",
    name: "Carlos R.",
    stars: 5,
  },
];

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* ─── HERO ─── */}
      <HeroSecction />

      {/* ─── SOBRE EL GUÍA ─── */}
      <section id="about" className="py-20 sm:py-28 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
                  <Image
                    src="/Diego photo.jpeg"
                    alt="Diego — Guía de Diego's Travels"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#f7a012] text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg">
                  CEO & Único Empleado
                </div>
              </div>
            </div>

            <div>
              <span className="text-[#f7a012] font-semibold text-sm uppercase tracking-widest">
                Sobre el guía
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-6">
                Diego. Guía. Bogotano.
                <br />
                <span className="text-[#f7a012]">Relativamente confiable.</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                Diego lleva toda su vida en Bogotá, lo que técnicamente lo
                convierte en el mayor experto de la sala. Ha recorrido la ciudad
                de norte a sur, de oriente a occidente, y una vez hasta en
                diagonal. Conoce los mejores restaurantes, los peores atajos y
                la historia de cada barrio (con algunas omisiones creativas).
              </p>

              <div className="space-y-3 mb-8">
                <h3 className="font-bold text-gray-800 dark:text-gray-200 text-sm uppercase tracking-wider">
                  Credenciales verificadas*
                </h3>
                {[
                  "🎓 Diplomado en Turismo Intuitivo — Universidad de la Experiencia",
                  "🏅 3 años siendo bogotano activo",
                  "📍 Ha visitado más del 60% de Bogotá (estimado propio)",
                  "🌟 Premio al guía más entusiasta · Autoentregado 2024",
                ].map((c) => (
                  <p
                    key={c}
                    className="text-gray-600 dark:text-gray-400 text-sm"
                  >
                    {c}
                  </p>
                ))}
                <p className="text-gray-400 dark:text-gray-600 text-xs italic">
                  *algunas credenciales pueden ser de carácter aspiracional
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-800 dark:text-gray-200 text-sm uppercase tracking-wider mb-3">
                  Habilidades cuestionables
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Orientación (parcial)",
                    "Historia inventada con confianza",
                    "Recomendaciones gastronómicas",
                    "Improvisar itinerarios",
                    "Entusiasmo ilimitado",
                  ].map((s) => (
                    <span
                      key={s}
                      className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICIOS ─── */}
      <section
        id="services"
        className="py-20 sm:py-28 bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#f7a012] font-semibold text-sm uppercase tracking-widest">
              Lo que ofrecemos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">
              Servicios premium*
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-lg mx-auto">
              Cada tour tiene nombre serio y descripción honesta.
            </p>
            <p className="text-gray-400 dark:text-gray-600 text-xs mt-1 italic">
              *premium en espíritu
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.name}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:border-[#f7a012] dark:hover:border-[#f7a012] hover:shadow-md transition-all group"
              >
                <span className="text-4xl mb-4 block">{s.icon}</span>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#f7a012] transition-colors">
                  {s.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SLIDER DESTINOS ─── */}
      <section
        id="destinations"
        className="py-20 sm:py-28 bg-white dark:bg-gray-950"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#f7a012] font-semibold text-sm uppercase tracking-widest">
              Dónde te lleva Diego
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">
              Destinos preferidos
              <br />
              <span className="text-[#f7a012]">por el guía</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-lg mx-auto">
              Seleccionados con criterio propio. Ejecutados con entusiasmo.
            </p>
          </div>
          <DestinationsSlider />
        </div>
      </section>

      {/* ─── ADVERTENCIAS LEGALES ─── */}
      <section className="py-20 sm:py-28 bg-gray-950 dark:bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[#f7a012] font-semibold text-sm uppercase tracking-widest">
              Importante
            </span>
            <h2 className="text-3xl font-bold text-white mt-2">
              Términos & Condiciones
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Favor leer antes de contratar. O después. O nunca.
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-800 text-xs leading-relaxed space-y-3 text-gray-400">
            {[
              "Diego's Travels no se responsabiliza por destinos inesperados, cambios de plan de última hora ni por la sensación general de «¿dónde estamos?».",
              "Toda información histórica es de carácter orientativo. Fuentes consultadas: Wikipedia, un señor en el parque, intuición, y un podcast escuchado a medias.",
              "Los horarios son aproximados. Si el tour inicia tarde, es porque Diego estaba «preparando el recorrido».",
              "El tour gastronómico incluye al guía probando todo primero. Esto es protocolo de seguridad y no está sujeto a negociación.",
              "Al contratar este servicio, el cliente acepta que «perderse» es un feature, no un bug.",
            ].map((text, i) => (
              <p key={i}>
                <strong className="text-gray-300">{i + 1}.</strong> {text}
              </p>
            ))}
            <div className="border-t border-gray-800 pt-4 mt-4">
              <p className="text-gray-500">
                Firmado:{" "}
                <strong className="text-gray-300">
                  Diego — CEO, CFO, Guía Principal y Único Empleado
                </strong>
              </p>
              <p className="text-gray-700 mt-1">
                Bogotá · Todos los derechos reservados, especialmente el de
                perderse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIOS ─── */}
      <section
        id="testimonials"
        className="py-20 sm:py-28 bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#f7a012] font-semibold text-sm uppercase tracking-widest">
              Lo que dicen
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">
              Testimonios reales*
            </h2>
            <p className="text-gray-400 dark:text-gray-600 text-xs mt-1 italic">
              *reales en el sentido de que alguien los escribió
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <div className="flex mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-[#f7a012] text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4 italic">
                  &quot;{t.quote}&quot;
                </p>
                <p className="text-gray-400 dark:text-gray-500 text-xs font-medium">
                  — {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACTO ─── */}
      <section
        id="contact"
        className="py-20 sm:py-28 bg-white dark:bg-gray-950"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[#f7a012] font-semibold text-sm uppercase tracking-widest">
              Hablemos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">
              ¿Listo para un tour que no
              <br />
              <span className="text-[#f7a012]">te garantizamos</span>
              <br />
              pero sí te prometemos?
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-4">
              Escríbele a Diego. Responde. A veces rápido.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-gray-950 dark:bg-black text-gray-500 py-10 border-t border-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div>
            <p className="text-white font-bold text-base">
              Diego&apos;s <span className="text-[#f7a012]">Travels</span>
            </p>
            <p className="text-gray-600 text-xs mt-1">travels.devdiego.work</p>
          </div>
          <p className="text-center text-xs text-gray-600">
            Bogotá · Todos los derechos reservados, especialmente el de
            perderse.
          </p>
          <p className="text-xs text-gray-700">Est. 2025</p>
        </div>
      </footer>
    </div>
  );
}
