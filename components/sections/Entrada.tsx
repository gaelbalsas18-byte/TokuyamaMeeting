"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-[120vh] relative flex items-center justify-center overflow-hidden">

      {/* Background */}
      <Image
        src="/logos/Inicio 2.jpg"
        alt="Tokuyama Fest"
        fill
        priority
        className="object-cover object-top scale-100"
      />

      {/* Overlay para legibilidad */}
      <div className="absolute inset-1" />

      {/* Contenido */}
      <div className="relative z-5 text-white text-center px-2 max-w-8xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 1.5 }}
           animate={{
            opacity: 1,
            scale: 0.9,
            y: [0, -15, 0],
          }}
          className="text-xs md:text-4xl leading-[1.55] md:leading-[1.62]"
        >
          El Tokuyama Fest es un evento odontológico diseñado para conectar la innovación con la práctica clínica,  
          donde los asistentes tienen la oportunidad de conocer y experimentar soluciones de vanguardia, 
          actualizarse mediante contenido educativo de alto nivel y compartir experiencias con especialistas en un entorno dinámico, 
          profesional y colaborativo.
        </motion.h3>
        {/* BOTÓN */}
        <motion.a
            href="https://wa.me/5215610115368?text=Hola%20quiero%20información%20sobre%20las%20entradas%20al%20Tokuyama%20Fest"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="inline-block mt-25 px-10 py-4 border border-white tracking-wide uppercase hover:bg-white hover:text-black transition-all duration-400 text-3xl"
          >
            Entrada
          </motion.a>
      </div>
    </section>
  );
}
