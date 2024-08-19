import gmbr from "../img/LAMMING31.svg";
import bckgrnd from "../img/background.svg";
import lammingAtas from "../img/lammingAtas.png";
import lammingBawah from "../img/lammingBawah.png";
import badik from "../img/badik.svg";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Cover() {
  const [isBackgroundComplete, setIsBackgroundComplete] = useState(false);
  return (
    <div className="w-screen h-screen xl:flex justify-center  overflow-hidden">
      <div
        className="w-full h-full xl:w-[390px] "
        style={{
          backgroundImage: `url(${bckgrnd})`,
        }}
      >
        <motion.div
          className="h-[85%] w-full bg-repeat-x sm:bg-repeat-x bg-[50%,0%]"
          style={{
            backgroundImage: `url(${lammingAtas})`,
          }}
          initial={{ y: "-100vh" }} // Start from off-screen (top)
          animate={{ y: 0 }} // Move to original position
          transition={{ type: "spring", stiffness: 50, delay: 0.2 }} // Spring effect with delay
          onAnimationComplete={() => setIsBackgroundComplete(true)} // Set ke true saat animasi selesai
        >
          <div className="h-[12%] sm:h-[15%] xl:h-[12%] "></div>
          <div className="h-[88%] sm:h-[85%] xl:h-[88%] ">
            <div className="">
              <div className="flex justify-center pt-3 ">
                {isBackgroundComplete && (
                  <motion.div
                    className="flex justify-center pt-3"
                    initial={{ x: "-100vw" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <img
                      src={badik}
                      alt=""
                      className="sm:scale-150 xl:scale-100 sm:pt-3"
                    />
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="h-[15%] bg-repeat-x bg-cover"
          style={{
            backgroundImage: `url(${lammingBawah})`,
          }}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.5 }}
        ></motion.div>
      </div>
    </div>
  );
}
