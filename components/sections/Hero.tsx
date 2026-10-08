"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const [parrafoActivo, setParrafoActivo] = useState(0);

  const parrafos = [
    `Tokuyama International Meeting es un encuentro odontológico
    concebido como un puente entre México y el conocimiento global.
    Un espacio donde ponentes internacionales de alto nivel
    comparten su experiencia clínica, técnicas avanzadas y visión
    profesional con la comunidad odontológica, fomentando el
    intercambio de ideas y aprendizajes que trascienden la práctica
    clínica.`,

    `Más que un evento, Tokuyama International Meeting es una
    plataforma para conectar con líderes internacionales, fortalecer
    relaciones profesionales y abrir oportunidades reales de
    crecimiento y colaboración más allá de nuestras fronteras.`,

    `Un punto de encuentro que impulsa una comunidad global guiada
    por la excelencia, la innovación y la evolución constante de la
    odontología.`,
  ];

  /*
   * =========================
   * CAMBIO AUTOMÁTICO
   * =========================
   */
  useEffect(() => {
    const intervalo = setInterval(() => {
      setParrafoActivo((prev) => (prev + 1) % parrafos.length);
    }, 8000);

    return () => clearInterval(intervalo);
  }, [parrafos.length]);

  return (
    <section
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        py-10
        sm:py-14
        md:py-20
      "
    >
      {/* =========================
          IMAGEN DE FONDO
      ========================== */}

      <div className="absolute inset-0">
        <Image
          src="/TIM Chihuahua/Pie.jpg"
          alt=""
          fill
          priority
          className="
            object-cover
            object-center
          "
        />
      </div>

      {/* =========================
          CONTENIDO PRINCIPAL
      ========================== */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          w-full
        "
      >
        <div className="flex flex-col items-center w-full">

          {/* =========================
              LOGO
          ========================== */}

          <div className="w-full flex justify-center px-4">
            <Image
              src="/Logos/TIM.png"
              alt="Tokuyama International Meeting"
              width={480}
              height={220}
              priority
              className="
                w-full
                max-w-[340px]
                sm:max-w-[400px]
                md:max-w-[460px]
                lg:max-w-[480px]
                h-auto
              "
            />
          </div>

          {/* =========================
              CONTENEDOR DEL TEXTO
          ========================== */}

          <div
            className="
              relative
              text-white
              text-center
              max-w-3xl
              mx-auto
              w-full

              mt-4
              sm:mt-5
              md:mt-7

              pb-8
            "
          >

            {/* =========================
                ÁREA DEL TEXTO
            ========================== */}

            <div
              className="
                relative

                min-h-[200px]
                sm:min-h-[180px]
                md:min-h-[160px]

                flex
                items-center
                justify-center
              "
            >
              <AnimatePresence mode="wait">

                <motion.p
                  key={parrafoActivo}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    inset-x-0

                    text-[13px]
                    sm:text-[14px]
                    md:text-lg

                    leading-6
                    sm:leading-6
                    md:leading-relaxed

                    drop-shadow-lg

                    px-2
                    sm:px-4
                    md:px-0
                  "
                >
                  {parrafos[parrafoActivo]}
                </motion.p>

              </AnimatePresence>
            </div>

            {/* =========================
                INDICADORES
            ========================== */}

            <div
              className="
                flex
                justify-center
                items-center
                gap-2
                mt-2
              "
            >
              {parrafos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setParrafoActivo(index)}
                  aria-label={`Mostrar información ${index + 1}`}
                  className={`
                    h-2
                    rounded-full
                    transition-all
                    duration-500

                    ${
                      index === parrafoActivo
                        ? "w-7 bg-white"
                        : "w-2 bg-white/50"
                    }
                  `}
                />
              ))}
            </div>

            {/* =========================
                BOTÓN
            ========================== */}

            <motion.a
              href="https://wa.me/525564143107?text=Hola%20quiero%20información%20sobre%20las%20entradas%20al%20Tokuyama%20International%20Meeting"
              target="_blank"
              rel="noopener noreferrer"
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.9,
                duration: 0.8,
              }}
              className="
                inline-block

                mt-5
                sm:mt-6
                md:mt-7

                px-6
                sm:px-8

                py-3
                sm:py-4

                border
                border-white

                tracking-wide
                uppercase

                text-xs
                sm:text-sm
                md:text-lg

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