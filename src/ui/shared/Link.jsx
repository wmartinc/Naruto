import { AnimatePresence, motion } from 'motion/react'
import LeftArrow from '../../assets/right-arrow.svg'
import { useState } from 'react'

const Link = ({ children, source = "#" }) => {
  const [isMouseOn, setIsMouseOn] = useState(false)
  const linkVariants = {
    initial: {
      opacity: 0, translateX: '-25px'
    },
    animate: {
      opacity: 1, translateX: '0px', transition: { duration: .5 }
    },
    exit: {
      opacity: 0, translateX: '-25px'
    }
  }

  return (
    <motion.a href={source} className={`flex border  flex-center px-4 py-1    w-max rounded-md 
      transition-colors duration-500 ml-auto relative ${isMouseOn ?  "border-brand": "border-white/0"}`}
      onMouseEnter={() => setIsMouseOn(true)}
      onMouseLeave={() => setIsMouseOn(false)}
    >
      <span className='pointer-events-none'>
        {children}
      </span>
      <div className='size-5'>
        <AnimatePresence>
          {
            isMouseOn &&
            <motion.img src={LeftArrow} alt="Ir"
              className='size-full'
              variants={linkVariants}
              initial={"initial"}
              animate={"animate"}
              exit={"exit"} />
          }
        </AnimatePresence>
      </div>
    </motion.a>
  )
}

export default Link;