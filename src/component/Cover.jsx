import gmbr from "../img/LAMMING31.svg";
import bckgrnd from "../img/background.svg";
import lammingAtas from "../img/lammingatas.svg";
import lammingBawah from "../img/lammingbawah.svg";

export default function Cover() {
  return (
    <div className="w-screen h-screen xl:flex justify-center  overflow-hidden">
      <div
        className="w-full h-full xl:w-[390px] "
        style={{
          backgroundImage: `url(${bckgrnd})`,
        }}
      >
        <div
          className="h-[85%] w-full bg-repeat-x sm:bg-repeat-x bg-[50%,0%]"
          style={{
            backgroundImage: `url(${lammingAtas})`,
          }}
        ></div>
        <div
          className="h-[15%] bg-repeat-x bg-cover"
          style={{
            backgroundImage: `url(${lammingBawah})`,
          }}
        ></div>
      </div>
    </div>
  );
}
