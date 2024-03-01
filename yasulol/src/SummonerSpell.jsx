import React from "react";

const SummonerSpell = (props) => {
  return (
    <div className=" w-8 h-8 lg:w-8 lg:h-8 bg-white rounded-md border-[1px] flex justify-center items-center transition-all duration-1000">
      <img
	   className="rounded-md"
        src={`http://ddragon.leagueoflegends.com/cdn/${props.currentVersion}/img/spell/SummonerFlash.png`}
        alt="Summoner Spell"
      />

      
    </div>
  );
};

export default SummonerSpell;
