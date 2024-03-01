export async function getUser(apiKey, region, summonerName) {
  try {
    const url = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodeURIComponent(
      summonerName
    )}?api_key=${apiKey}`;
    const response = await fetch(url);
    if (response.status === 429) {
      // Implement retry logic or return a specific rate limit exceeded indicator
      return null; // or specific indicator
    }
    if (!response.ok) {
      return null;
    }
    const data = await response.json();
    //    console.log("Player data:", data);
    return data; // This ensures data is returned to the caller.
  } catch (error) {
    return null;
  }
}
