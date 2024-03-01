import React from "react";
import CrownSplash from "./assets/CrownSplash.png";

const BestChampPanel = (props) => {
  return (
    <div className="flex flex-col justify-start items-center golden-shine pt-10 mx-5 rounded-xl shadow-lg my-10 w-[250px] h-[500px] lg:scale-[100%] md:scale-[50%] relative bg-lime-200 opacity-85">
      {/* Champion Image */}
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/14.4.1/img/champion/${props.BestChampion}.png`}
        className="rounded-full w-40 h-40 z-10 relative border-[10px]  border-yellow-400"
        alt="Best Champion"
        style={{ top: '5%', zIndex: 10 }} // Adjust top as necessary to position at the top of the div
      />
      {/* Crown Image */}
      <img
        src={CrownSplash}
        className="w-[110px] relative"
        alt="Crown"
        style={{ top: '-46%', zIndex: 20 }} // Position the crown on the champion image
      />
    </div>
  );
};

export default BestChampPanel;
