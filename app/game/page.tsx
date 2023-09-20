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
  "team1playerCount": 12,
  "currentTeam": 0,
  "team1currentPlayer": 0,
  "team2currentPlayer": 0,
  "team2playerCount": 12,
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
      newJson.team1currentPlayer = newJson.team1currentPlayer % json.team1playerCount;
    } else {
      //team 2
      newJson.team2currentPlayer++;
      newJson.team2currentPlayer = newJson.team2currentPlayer % json.team2playerCount;
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
    //Cookies.remove('')
    //window.location.href = "/menu";

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
    window.location.href = "/";
  }

  function timerStart() {
    if (json.timestamp === null) {
      json.timestamp = Date.now()
    }
    saveData()
  }

  return (
    <div>
      <header className="text-center my-5">
            <h1 className="text-3xl font-bold underline text-center">Schlagball</h1>
      </header>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          
            <div id="storage" className="flex items-center justify-center">
              <TestComponent loadData={loadData} saveData={saveData} clearCookies={clearCookies}/>
            </div>
            <div id="timer" className="">
              <TimeLeft json={json} endGameCallback={endGame}/>
            </div>
            <div></div>
            <div id="teamName1" className='text-4xl font-bold p-5 text-center'>
              <TeamNameDisplay json={json} teamNR={1}/>
            </div>
            <div id="score" className="flex items-center justify-center">
              <ScoreBoard json={json}/>
            </div>
            <div id="teamName2" className='text-4xl font-bold p-5 text-center'>
              <TeamNameDisplay json={json} teamNR={2}/>
            </div>
            <div id="team1points">
              <PointButtons pointFunc={point} team={1}/>
            </div>
            <div id="currentStatus" className="flex items-center justify-center">
              <CurrentPlayer json={json} nextPlayer={nextPlayer}/>
            </div>
            <div id="team2points">
              <PointButtons pointFunc={point} team={2}/>
            </div>
            <div></div>
            <div className=" text-center felx items-center justify-center">
              <button className="bg-white active:bg-blue-200 p-5 px-5 border-black border-2 font-bold rounded-full prevent-select" onClick={toterWechsel}>Toter Wechsel</button>
            </div>
            <div></div>
        </div>
      </div>
      <div className="mt-5">
          <EventLog events={events}/>
      </div>
    </div>
  );
}

/*
<button onClick={temp}>temp</button>
*/
