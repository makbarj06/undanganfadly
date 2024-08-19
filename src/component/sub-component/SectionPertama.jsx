import daunLontara from "./imageHal/daunlontarafix2.png";
import bckgrnd from "../../img/background.svg";
import daunlontarabawah from "./imageHal/daunlonatarabawah.png";

export default function HalIntroduction() {
  return (
    <div className="w-full h-[861px] overflow-hidden  xl:flex justify-center  ">
      <div
        className="xl:w-[360px] w-full h-[861px] relative "
        style={{
          backgroundImage: `url(${bckgrnd})`,
        }}
      >
        <img src={daunLontara} alt="" className="absolute top-0" />
        <img
          src={daunlontarabawah}
          alt=""
          className="absolute bottom-0 right-0"
        />
      </div>
    </div>
  );
}
