import { easeIn, motion, transform } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
function Landing() {
  
  return (
    <div  data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index===1 &&(
                <motion.div initial={{width:0}} animate={{width: "12vw"}} transition= {{easeIn: [0.45, 0, 0.55, 1]}} className="mr-[1vw] mb-[1vw] w-[14vw] rounded-lg h-[5.5vw] relative "><img src="https://images.unsplash.com/photo-1706779091102-1b2eb52bcafb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D" alt="" /></motion.div>)}
                <h1 className=' mb-[1vw]  uppercase text-[9vw] leading-[7vw]  font-["Neue Montreal"] font-medium'>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between item-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className=" mt-3 text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}

        <div className="start flex item-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full">
            {" "}
            Start the project
          </div>
          <div className="w-10 h-10 flex item-center justify-center border-[2px] border-zinc-500  rounded-full">
            <span className = "animate-spin"> 
            
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Landing;
