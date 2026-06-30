import { useState } from "react"
import imagen from '../assets/naruto-png.png'
import {AnimatePresence, motion} from 'motion/react'
import { useInView } from "motion/react"
import { useRef } from "react"
const Resumen = () => {
  return (
    <div className="grid grid-cols-1 gap-10 py-10">
      <Personaje fondo={"https://i.pinimg.com/736x/b2/a0/7b/b2a07be402c8c227fb964c0bd7e4b4d2.jpg"} />
      <Personaje fondo={"https://i.pinimg.com/736x/b2/a0/7b/b2a07be402c8c227fb964c0bd7e4b4d2.jpg"} />
    </div>
  )
}

const Personaje = ({ name = "dafault", fondo }) => {
  const contenedor = useRef(null)
  const inView = useInView(contenedor, { amount: .8 })
  const [isMouseOn, setIsMouseOn] = useState(false)

  return (
    <div className="h-150 rounded-sm shadow-sm flex contenedor"
      ref={contenedor}
      onMouseEnter={() => setIsMouseOn(true)}
      onMouseLeave={() => setIsMouseOn(false)}
    >
      <div className="personaje w-1/2 relative overflow-hidden w-max">
        <img src={fondo} alt="" className={`object-cover relative rounded-sm`} />
        <div className="personaje-capa flex-col">
          <img src={imagen} alt="" className="h-110 absolute bottom-0 left-1/2 -translate-x-1/2" />
        </div>
      </div>

      <Informacion inView={inView} />
    </div>
  )
}

const Informacion = ({ inView }) => {
  return (
    <div className="relative overflow-hidden w-1/2 flex-center">
      <AnimatePresence>
        {
          inView && <motion.div
            className="flex-center flex-col text-center gap-4" 
            initial={{opacity: 0, translateY: 20}}
            animate={{opacity: 1, translateY: 0}}
            exit={{opacity: 0, translateY: 20}}
            transition={{duration: 1}}
          >
            <h1 className=" text-5xl text-white font-extrabold text-shadow-[2px_2px] text-shadow-black/50">NARUTO</h1>
            <p className="text-white w-140">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae voluptates architecto necessitatibus voluptas nobis, a modi eaque, ut reiciendis repellat sed quo repellendus sint est, debitis quis? Vero, tenetur at!</p>
          </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}

export default Resumen;