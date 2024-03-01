import React, { useState, useEffect } from "react";
import GameSummary from "./GameSummary";
import {
  getUserInfo,
  getMatchHistory,
  getMatchDetails,
} from "./scripts/UserInfo";

const api_key = "RGAPI-1c9d8242-b7cf-4fb6-a2bb-74101a864fac";

function MatchHistory(props) {
  // Correctly initializing state with useState hook
  const currentVersion = props.currentVersion;
  const [matchHistory, setMatchHistory] = useState(null);
  const [username, setUsername] = useState("a few sekkonds");
  const [inputValue, setInputValue] = useState("");
  const [fetching, setFetching] = useState(true);
  async function fetchMatchHistory() {
    // Assuming getMatchHistory is an async function that fetches match history
    setFetching(true);
    try {
      const history = await getMatchHistory(username, "na1", api_key);
      setMatchHistory(history); // Correctly using the setter function to update state
      props.setAppMatchHistory(history);
    } catch (error) {
      console.log("Error Fetching ");
    }
    setFetching(false);
  }
  useEffect(() => {
    fetchMatchHistory();
  }, [username]); // Empty dependency array means this effect runs once on component mount props.username

  return (
    <>
      <div className="">
        <div>
          <h1>{fetching}</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault(); // Prevent default form submission behavior
              props.setAppUsername(inputValue)
              setUsername(inputValue); // Update the username with the input value
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
          {/* Optionally display the submitted username */}
        </div>
        <div className="flex-col space-y-4 py-3">
          {matchHistory !== null && !fetching ? (
            matchHistory.map((match, index) => {
              if (match) {
                return (
                  <GameSummary
                    key={index}
                    summary={match}
                    summonerName={username}
                    currentVersion={currentVersion}
                  />
                );
              }
              return null; // Return null for matches without 'info'
            })
          ) : (
            <div className="bg-green-70">Loading match history...</div> // Or just null if you don't want to show anything
          )}
        </div>
      </div>
    </>
  );
}

export default MatchHistory;
