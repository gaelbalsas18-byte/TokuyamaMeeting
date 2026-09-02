"use client";

import { motion } from "framer-motion";

export default function Ubicacion() {
  return (
    <section
      id="ubicacion"
      className="relative py-28 px-6 overflow-hidden bg-white"
    >
      <div className="relative max-w-5xl mx-auto text-center">

        {/* =========================
            TÍTULO
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h2 className="text-4xl md:text-4xl font-bold text-[#0f172a]">
            Ubicación<span className="text-[#0cab63]">.</span>
          </h2>

          <div className="w-16 h-1 bg-[#0cab63] mx-auto mt-6 rounded-full" />
        </motion.div>

           <h3 className="text-sm uppercase tracking-widest text-neutral-400 font-semibold text-center mt-6">
          Balsas x Tokuyama
        </h3>

        {/* =========================
            INFORMACIÓN
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12"
        >


          {/* DESCRIPCIÓN */}
          <div className="max-w-3xl mx-auto mt-6">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              El <strong className="text-[#0f172a]">Tokuyama International Meeting</strong> se
              llevará a cabo en Chihuahua
            </p>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-4">
              Vive una experiencia académica y profesional en un entorno
              diseñado para el aprendizaje, la innovación y el networking con
              especialistas internacionales.
            </p>
          </div>


          {/* =========================
              DATOS
          ========================== */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">

            <div className="bg-white border border-gray-100 rounded-2xl px-7 py-4 shadow-sm">
              <p className="text-xs uppercase tracking-wider text-gray-400">
                Universidad
              </p>

              <p className="font-semibold text-[#0f172a] mt-1">
                Chihuahua
              </p>
            </div>


            <div className="bg-white border border-gray-100 rounded-2xl px-7 py-4 shadow-sm">
              <p className="text-xs uppercase tracking-wider text-gray-400">
                Ciudad
              </p>

              <p className="font-semibold text-[#0f172a] mt-1">
                Chihuahua
              </p>
            </div>

          </div>


          {/* =========================
              BOTÓN
          ========================== */}
          <motion.a
            href="https://www.google.com/maps?sca_esv=0b64f9733fed06e0&rlz=1C5CHFA_enMX1169MX1169&output=search&q=centro+libanes+hermes&source=lnms"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="
              inline-flex
              items-center
              justify-center
              gap-3
              mt-8
              px-8
              py-4
              rounded-xl
              bg-[#0cab63]
              text-white
              font-semibold
              uppercase
              tracking-wide
              shadow-lg
              shadow-[#0cab63]/20
              hover:bg-[#0f172a]
              transition-all
              duration-300
            "
          >
            Ver ubicación
            <span className="text-lg">→</span>
          </motion.a>

        </motion.div>


        {/* =========================
            MAPA
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative mt-16"
        >

          <div
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              bg-white
              p-2
              border
              border-[#d8eee5]
              shadow-[0_25px_70px_rgba(15,23,42,0.12)]
            "
          >

            <div className="relative overflow-hidden rounded-[1.5rem]">

              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-99.18148308992387%2C19.362712961598092%2C-99.17968064546587%2C19.36417811427046&amp;layer=mapnik"
                className="w-full h-[350px] md:h-[450px]"
                loading="lazy"
              />

              {/* ETIQUETA SOBRE EL MAPA */}
              <div
                className="
                  absolute
                  top-5
                  left-5
                  bg-white/95
                  backdrop-blur-md
                  px-4
                  py-3
                  rounded-2xl
                  shadow-lg
                  flex
                  items-center
                  gap-3
                "
              >
                <div className="w-9 h-9 rounded-full bg-[#e8faf2] flex items-center justify-center">
                  <span>📍</span>
                </div>

                <div className="text-left">
                  <p className="text-xs text-gray-400 uppercase tracking-wide">
                    Ubicación del evento
                  </p>

                  <p className="text-sm font-bold text-[#0f172a]">
                    Centro Libanés
                  </p>
                </div>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
