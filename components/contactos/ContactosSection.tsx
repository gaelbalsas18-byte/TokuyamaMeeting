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

  // ===== AUTOPLAY CADA 7s =====
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % CONTACTOS.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [isPaused])

  // ===== SWIPE =====
  const handleSwipe = (offsetX: number) => {
    if (offsetX > swipeConfidenceThreshold) {
      // Swipe derecha → siguiente
      setIndex((prev) => (prev + 1) % CONTACTOS.length)
    }

    if (offsetX < -swipeConfidenceThreshold) {
      // Swipe izquierda → anterior
      setIndex((prev) =>
        prev === 0 ? CONTACTOS.length - 1 : prev - 1
      )
    }
  }

  return (
    <section
      id="contacto"
      className="min-h-screen bg-white text-black px-6 md:px-10 py-24 flex flex-col items-center"
    >
      {/* ===== ENCABEZADO ===== */}
      <div className="text-center max-w-2xl mb-20">
        <h2 className="text-4xl font-semibold mb-4 text-black">
          Profesionales
          <span className="text-[#9333c2]">.</span>

          <div className="w-16 h-1 bg-[#9333c2] mx-auto mt-6 rounded-full" />
        </h2>

        <h3 className="text-sm uppercase tracking-widest text-neutral-400 font-semibold mb-3">
          Balsas x Tokuyama
        </h3>

        <p className="text-black text-lg">
          Aprende de expertos internacionales y eleva tu práctica profesional
          al siguiente nivel a través de conferencias, demostraciones y
          experiencias diseñadas para compartir conocimiento de vanguardia,
          combinando innovación, tecnología avanzada y materiales de clase
          mundial aplicados a la odontología moderna.
        </p>
      </div>

      {/* ================================================= */}
      {/* ===== TARJETA PRINCIPAL DEL PONENTE ============== */}
      {/* ================================================= */}

<div className="w-full max-w-6xl">
  <AnimatePresence mode="wait">
    <motion.div
      key={contactoActivo.id}
      className="
        relative
        w-full

        flex
        flex-col
        gap-4

        md:block
        md:h-[580px]

        cursor-grab
        active:cursor-grabbing
      "
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5 }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onDragStart={() => setIsPaused(true)}
      onDragEnd={(_, info) => {
        setIsPaused(false)
        handleSwipe(info.offset.x)
      }}
    >

      {/* ================================================= */}
      {/* ===== TARJETA DE IMAGEN ========================== */}
      {/* ================================================= */}

      <div
        className="
          relative
          w-full

          h-[420px]
          sm:h-[480px]

          rounded-3xl
          overflow-hidden
          shadow-2xl

          md:absolute
          md:inset-0
          md:h-full
        "
      >
       {/* ===== IMAGEN DESKTOP ===== */}

        <Image
          src={contactoActivo.imagen}
          alt={contactoActivo.nombre}
          fill
          priority
          className="hidden md:block object-cover object-center"
        />

        {/* ===== IMAGEN MOBILE ===== */}

        <Image
          src={contactoActivo.imagenMobile}
          alt={contactoActivo.nombre}
          fill
          priority
          className="block md:hidden object-cover object-center"
        />

        {/* Overlay solamente en desktop */}
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-black/10 via-transparent to-black/20" />
      </div>


      {/* ================================================= */}
      {/* ===== TARJETA DE INFORMACIÓN ==================== */}
      {/* ================================================= */}

      <motion.div
        key={`info-${contactoActivo.id}`}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.15,
        }}
        className="
          relative

          w-full
          min-h-[280px]

          rounded-3xl

          border
          border-neutral-200

          bg-white

          px-6
          py-8

          flex
          flex-col
          justify-center
          items-center

          text-black

          shadow-xl

          md:absolute
          md:right-14
          md:top-1/2
          md:-translate-y-1/2

          md:w-[400px]
          lg:w-[430px]

          md:min-h-[250px]
          md:h-auto

          md:border-white/80
          md:bg-transparent
          md:backdrop-blur-[2px]

          md:text-white
          md:shadow-none
        "
      >

        {/* ===== LOGO ===== */}

        <Image
          src="/Logos/Blanco.png"
          alt="Balsas Dental"
          width={100}
          height={22}
          className="object-contain mb-4"
        />


        {/* ===== NOMBRE ===== */}

        <h3 className="text-2xl md:text-2xl font-semibold text-center mb-2">
          {contactoActivo.nombre}
        </h3>


        {/* ===== PUESTO ===== */}

        <p
          className="
            text-sm
            uppercase
            tracking-widest
            text-neutral-500
            md:text-white/80
            text-center
            mb-3
          "
        >
          {contactoActivo.puesto}
        </p>


        {/* ===== DESCRIPCIÓN ===== */}

       <p
  className="
    text-sm
    leading-relaxed
    text-neutral-600
    md:text-white/90

    text-center

    max-w-[340px]
  "
>
  {contactoActivo.descripcion}
</p>

      </motion.div>

    </motion.div>
  </AnimatePresence>
</div>



      {/* ===== INDICADORES ===== */}

      <div className="flex gap-2 mt-8">
        {CONTACTOS.map((contacto, i) => (
          <button
            key={contacto.id}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index
                ? "w-8 bg-[#0cab63]"
                : "w-2 bg-neutral-300"
            }`}
            aria-label={`Ver a ${contacto.nombre}`}
          />
        ))}
      </div>
    </section>
  )
}