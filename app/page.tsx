"use client"
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import TestComponent from "../components/testComponent";
import CurrentPlayer from "@/components/currentPlayer";
import GameData from "@/types/gameData";
import EventT from "@/types/eventT";
import TimeLeft from "@/components/timeLeft";
import ScoreBoard from "@/components/score";
import TeamNameDisplay from "@/components/teamNameDisplay";
import PlayerSelector from "@/components/playerSelector";
import PointButtons from "@/components/pointButtons";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import EventLog from "@/components/eventLog"

let myJson: GameData = {
  "team1name": "Eagles",
  "team1points": 30, 
  "team2name": "lakers",
  "team2points": 20,
  "currentTeam": 0,
  "team1currentPlayer": 0,
  "team2currentPlayer": 0,
  "timestamp": Date.now(),
  "setGameLength": 3,
  "events": []
}

export default function Home() {

  useEffect(() => {
    loadData()
  }, []);


  const [json, setJson] = useState(myJson);

  function pointTeam1() {
    let newJson = JSON.parse(JSON.stringify(json));
    newJson.team1points++;
    setJson(newJson)
  }

  function pointTeam2() {
    let newJson = JSON.parse(JSON.stringify(json));
    newJson.team2points++;
    setJson(newJson)
  }

  function loadData() {
    const storedData = Cookies.get('myJsonData');
    if (storedData) {
      setJson(JSON.parse(storedData));
    }
  }

  function saveData() {
    Cookies.set('myJsonData', JSON.stringify(json), { sameSite: 'lax', expires: 7 });
  }

  function nextPlayer() {
    let newJson: GameData = JSON.parse(JSON.stringify(json));

    //check current team
    if (newJson.currentTeam == 0) {
      //team 1
      newJson.team1currentPlayer++;
      newJson.team1currentPlayer = newJson.team1currentPlayer % 12;
    } else {
      //team 2
      newJson.team2currentPlayer++;
      newJson.team2currentPlayer = newJson.team2currentPlayer % 12;
    }

    setJson(newJson)
  }

  function switchTeam() {
    let newJson: GameData = JSON.parse(JSON.stringify(json));
    newJson.currentTeam++;
    newJson.currentTeam = newJson.currentTeam % 2

    setJson(newJson)
  }

  function point(team: number, player: number, art: string) {
    //add event 
    console.log(team + " " + player + " " + art);

    if (team == 1) {
      pointTeam1()
    } else {
      pointTeam2()
    }

    if (art == "Abwurfpunkt") {
      switchTeam();
    }
  }

  function temp() {
    //Cookies.remove('')
    window.location.href = "/menu";
  }

  function endGame() {
    alert("Game Over!");
  }

  return (
    <div>
      <header>
        <h1>My Page</h1>
      </header>
      
      <main>
        
        <TeamNameDisplay json={json} teamNR={1}/>
        <ScoreBoard json={json}/>
        <TeamNameDisplay json={json} teamNR={2}/>

        <button onClick={temp}>temp</button>

        <TestComponent loadData={loadData} saveData={saveData}/>
        <CurrentPlayer json={json} nextPlayer={nextPlayer}/>
        <TimeLeft json={json} endGameCallback={endGame}/>
        <button onClick={switchTeam}>Toter Wechsel</button>
        
        <p>Punkte Team 1</p>

        <PointButtons pointFunc={point} team={1}/>

        <p>Punkte Team 2</p>

        <PointButtons pointFunc={point} team={2}/>
        <a href="/menu">menu</a>
        <EventLog json={json}/>

      </main>
    </div>

  );
}
