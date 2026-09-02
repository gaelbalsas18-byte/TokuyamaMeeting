import Hero from "@/components/sections/Hero";
import Ponentes from "@/components/sections/Ponentes";
import Programa from "@/components/sections/Programa";
import Ubicacion from "@/components/sections/Ubicacion";
import Registro from "@/components/sections/Registro";
import ContactosSection from "@/components/contactos/ContactosSection"

export default function Home() {
  return (
    <main>
      {/* Seccion principal*/}
         <Hero />
              {/* CONTACTO */}
                <ContactosSection/> 
                      {/*Seccion Programa*/}
                            <Programa/>
                            {/*Seccion Ubicacion*/}
                                  <Ubicacion/>
                                  {/*Seccion Registro*/}
                                        <Registro/>     
                                              
    </main>
  );
}

