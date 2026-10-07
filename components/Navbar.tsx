"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 80) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur border-b border-white/20"
    >
      {/* GRADIENTE */}
      <motion.div
        className="absolute inset-0 opacity-95"
        style={{
          background:
            "linear-gradient(270deg, #ad2ae6, #b710ff, #f89b30eb, #f89b30eb, #f2ecf5)",
          backgroundSize: "600% 600%",
        }}
        animate={{
          backgroundPosition: ["10% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      />

      {/* CONTENEDOR */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">

        {/* LOGOS (MISMA ESTRUCTURA) */}
        <div className="flex items-center gap-2 md:translate-x-25 md:translate-y-[3px]">
            <Image
              src="/Logos/TokuyamaB.png"
              alt="Tokuyama"
              width={180}
              height={120}
              priority
            />

            <div className="translate-y-[1px] md:translate-x-160">
              <Image
                src="/Logos/Blanco.png"
                alt="Logo Balsas"
                width={90}
                height={45}
                priority
              />
            </div>
          </div>

        {/* MENU DESKTOP (IGUAL) */}
        <div className="hidden md:flex gap-16 text-white absolute left-1/2 -translate-x-1/2">
          <a href="#ponentes" className="font-semibold hover:opacity-80">PONENTES</a>
          <a href="#programa" className="font-semibold hover:opacity-80">PROGRAMA</a>
          <a href="#ubicacion" className="font-semibold hover:opacity-80">UBICACIÓN</a>
          <a href="#registro" className="font-semibold hover:opacity-80">REGISTRO</a>
        </div>

        {/* BOTÓN MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black/80 backdrop-blur text-white px-6 py-6 space-y-4"
        >
          <a onClick={() => setOpen(false)} href="#ponentes" className="block">PONENTES</a>
          <a onClick={() => setOpen(false)} href="#programa" className="block">PROGRAMA</a>
          <a onClick={() => setOpen(false)} href="#ubicacion" className="block">UBICACIÓN</a>
          <a onClick={() => setOpen(false)} href="#registro" className="block">REGISTRO</a>
        </motion.div>
      )}
    </motion.nav>
  );
}
