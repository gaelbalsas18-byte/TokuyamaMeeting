
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden py-20"
      style={{
        background:
          "linear-gradient(270deg, #0f172a, #0cab63, #0fc573, #b6fadb)",
      }}
    >
      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 w-full">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* =========================
              COLUMNA IZQUIERDA - LOGO
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: -80, scale: 1.1 }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
              y: [0, -15, 0],
            }}
            transition={{
              opacity: { duration: 1 },
              x: { duration: 1 },
              scale: { duration: 1.5 },
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="
              relative
              mx-auto
              w-[90%]
              sm:w-[75%]
              md:w-full
              max-w-[650px]
            "
          >
            <Image
              src="/Logos/Meeting.png"
              alt="Tokuyama Fest"
              width={1600}
              height={1000}
              priority
              className="w-full h-auto"
            />
          </motion.div>


          {/* =========================
              COLUMNA DERECHA - TEXTO
          ========================== */}
          <div className="text-white text-center md:text-left">

            <motion.h2
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.3,
              }}
              className="
                text-base
                sm:text-lg
                leading-relaxed
              "
            >
              Tokuyama Internatioanl Meeting es un encuentro odontológico
              concebido como un puente entre México y el conocimiento global.
              Un espacio donde ponentes internacionales de alto nivel
              comparten su experiencia clínica, técnicas avanzadas y visión
              profesional con la comunidad odontológica, fomentando el
              intercambio de ideas y aprendizajes que trascienden la práctica
              clínica.

              <br /><br />

              Más que un evento, Tokuyama Internatioanl Meeting es una
              plataforma para conectar con líderes internacionales, fortalecer
              relaciones profesionales y abrir oportunidades reales de
              crecimiento y colaboración más allá de nuestras fronteras.

              <br /><br />

              Un punto de encuentro que impulsa una comunidad global guiada
              por la excelencia, la innovación y la evolución constante de la
              odontología.
            </motion.h2>


            {/* =========================
                BOTÓN
            ========================== */}
            <motion.a
              href="https://wa.me/525568022536?text=Hola%20quiero%20información%20sobre%20las%20entradas%20al%20Tokuyama%20Fest"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.9,
                duration: 0.8,
              }}
              className="
                inline-block
                mt-8
                px-8
                py-4
                border
                border-white
                tracking-wide
                uppercase
                text-base
                sm:text-lg
                hover:bg-white
                hover:text-black
                transition-all
                duration-300
              "
            >
              Solicitar Información
            </motion.a>

          </div>

        </div>
      </div>
    </section>
  );
}
