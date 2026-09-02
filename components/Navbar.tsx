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
            "linear-gradient(270deg, #0f172a, #0cab63, #0fc573, #b6fadb)",
          backgroundSize: "600% 600%",
        }}
        animate={{
          backgroundPosition: ["10% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      />

      {/* CONTENEDOR */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">

        {/* LOGOS (MISMA ESTRUCTURA) */}
        <div className="flex items-center gap-2">
            <Image
              src="/Logos/BalsasTrans.png"
              alt="Balsas Dental"
              width={60}
              height={45}
              priority
            />

            <div className="translate-y-[10px]">
              <Image
                src="/Logos/Tokuyamat.png"
                alt="Tokuyama Fest"
                width={140}
                height={90}
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
