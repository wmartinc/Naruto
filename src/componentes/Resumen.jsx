import { useState } from "react"
import { AnimatePresence, motion } from 'motion/react'
import { useInView } from "motion/react"
import { useRef } from "react"
import Tarjetas from "./Tarjetas"
import personajes from '../store/personajes.json'

const Resumen = () => {
  const { equipos } = personajes

  return (
    <>
      {equipos.map((equipo, i) => {
        const [principal, ...resto] = equipo.miembros
        return (
          <section key={equipo.id} className="py-8 md:py-16">
            <div className="container mb-6 md:mb-10">
              <div className="flex items-center gap-3 md:gap-6 mb-4">
                <div className="team-divider flex-1" />
                <h2 className="font-display text-xl md:text-3xl text-brand tracking-[0.15em] whitespace-nowrap">
                  {String(i + 1).padStart(2, '0')}
                  <span className="text-white ml-2 md:ml-3">{equipo.nombre}</span>
                </h2>
                <div className="team-divider flex-1" />
              </div>
              <p className="text-gray-400 text-xs md:text-sm text-center max-w-2xl mx-auto px-4 md:px-0">{equipo.descripcion}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-10 container m-auto">
              <Personaje
                fondo={principal.imagen}
                titulo={principal.nombre}
                nombre={principal.id}
                descripcion={principal.descripcion}
                className="col-span-2"
              />
              <div className="grid grid-cols-2 sm:grid-cols-3 place-items-center lg:grid-cols-4 w-full col-span-2">
                {resto.map(miembro => (
                  <Tarjetas
                    key={miembro.id}
                    nombre={miembro.nombre}
                    imagen={miembro.imagen}
                    info={miembro.descripcion}
                    clan={miembro.clan}
                    aldea={miembro.aldea}
                    rango={miembro.rango}
                    poderes={miembro.poderes}
                  />
                ))}
              </div>
            </div>
          </section>
        )
      })}
    </>
  )
}

const Personaje = ({ fondo, className, titulo = "NARUTO", nombre, descripcion = "Personaje del universo Naruto."}) => {
  const contenedor = useRef(null)
  const inView = useInView(contenedor, { amount: .6 })
  const [isMouseOn, setIsMouseOn] = useState(false)

  return (
    <div className={`rounded-sm shadow-sm flex flex-col md:flex-row contenedor gap-5 ${className}`}
      ref={contenedor}
      onMouseEnter={() => setIsMouseOn(true)}
      onMouseLeave={() => setIsMouseOn(false)}
    >
      <div className="personaje w-full sm:w-1/3 relative overflow-hidden ">
        <img src={fondo} alt="" className={`relative rounded-sm size-full`} />
        <div className="personaje-capa flex-col">
          <img src={`/src/assets/${nombre}.png`} alt="" className="h-[60%] absolute bottom-0 left-1/2 -translate-x-1/2" />
        </div>
      </div>

      <Informacion inView={inView} titulo={titulo} descripcion={descripcion} />
    </div>
  )
}

const Informacion = ({ inView, titulo, descripcion }) => {
  return (
    <div className="relative overflow-hidden w-full md:w-1/2 flex-center">
      <AnimatePresence>
        {
          inView && <motion.div
            className="flex-center flex-col text-center gap-4"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 20 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-2xl md:text-4xl text-white font-display tracking-widest text-shadow-[2px_2px] text-shadow-black/50">{titulo}</h1>
            <p className="text-white px-4 md:px-10 text-xs md:text-sm">{descripcion}</p>
          </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}

export default Resumen;