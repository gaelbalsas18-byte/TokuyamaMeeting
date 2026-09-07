"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { CONTACTOS } from "./ContactCard"

export default function ContactosSection() {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const contactoActivo = CONTACTOS[index]
  const swipeConfidenceThreshold = 100

  // ===== AUTOPLAY CADA 8s =====
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % CONTACTOS.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [isPaused])

            const handleSwipe = (offsetX: number) => {
            if (offsetX > swipeConfidenceThreshold) {
              // 👉 Swipe derecha → siguiente
              setIndex((prev) => (prev + 1) % CONTACTOS.length)
            }

            if (offsetX < -swipeConfidenceThreshold) {
              // 👈 Swipe izquierda → anterior
              setIndex((prev) =>
                prev === 0 ? CONTACTOS.length - 1 : prev - 1
              )
            }
          }
                            // ===== SWIPE =====
                          {/*  const handleSwipe = (offsetX: number) => {
                            if (offsetX > swipeConfidenceThreshold) {
                              // 👉 Swipe derecha → ANTERIOR
                              setIndex((prev) =>
                                prev === 0 ? CONTACTOS.length - 1 : prev - 1
                              )
                            }

                            if (offsetX < -swipeConfidenceThreshold) {
                              // 👈 Swipe izquierda → SIGUIENTE
                              setIndex((prev) => (prev + 1) % CONTACTOS.length)
                            }
                          }
                      */}

  return (
    <section
      id="contacto"
      className="min-h-screen bg-white text-black px-10 py-24 flex flex-col items-center"
    >
      {/* ===== ENCABEZADO ===== */}
      <div className="text-center max-w-2xl mb-20">
        <h2 className="text-4xl font-semibold mb-4 text-black">
          Profesionales<span className="text-[#0cab63]">.</span>

          <div className="w-16 h-1 bg-[#0cab63] mx-auto mt-6 rounded-full" />
        </h2>

        <h3 className="text-sm uppercase tracking-widest text-neutral-400 font-semibold mb-3">
          Balsas x Tokuyama
        </h3>

        <p className="text-black text-lg">
          Aprende de expertos internacionales y eleva tu práctica profesional al
          siguiente nivel a través de conferencias, demostraciones y experiencias
          diseñadas para compartir conocimiento de vanguardia, combinando
          innovación, tecnología avanzada y materiales de clase mundial aplicados
          a la odontología moderna.
        </p>
      </div>

      {/* ===== CONTENIDO ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl w-full">
        {/* ===== STACK DE TARJETAS ===== */}
        <div className="relative h-[420px] flex items-center justify-center">
          <AnimatePresence>
            {[0, 1, 2].map((i) => {
              const contact =
                CONTACTOS[(index + i) % CONTACTOS.length]

              return (
                <motion.div
                  key={contact.id}
                  className="absolute w-[280px] h-[380px] bg-white rounded-2xl shadow-xl overflow-hidden cursor-grab"
                  style={{ zIndex: 3 - i }}
                  initial={{ scale: 1 - i * 0.05, y: i * 14, opacity: 0 }}
                  animate={{ scale: 1 - i * 0.05, y: i * 14, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  drag={i === 0 ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  onDragStart={() => setIsPaused(true)}
                  onDragEnd={(_, info) => {
                    setIsPaused(false)
                    handleSwipe(info.offset.x)
                  }}
                >
                  <Image
                    src={contact.imagen}
                    alt={contact.nombre}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* ===== TARJETA INFO ===== */}

        <motion.div
          key={contactoActivo.id}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-[#0cab63] rounded-2xl shadow-lg p-8 flex flex-col justify-center items-center"
        >
          <Image
             src="/logos/BalsasTrans.png"
             alt="Logo"
             width={100}
             height={40}
          />
          <h3 className="text-2xl font-semibold mb-2 text-center text-white">
            {contactoActivo.nombre}
          </h3>
          <p className="text-white mb-6 text-center text-white">
            {contactoActivo.puesto}
          </p>
          <p className="text-white text-sm">
                <span className="font-medium">{contactoActivo.descripcion}</span>
          </p>
          
        </motion.div>

           {/*Aviso de privacidad*/}

      </div>
    </section>
  )
}
