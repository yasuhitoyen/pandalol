import BestChampPanel from "./BestChampPanel";
import MatchHistory from "./MatchHistory";
import getRecentChampion from "./scripts/MostRecentChamp";
import CleanPandaLoL from "./assets/CleanPandaLoL.png"
import { useState } from "react";
function App() {
  const api_key = "RGAPI-1c9d8242-b7cf-4fb6-a2bb-74101a864fac";
  const [matchHistory, setMatchHistory] = useState(null);
  const [username, setUsername] = useState("a few sekkonds");
  const [currentVersion, setCurrentVersion] = useState();
  const [inputValue, setInputValue] = useState("");
  fetch("https://ddragon.leagueoflegends.com/api/versions.json")
    .then((response) => response.json())
    .then((versions) => {
      setCurrentVersion(versions[0]); // The first element is the latest version
      console.log("League of Legends Current Version:", currentVersion);
    })
    .catch((error) => console.error("Error fetching game version:", error));
  return (
    <div className="min-h-screen  bg-cyan-50">
      <img src={CleanPandaLoL} className="w-24 h-24"></img>
      <div className="h-64 flex">
        <BestChampPanel
          BestChampion={getRecentChampion(matchHistory, username)}
        />
        <div className="bg-blue-300 w-[1100px] h-[200px] rounded-2xl my-10 mx-5"></div>
      </div>
      <form
            onSubmit={(e) => {
              e.preventDefault(); // Prevent default form submission behavior
              //setUsername(inputValue); // Update the username with the input value
              setInputValue(""); // Optionally clear the input field
            }}
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter username"
            />
            <button type="submit" className="ml-5 border-black border-2 rounded-xl px-2">Search</button>
          </form>
      <div className="flex flex-row">
        <div className="w-80"></div>
        <div className="">
          <MatchHistory
            username={username}
            currentVersion={currentVersion}
            setAppMatchHistory={setMatchHistory}
            setAppUsername={setUsername}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
