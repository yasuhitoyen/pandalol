export default function getRecentChampion(history, username) {
  let playedChamps = [];
  for (let hInd in history) {
    let players = history[hInd].info.participants;
    for (let pInd in players) {
      if (players[pInd].summonerName.toLowerCase() === username.toLowerCase()) {
        playedChamps.push(players[pInd].championName);
      }
    }
  }
  // Count the occurrences of each champion
  const champCounts = playedChamps.reduce((acc, champion) => {
    acc[champion] = acc[champion] ? acc[champion] + 1 : 1;
    return acc;
  }, {});

  // Find the champion with the highest count
  let mostCommonChampion = null;
  let maxCount = 0;
  for (const champion in champCounts) {
    if (champCounts[champion] > maxCount) {
      mostCommonChampion = champion;
      maxCount = champCounts[champion];
    }
  }

  console.log(`Most common champion: ${mostCommonChampion}`);
  return mostCommonChampion; // Return the most common champion
}
