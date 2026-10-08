"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const programa = [
  {
    dia: "Día 1 - Tokuyama-Meeting",
    fecha: "04 Febrero 2027",
    imagen: "/Programa/Dia1.jpg",
    actividades: [
      { hora: "08:00 - 09:00", titulo: "Registro" },
      { hora: "09:00 - 10:00", titulo: "Conferencia - Dr. Yoshitaka Nijitomi" },
      { hora: "10:00 - 11:00", titulo: "Conferencia - Dr. Andres Curra - Posteriores: claves para restauraciones directas y predictivas"},
      { hora: "11:00 - 11:30", titulo: "Coffee - Break" },
      { hora: "11:30 - 12:30", titulo: "Conferencia - Dr. Rafael Plascencia - Resina de inyección multilayer con caracterización estética interna " },
      { hora: "12:30 - 14:30", titulo: "Coffee - Break" },
      { hora: "14:30 - 15:30", titulo: "Conferencia - Dr. Johan Figueira - Rehabilitaciones completas con cerámica: desde el prototipo de larga durabilidad hasta la sonrisa final"},
      { hora: "15:30 - 16:00", titulo: "Coffee - Break" },
      { hora: "16:00 - 17:30", titulo: "Conferencia - Dr. Thiago Ottoboni" },
    ],
  },

  {
    dia: "Día 2 - Tokuyama-Meeting",
    fecha: "05 Febrero 2027",
    imagen: "/Programa/Dia3.jpg",
    actividades: [
      { hora: "08:00 - 09:00", titulo: "Registro" },
      { hora: "09:00 - 11:00", titulo: "Hands On - Dr. Thiago Ottoboni “Práctica de carillas estratificadas" },
      { hora: "11:00 - 11:30", titulo: "Coffee - Break" },
      { hora: "11:30 - 14:00", titulo: "Hands On - Dr. Thiago Ottoboni “Práctica de carillas estratificadas" },
      { hora: "14:00 - 15:00", titulo: "Comida" },
      { hora: "15:00 - 17:00", titulo: "Hands On - Dr. Thiago Ottoboni “Práctica de carillas estratificadas" },
      { hora: "17:00 - 18:30", titulo: "Deliberación" },
      { hora: "18:30 - 19:00", titulo: "Clausura" },
    ],
  },
];

export default function Programa() {
  const [activo, setActivo] = useState<number | null>(null);
  return (
    <section id="programa" className="relative py-32 px-6 overflow-hidden bg-white">

        {/* Overlay */}
        <div className="absolute inset-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* TÍTULO */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-black text-center"
        >
          Programa<span className="text-[#9333c2]">.</span>

          <div className="w-16 h-1 bg-[#9333c2] mx-auto mt-6 rounded-full" />
  
        </motion.h2>

        <h3 className="text-sm uppercase tracking-widest text-neutral-400 font-semibold text-center mt-6">
          Balsas x Tokuyama
        </h3>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 max-w-6xl md:text-base text-center text-black mx-auto text-base "
        >
          Aprende de expertos internacionales y lleva tu práctica al siguiente nivel
          con tecnología y materiales de clase mundial.
        </motion.h2>

        {/* CONTENIDO */}

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">

          {/* LISTA PROGRAMA */}

              <div className="lg:max-w-lg">
                <div className="space-y-8">
                  {programa.map((dia, index) => {
                    const isOpen = activo === index;

                    return (
                      <motion.div
                        key={index}
                        layout
                        className={`relative rounded-3xl overflow-hidden border transition-all duration-300
                          ${
                            isOpen
                              ? "border-white"
                              : "border-[#9333c2] bg-transparent"
                          }
                          hover:border-[#9333c2]
                        `}
                        animate={{
                          backgroundPosition: isOpen ? ["0% 30%", "90% 60%", "0% 50%"] : "0% 50%",
                        }}
                        transition={{
                          backgroundPosition: {
                            duration: 6,
                            repeat: isOpen ? Infinity : 0,
                            ease: "linear",
                          },
                        }}
                        style={
                          isOpen
                            ? {
                                backgroundImage:
                                  "linear-gradient(120deg,  #f89b30, #ffffff, #e8d5b5, #ffffff, #d35cee6b, #f89b30ab, #ffffff, #e8d5b5)",
                                backgroundSize: "300% 300%",
                              }
                            : undefined
                        }
                      >
                        <button
                          onClick={() => setActivo(activo === index ? null : index)}
                          className="w-full flex justify-between items-center px-4 py-5 text-left"
                        >
                          <div>
                            <h3 className="text-2xl font-semibold text-black">
                              {dia.dia}
                            </h3>

                            <p className="text-1xl text-black/100">
                              {dia.fecha}
                            </p>
                          </div>

                          <motion.span
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-[#f89b30eb] text-xl"
                          >
                            ▼
                          </motion.span>
                        </button>

                        <AnimatePresence>

                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4 }}
                              className="px-6 pb-6"
                            >
                              <ul className="space-y-3">
                                {dia.actividades.map((act, i) => (
                                  <li
                                    key={i}
                                    className="grid grid-cols-[110px_1fr] md:grid-cols-[130px_1fr] gap-4 text-black/90"
                                  >
                                    <span className="font-mono text-black text-sm md:text-base text-right tracking-wide">
                                      {act.hora}
                                    </span>

                                    <span className="text-sm md:text-lg leading-relaxed">
                                      {act.titulo}
                                    </span>
                                  </li>
                                ))}
                              </ul>

                              {/* BOTONES SOLO DÍA 2 Y 3 */}
                              {index > 0 && (
                                <div className="mt-6 flex gap-4">
                                  <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2 border border-[#9333c2] text-black text-sm uppercase tracking-wide rounded-lg hover:bg-white hover:text-black transition-all"
                                  >
                                    Materiales
                                  </a>

                                  <a
                                    href="/BASES_TIM.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2 border border-[#9333c2] text-black text-sm uppercase tracking-wide rounded-lg hover:bg-white hover:text-black transition-all"
                                  >
                                    Bases
                                  </a>
                                </div>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

          {/* PANEL DE IMAGENES */}

            <div
              className="
                relative 
                w-[90vw] 
                max-w-[520px] 
                aspect-[5/6]
                rounded-3xl 
                overflow-hidden 
                shadow-xl
              "
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activo ?? "default"}
                  src={
                    activo === null
                      ? "/Programa/Dia4.png"
                      : programa[activo].imagen
                  }
                  alt="Programa Tokuyama Fest"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />

              </AnimatePresence>
              
            </div>

        </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-15 max-w-6xl md:text-base text-center text-black mx-auto text-base"
          >
              Vive una experiencia educativa única que te permitirá llevar tu práctica al siguiente nivel, descubriendo nuevas técnicas, materiales de última generación y soluciones innovadoras que están transformando el futuro de la odontología a nivel mundial.
        </motion.h2>
      </div>
    </section>
  );
}
