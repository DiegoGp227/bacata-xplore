"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

type FormValues = {
  name: string;
  email: string;
  destination: string;
  message: string;
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log(data);
    setSubmitted(true);
    reset();
  };

  const inputBase =
    "w-full rounded-xl border px-4 py-3 text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 outline-none transition focus:ring-2 focus:ring-[#f7a012]";

  if (submitted) {
    return (
      <div className="bg-[#f7a012]/10 border border-[#f7a012] rounded-2xl p-8 text-center">
        <span className="text-5xl">🗺️</span>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-4">
          ¡Solicitud recibida!
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Diego la revisará cuando vuelva de su &quot;investigación de campo&quot;. Tiempo
          estimado de respuesta: entre 5 minutos y 3 días hábiles.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-[#f7a012] underline text-sm cursor-pointer"
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Tu nombre <span className="text-[#f7a012]">*</span>
        </label>
        <input
          {...register("name", { required: "¿Sin nombre? Misterioso, pero no." })}
          placeholder="Ej: María G."
          className={`${inputBase} ${
            errors.name
              ? "border-red-400 bg-red-50 dark:bg-red-900/20"
              : "border-gray-300 dark:border-gray-600"
          }`}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Email <span className="text-[#f7a012]">*</span>
        </label>
        <input
          type="email"
          {...register("email", {
            required: "Necesitamos un email. O dos, por si acaso.",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Eso no parece un email. Inténtalo de nuevo.",
            },
          })}
          placeholder="tu@email.com"
          className={`${inputBase} ${
            errors.email
              ? "border-red-400 bg-red-50 dark:bg-red-900/20"
              : "border-gray-300 dark:border-gray-600"
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Destination */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          ¿Qué tour te interesa?
        </label>
        <select
          {...register("destination")}
          className={`${inputBase} border-gray-300 dark:border-gray-600`}
        >
          <option value="">Selecciona (si tienes idea)</option>
          <option value="pie">Tour a pie por Bogotá</option>
          <option value="nocturno">Tour nocturno (itinerario confidencial)</option>
          <option value="fotografico">Tour fotográfico (resultados varían)</option>
          <option value="gastronomico">Tour gastronómico (el guía come primero)</option>
          <option value="sorpresa">Sorpréndame (alto riesgo)</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Cuéntame algo <span className="text-[#f7a012]">*</span>
        </label>
        <textarea
          {...register("message", {
            required: "Algo tienes que decir, ¿no?",
            minLength: { value: 10, message: "Al menos 10 caracteres. Diego merece eso." },
          })}
          rows={4}
          placeholder="¿De dónde vienes? ¿Qué buscas? ¿Estás seguro de esto?"
          className={`${inputBase} resize-none ${
            errors.message
              ? "border-red-400 bg-red-50 dark:bg-red-900/20"
              : "border-gray-300 dark:border-gray-600"
          }`}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#f7a012] hover:bg-[#e09010] disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-colors cursor-pointer text-lg"
      >
        {isSubmitting ? "Enviando al guía..." : "Contactar al guía"}
      </button>

      <p className="text-center text-gray-400 dark:text-gray-600 text-xs">
        Al enviar este formulario aceptas que Diego puede no saber la respuesta. Es parte del
        servicio.
      </p>
    </form>
  );
}
