"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { estados } from "../data/Estados";

export default function Registro() {
  const [codigoValido, setCodigoValido] = useState(false);
  const [loading, setLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [form, setForm] = useState({
    codigo: "",
    boleto: "",
    nombreCompleto: "",
    email: "",
    telefono: "",
    cedula: "",
    especialidad: "",
    alergias: "",
    estado: "",
    instagram: "",
    privacidad: false,
    bases: false,
     // ===== FACTURACIÓN =====
    requerirFactura: false,
    rfc: "",
    cp: "",
    razonSocial: "",
    correoFactura: "",
    usoCfdi: "",
    telefonoFactura: "",
    regimenFiscal: "",
  });

  /* ================= VALIDAR CÓDIGO ================= */

  const validarCodigo = async () => {
    if (!form.codigo) return;
    setLoading(true);
    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbzX4eaVBN4T6YbEJ1q7qmpvQya980GcyaS2nNnJUDIVumkbIcDWeLOT7kKwNRSEIYdf/exec",
        {
          method: "POST",
          body: JSON.stringify({
            accion: "validarCodigo",
            codigo: form.codigo,
          }),
        }
      );
      const data = await res.json();

      if (!data.success) {
        alert(data.message || "Código inválido o ya utilizado");
        setLoading(false);
        return;
      }

      setForm((prev) => ({
        ...prev,
        boleto: data.tipo, // Conferencia o Hands On
      }));

      setCodigoValido(true);
    } catch (error) {
      alert("Error validando código");
    } finally {
      setLoading(false);
    }
  };

  /* ================= ENVIAR FORMULARIO ================= */
  const enviarFormulario = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbzX4eaVBN4T6YbEJ1q7qmpvQya980GcyaS2nNnJUDIVumkbIcDWeLOT7kKwNRSEIYdf/exec",
        {
          method: "POST",
          body: JSON.stringify({
            accion: "guardarRegistro",
            ...form,
          }),
        }
      );

      const data = await res.json();

      if (!data.success) {
        alert(data.message || "Error al guardar");
        setLoading(false);
        return;
      }

      setEnviado(true);
    } catch (error) {
      alert("Error de conexión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="registro" className="relative py-32 px-6 overflow-hidden bg-white">
      {/* Background */}

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* COLUMNA IZQUIERDA */}
        <div className="text-black">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-2xl font-bold mb-7 "
          >
            Registro Tokuyama International Meeting
          </motion.h2>

          <p className="text-base md:text-base leading-relaxed opacity-90 mb-7">
            Vive una experiencia única diseñada para profesionales de la
            odontología que buscan actualizarse, crecer y conectar con los
            mejores especialistas del sector.
          </p>

          <p className="text-base md:text-base leading-relaxed opacity-90">
            Ingresa tu código de acceso para completar tu registro.
          </p>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="max-w-xl mx-auto w-full text-center">

          {/* ====== CÓDIGO ====== */}
          {!codigoValido && (
            <div className="space-y-4">
              <input
                placeholder="Código de acceso"
                className="w-full border border-[#0cab63] px-4 py-3 rounded-lg bg-white text-black text-center"
                onChange={(e) =>
                  setForm({ ...form, codigo: e.target.value.trim().toUpperCase() })
                }
              />

              <button
                onClick={validarCodigo}
                disabled={loading}
                className="w-full border border-[#0cab63] text-black py-3 rounded-lg uppercase tracking-wide hover:bg-white hover:text-black transition-all"
              >
                {loading ? "Validando..." : "Validar código"}
              </button>
            </div>
          )}

          {/* ====== FORMULARIO ====== */}
          {codigoValido && !enviado && (
            <form onSubmit={enviarFormulario} className="mt-10 space-y-4 text-left">
              <p className="text-white text-sm">
                Tipo de boleto: <strong>{form.boleto}</strong>
              </p>

              <input required placeholder="Nombre Completo" className="w-full border px-4 py-3 rounded-lg bg-white text-black"
                onChange={(e) => setForm({ ...form, nombreCompleto: e.target.value })} />

              <input required type="email" placeholder="Correo" className="w-full border px-4 py-3 rounded-lg bg-white text-black"
                onChange={(e) => setForm({ ...form, email: e.target.value })} />

              <input required placeholder="Teléfono" className="w-full border px-4 py-3 rounded-lg bg-white text-black"
                onChange={(e) => setForm({ ...form, telefono: e.target.value })} />

              <input placeholder="Cédula Profesional (Opcional)" className="w-full border px-4 py-3 rounded-lg bg-white text-black"
                onChange={(e) => setForm({ ...form, cedula: e.target.value })} />

              <input placeholder="Especialidad" className="w-full border px-4 py-3 rounded-lg bg-white text-black"
                onChange={(e) => setForm({ ...form, especialidad: e.target.value })} />

              <input required placeholder="¿Alguna alergia?" className="w-full border px-4 py-3 rounded-lg bg-white text-black"
                onChange={(e) => setForm({ ...form, alergias: e.target.value })} />

              <select
                    required
                    defaultValue=""
                    className="w-full border px-4 py-3 rounded-lg bg-white text-black"
                    onChange={(e) => setForm({ ...form, estado: e.target.value })}
                  >
                    <option value="" disabled>
                      Selecciona tu estado
                    </option>

                    {estados.map((estado) => (
                      <option key={estado} value={estado}>
                        {estado}
                      </option>
                    ))}
                  </select>

              <input placeholder="Instagram (Opcional)" className="w-full border px-4 py-3 rounded-lg bg-white text-black"
                onChange={(e) => setForm({ ...form, instagram: e.target.value })} />

                <label className="flex gap-2 text-sm text-white">
                <input type="checkbox" required
                  onChange={(e) => setForm({ ...form, privacidad: e.target.checked })} />
                Acepto el{""}
                <a href="https://balsasdental.com.mx/wp-content/uploads/2025/12/AV-PRIVACIDAD-USO-DE-IMAGEN-Y-C-ATOTIZACION-CLIENTES.pdf" className="underline hover:text-green-400">
                  Aviso de privacidad
                </a>
              </label>

              {/* factura */}
              {form.boleto !== "Beca" && (
                <label className="flex gap-2 text-sm text-white">
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      setForm({ ...form, requerirFactura: e.target.checked })
                    }
                  />
                  ¿Requerir factura?
                </label>
              )}

              <p className="text-white text-sm font-semibold">
                La factura solamente es valida si realiza el registro dentro del mes en que se realizo su primer pago
              </p>

                {form.requerirFactura && (
                    <div className="space-y-4">
                      <input
                        required
                        placeholder="RFC"
                        className="w-full border px-4 py-3 rounded-lg bg-white text-black"
                        onChange={(e) => setForm({ ...form, rfc: e.target.value })}
                      />

                      <input
                        required
                        placeholder="Código Postal"
                        className="w-full border px-4 py-3 rounded-lg bg-white text-black"
                        onChange={(e) => setForm({ ...form, cp: e.target.value })}
                      />

                      <input
                        required
                        placeholder="Razón social o nombre"
                        className="w-full border px-4 py-3 rounded-lg bg-white text-black"
                        onChange={(e) =>
                          setForm({ ...form, razonSocial: e.target.value })
                        }
                      />

                      <input
                        required
                        type="email"
                        placeholder="Correo de facturación"
                        className="w-full border px-4 py-3 rounded-lg bg-white text-black"
                        onChange={(e) =>
                          setForm({ ...form, correoFactura: e.target.value })
                        }
                      />

                      <input
                        required
                        placeholder="Uso de CFDI"
                        className="w-full border px-4 py-3 rounded-lg bg-white text-black"
                        onChange={(e) =>
                          setForm({ ...form, usoCfdi: e.target.value })
                        }
                      />

                      <input
                        required
                        placeholder="Teléfono de facturación"
                        className="w-full border px-4 py-3 rounded-lg bg-white text-black"
                        onChange={(e) =>
                          setForm({ ...form, telefonoFactura: e.target.value })
                        }
                      />

                      <input
                        required
                        placeholder="Régimen Fiscal"
                        className="w-full border px-4 py-3 rounded-lg bg-white text-black"
                        onChange={(e) =>
                          setForm({ ...form, regimenFiscal: e.target.value })
                        }
                      />
                    </div>
                  )}

              {(form.boleto === "Hands On" || form.boleto === "Beca") && (
                <label className="flex gap-2 text-sm text-white">
                  <input type="checkbox" required
                    onChange={(e) => setForm({ ...form, bases: e.target.checked })} />
                  Acepto las{" "}
                  <a href="#" className="underline hover:text-green-400">
                    Bases del evento
                  </a>
                </label>
              )}
              <button
                disabled={loading}
                className="w-full bg-green-600 text-white py-3 rounded-lg"
              >
                {loading ? "Enviando..." : "Completar registro"}
              </button>
            </form>
          )}
          {enviado && (
            <div className="mt-10 text-green-400 text-xl font-semibold">
              ✅ Registro completado correctamente
            </div>
          )}
        </div>
      </div>
      {/* ===== FOOTER REGISTRO ===== */}
                  <div className="relative z-10 mt-32 border-t border-black/30 pt-10">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-white">
                      {/* Redes sociales */}
                      <div className="flex gap-6">
                        <a
                          href="https://www.facebook.com/BalsasDentalmx"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-70 transition text-[#0cab63]"
                          aria-label="Facebook"
                        >
                          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2V9.5a3 3 0 0 1 3.2-3.3c.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V11h2.6l-.4 3h-2.2v7A10 10 0 0 0 22 12z" />
                          </svg>
                        </a>
                        <a
                          href="https://www.instagram.com/balsasdentalmx/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-70 transition text-[#0cab63]"
                          aria-label="Instagram"
                        >
                          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 12 5.5 5.5 0 0 0 12 7.5zm0 9A3.5 3.5 0 1 1 15.5 12 3.5 3.5 0 0 1 12 16.5zM18 6.8a1.2 1.2 0 1 0 1.2 1.2A1.2 1.2 0 0 0 18 6.8z" />
                          </svg>
                        </a>
                      </div>
                      {/* Derechos */}
                      <p className="text-sm opacity-80 text-center md:text-right text-black">
                        © {new Date().getFullYear()} Tokuyama International Meeting.  
                        Todos los derechos reservados.
                      </p>
                    </div>
                  </div>
    </section>
  );
}
