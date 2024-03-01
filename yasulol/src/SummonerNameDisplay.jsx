import React from "react";

const SummonerNameDisplay = (props) => {
  // {`${props.player.summonerName}: ${props.player.kills}/${props.player.deaths}/${props.player.assists}`}
  let username = "---";
  const currentVersion = props.currentVersion;
  username = props.player.summonerName ? props.player.summonerName : "---";
  var champIcon = props.player.championName;
  return (
    <div className="flex flex-row">
      <img
        className="w-[15px] h-[15px] mx-2 rounded-sm"
        src={`https://ddragon.leagueoflegends.com/cdn/${currentVersion}/img/champion/${champIcon}.png`}
      ></img>
      <h4 className="text-bold font-light text-[10px] tracking-tighter">{`${username}`}</h4>
    </div>
  );
};

export default SummonerNameDisplay;
