import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full rounded-3xl py-20 bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex  overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration:7}} className='text-[12vw] leading-none font-["Neue Montreal"] uppercase   font-semibold'> WE ARE OCHI WE ARE OCHI</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration:7}} className='text-[12vw] leading-none font-["Neue Montreal"] uppercase ml-4  font-semibold'>WE ARE OCHI WE ARE OCHI</motion.h1>

           

        </div>
    </div>
  )
}

export default Marquee
