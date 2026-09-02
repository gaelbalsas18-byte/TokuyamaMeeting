"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const programa = [
  {
    dia: "Día 1 - Tokuyama-Fest",
    fecha: "Lunes 08 Junio 2026",
    imagen: "/Programa/Dia1.jpg",
    actividades: [
      { hora: "07:00 - 09:00", titulo: "Registro" },
      { hora: "09:00 - 09:30", titulo: "Inauguración" },
      { hora: "09:30 - 10:30", titulo: "Conferencia - Dr. Yoshitaka Nijitomi - Omnichroma, la solución versátil para múltiples casos"},
      { hora: "10:30 - 11:30", titulo: "Conferencia - Dr. Hugo Cornejo - El rol de los adhesivos universales en la práctica odontológica actual" },
      { hora: "11:30 - 12:20", titulo: "Coffee - Break" },
      { hora: "12:20 - 14:20", titulo: "Conferencia - Prof. Newton Fahl - El Arte y la Ciencia de las Obras Maestras en Composite Anterior" },
      { hora: "14:20 - 15:00", titulo: "Coffee - Break" },
      { hora: "15:00 - 16:00", titulo: "Dr. Noboru Takahashi - “Optimización de restauraciones posteriores (estética y función en equilibrio)" },
      { hora: "16:00 - 17:00", titulo: "Conferencia - Clínica Supreme - Cementación de Carillas de Porcelana con Protocolo de Cementación" },
      { hora: "17:00 - 18:00", titulo: "Conferencia - Dr. Mauricio Madera - La versatilidad de la resina compuesta en el sector anterior"}
    ],
  },

   {
    dia: "Día 2 - Tokuyama-Fest",
    fecha: "Martes 09 Junio 2026",
    imagen: "/Programa/Dia2.jpg",
    actividades: [
      { hora: "08:00 - 09:00", titulo: "Registro" },
      { hora: "09:00 - 11:00", titulo: "Hands On - Prof. Newton Fahl “Combinando PCL y NLC para Restauraciones Estéticas Anteriores en Resinas Compuestas" },
      { hora: "11:00 - 11:30", titulo: "Coffee - Break" },
      { hora: "11:30 - 14:00", titulo: "Hands On - Prof. Newton Fahl “Combinando PCL y NLC para Restauraciones Estéticas Anteriores en Resinas Compuestas" },
      { hora: "14:00 - 15:30", titulo: "Comida" },
      { hora: "15:30 - 17:00", titulo: "Hands On - Prof. Newton Fahl “Combinando PCL y NLC para Restauraciones Estéticas Anteriores en Resinas Compuestas" },
      { hora: "17:00 - 17:30", titulo: "Coffee - Break" },
      { hora: "17:30 - 18:30", titulo: "Deliberación" },
      { hora: "18:30 - 19:00", titulo: "Clausura" },
      { hora: "19:00 - 19:30", titulo: "Salida" },
    ],
  },

  {
    dia: "Día 3 - Tokuyama-Fest",
    fecha: "Miercoles 10 Junio 2026",
    imagen: "/Programa/Dia3.jpg", 
    actividades: [
      { hora: "09:30 - 10:00", titulo: "Recepción" },
      { hora: "10:00 - 13:00", titulo: "Concurso" },
      { hora: "13:00 - 13:30", titulo: "Coffee - Break" },
      { hora: "13:30 - 15:00", titulo: "Concurso" },
      { hora: "15:00 - 16:00", titulo: "Deliberación" },
      { hora: "16:00 - 20:00", titulo: "Coctel" },
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
          Programa<span className="text-[#0cab63]">.</span>

          <div className="w-16 h-1 bg-[#0cab63] mx-auto mt-6 rounded-full" />

          
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
                    className={`rounded-3xl overflow-hidden border transition-all duration-300
                    ${isOpen ? "border-white bg-white/8" : "border-[#0cab63] bg-transparent"}
                    hover:border-[#0cab63] hover:bg-white/5
                  `}
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
                        className="text-[#0cab63] text-xl"
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
                              href="/MaterialT.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-6 py-2 border border-[#0cab63] text-black text-sm uppercase tracking-wide rounded-lg hover:bg-white hover:text-black transition-all"
                            >
                              Materiales
                            </a>
                            <a
                              href="/BasesT.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-6 py-2 border border-[#0cab63] text-black text-sm uppercase tracking-wide rounded-lg hover:bg-white hover:text-black transition-all"
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
