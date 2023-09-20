"use client"
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import TestComponent from "../../components/testComponent";
import CurrentPlayer from "@/components/currentPlayer";
import GameData from "@/types/gameData";
import EventT from "@/types/eventT";
import TimeLeft from "@/components/timeLeft";
import ScoreBoard from "@/components/score";
import TeamNameDisplay from "@/components/teamNameDisplay";
import PlayerSelector from "@/components/playerSelector";
import PointButtons from "@/components/pointButtons";

import 'reactjs-popup/dist/index.css';
import EventLog from "@/components/eventLog"
import TimerStartButton from "@/components/timerStartButton"

let myJson: GameData = {
  "team1name": "Eagles",
  "team1points": 30, 
  "team2name": "lakers",
  "team2points": 20,
  "currentTeam": 0,
  "team1currentPlayer": 0,
  "team2currentPlayer": 0,
  "timestamp": null,
  "setGameLength": 3,
  "events": []
}

let myEvents: EventT[] = []

export default function Home() {

  useEffect(() => {
    loadData()
  }, []);

  const [json, setJson] = useState(myJson);
  const [events, setEvents] = useState(myEvents)

  useEffect(() => {
    saveData()
  }, [json, events]);

  function pointTeam1() {
    let newJson = JSON.parse(JSON.stringify(json));
    newJson.team1points++;
    setJson(newJson)  
    return newJson  
  }

  function pointTeam2() {
    let newJson = JSON.parse(JSON.stringify(json));
    newJson.team2points++;
    setJson(newJson)
    return newJson
  }

  function loadData() {
    let storedData = localStorage.getItem("myGameData");
    if (storedData) {
      setJson(JSON.parse(storedData));
    }

    storedData = localStorage.getItem("myEventsData");
    if (storedData) {
      setEvents(JSON.parse(storedData));
    }

  }

  function saveData() {
    // Cookies.set('myGameData', JSON.stringify(json), { sameSite: 'lax', expires: 365 });
    // Cookies.set('myEventData', JSON.stringify(events), { sameSite: 'lax', expires: 365 });

    localStorage.setItem("myGameData", JSON.stringify(json))
    localStorage.setItem("myEventsData", JSON.stringify(events))
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

  function toterWechsel() {
    switchTeam(JSON.parse(JSON.stringify(json)))
  }

  function switchTeam(newJson: GameData) {
    //let newJson: GameData = JSON.parse(JSON.stringify(json));
    newJson.currentTeam++;
    newJson.currentTeam = newJson.currentTeam % 2

    setJson(newJson)
  }

  function addLog(team: number, player: number, text: string) {
    let newEvents: EventT[] = JSON.parse(JSON.stringify(events));
    newEvents.push({
      "timestampt": Date.now(),
      "team": team,
      "player": player,
      "text": text
    })
    
    setEvents(newEvents)
    
    
  }

  function point(team: number, player: number, art: string) {
    //add event 
    console.log(team + " " + player + " " + art);
    addLog(team, player, art)

    console.log(team + " " + player + " " + art);
    
    
    
    let newJson: GameData

    if (team == 1) {
      console.log(team);
      
      newJson = pointTeam1()
    } else {
      console.log(team);
      
      newJson = pointTeam2()
    }
    //console.log(json);
    
    //hier ist ein problem mit dem usestate da in switch team der usestate json genutzt wird bevor das update von pointTeam() da ist im usestate 
    if (art == "Abwurfpunkt") {
      switchTeam(newJson);
    }
  }

  function temp() {
    

    // let events: EventT[] = [
    //   {"timestampt": 0, "text": "5etgrkdfsm", "team": 3, "player": 3},
    //   {"timestampt": 0, "text": "5etgrkdfsm", "team": 3, "player": 3},
    // ]
    // console.log(JSON.stringify(events));  

    localStorage.setItem("myEventsData", JSON.stringify(events))
    localStorage.removeItem('test');

    // Remove data from localStorage
    //localStorage.removeItem('userData');

    

    
  }

  function endGame() {
    alert("Game Over!");
  }

  function clearCookies() {
    // Cookies.remove("myJsonData")
    // Cookies.remove("myEventData")

    localStorage.removeItem('myGameData');
    localStorage.removeItem('myEventsData');
    window.location.href = "/game";
  }

  function timerStart() {
    if (json.timestamp === null) {
      json.timestamp = Date.now()
    }
    saveData()
  }

  return (
    <div>
      <header>
        <h1 className="text-3xl font-bold underline">My Page</h1>
      </header>
      
      <main>
        
        <TeamNameDisplay json={json} teamNR={1}/>
        <ScoreBoard json={json}/>
        <TeamNameDisplay json={json} teamNR={2}/>

        <button onClick={temp}>temp</button>

        <TestComponent loadData={loadData} saveData={saveData}/>
        <CurrentPlayer json={json} nextPlayer={nextPlayer}/>
        <TimeLeft json={json} endGameCallback={endGame}/>
        <button onClick={toterWechsel}>Toter Wechsel</button>
        
        <p>Punkte Team 1</p>

        <PointButtons pointFunc={point} team={1}/>

        <p>Punkte Team 2</p>

        <PointButtons pointFunc={point} team={2}/>
        <a href="/">menu</a>
        <button onClick={clearCookies}>DeleteGame</button>
        <EventLog events={events}/>
        <TimerStartButton json={json} onClickFunction={timerStart}/>
      </main>
    </div>

  );
}
