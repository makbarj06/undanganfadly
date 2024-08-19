import bckgrnd from "../img/background.svg";
import lammingAtas from "../img/lammingAtas.png";
import lammingBawah from "../img/lammingBawah.png";
import badik from "../img/badik.svg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import dataku from "../dataku.json";
import fotoPernikahan from "../img/pernikahan.png";

export default function Cover() {
  const [isBackgroundComplete, setIsBackgroundComplete] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  const namaLengkap = `${dataku.namaPria} & ${dataku.namaWanita}`;

  useEffect(() => {
    if (isBackgroundComplete && index < namaLengkap.length) {
      const timer = setTimeout(() => {
        setTypedText((prev) => prev + namaLengkap[index]);
        setIndex((prev) => prev + 1);
      }, 150); // Delay typing speed
      return () => clearTimeout(timer);
    }
  }, [index, isBackgroundComplete]);

  return (
    <div className="w-screen h-screen xl:flex justify-center overflow-hidden">
      <div
        className="w-full h-full xl:w-[390px]"
        style={{
          backgroundImage: `url(${bckgrnd})`,
        }}
      >
        <motion.div
          className="h-[80%] w-full bg-repeat-x sm:h-[88%] xl:h-[80%] sm:bg-repeat-x bg-[50%,0%]"
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
              {isBackgroundComplete && (
                <motion.div
                  className="flex justify-center pt-2 sm:pt-6 xl:pt-3 sm:text-[32px] text-[#376D41] xl:text-sm "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }} // Delay sinkron dengan durasi animasi badik
                >
                  <h1 className="font-sarlotte">THE WEDDING OF</h1>
                </motion.div>
              )}
              <div className="flex justify-center text-3xl  font-carmitta text-[#376D41] xl:text-[35px] xl:pt-2 sm:text-[55px] sm:pt-3">
                <h1>{typedText}</h1>
              </div>
              {isBackgroundComplete && (
                <motion.div
                  className="flex justify-center"
                  initial={{ x: "100vw" }} // Mulai dari luar layar (kanan)
                  animate={{ x: 0 }} // Bergerak ke posisi semula
                  transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 10,
                    duration: 2,
                  }}
                >
                  <img
                    src={fotoPernikahan}
                    alt="Foto Pernikahan"
                    className="w-[250px] sm:w-[500px] mr-8 sm:mr-10 sm:-mt-5 -mt-5"
                  />
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
        <motion.div
          className="h-[20%] bg-repeat-x sm:bg-[50%,0%] sm:h-[12%] xl:h-[20%] xl:bg-no-repeat xl:bg-cover"
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
