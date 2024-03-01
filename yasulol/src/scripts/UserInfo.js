import { getUser } from "./User.js";

export async function getUserInfo(username, region, token) {
  try {
    return await getUser(token, region, username);
  } catch (error) {
    return null;
  }
}
export async function getMatchDetails(matchId, token) {
  try {
    const response = await fetch(
      `https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${token}`
    );
    if (response.status === 429) {
      // Implement retry logic or return a specific rate limit exceeded indicator
      return null; // or specific indicator
    }
    if (!response.ok) {
      return null;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}
export async function getMatchHistory(username, region, token) {
  try {
    const userInfo = await getUserInfo(username, region, token);
    const { puuid } = userInfo;
    const url = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?api_key=${token}&count=4`;
    const response = await fetch(url);
    if (response.status === 429) {
      // Implement retry logic or return a specific rate limit exceeded indicator
      return null; // or specific indicator
    }
    if (!response.ok) {
      return null;
    }
    const matchList = await response.json();
    // Correctly fetch match details for each ID in matchList
    const matchDetailsPromises = matchList.map((matchId) =>
      getMatchDetails(matchId, token)
    );
    const matchDetails = await Promise.all(matchDetailsPromises); // Wait for all promises to resolve
	console.log(matchDetails);
    return matchDetails; // Should return the details, not the IDs
  } catch (error) {
    return null;
  }
}
/*
var player = getUserInfo(
  "a few sekkonds",
  "na1",
  "RGAPI-94d91535-4a58-4ed6-8238-f81d9205d86d"
);
*/
/*   //THE MATCH HISTORY GET
var matchHistory = await getMatchHistory(
  "a few sekkonds",
  "na1",
  "RGAPI-37fef03e-2ad8-4eb6-b163-7ace79516684"
);
if (!matchHistory) {
	console.log("failed to get match history")
}
console.log(matchHistory[0].info.participants);

for (let matchInd in matchHistory) {
  let playerstr = "";
  if (matchHistory[matchInd].info) {
    for (let playerInd in matchHistory[matchInd].info.participants) {
      let player = matchHistory[matchInd].info.participants[playerInd];
      console.log(
        `${player.summonerName}: ${player.kills}/${player.deaths}/${player.assists}`
      );
    }
  }
  console.log(playerstr);
}
*/
