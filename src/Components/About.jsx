import React from 'react'

function About() {
  return (
    <div className='w-full py-20 px-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-["neue montreal"] text-[3vw] leading-[3.5vw]'>
        Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
        </h1>
        <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a2B663]'>
            <div className='w-1/2'>
                <h1 className='text-7xl'>Our Approach</h1>
                <button className=' flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white'>Read More 
                <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh] rounded-3xl bg-[#b0c859]'>

            </div>
        </div>
    </div>
  )
}

export default About