"use client"
import React, { useState, useEffect, FormEvent } from "react";
import Cookies from "js-cookie";
import GameData from "@/types/gameData";

interface FormData {
  team1name: string;
  team1Size: number,
  team2name: string;
  team2Size: number,
  timer: number;
}

interface FormProps {
  onSubmit: (data: FormData) => void;
}

export default function Menu() {

  const [formData, setFormData] = useState<FormData>({
    team1name: '',
    team1Size: 12,
    team2name: '',
    team2Size: 12,
    timer: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    const { name, value } = e.target;

    console.log(name + " " + value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function onSumbitHandler(e: React.FormEvent) {
    e.preventDefault();
    
    newGame(formData.team1name, formData.team1Size, formData.team2name, formData.team2Size, formData.timer)
    
  }

  function newGame(team1name: string, team1Size: number, team2name: string, team2Size: number, timer: number) {
  
    //make new game object 
    let newGame: GameData = {
      team1name: team1name,
      team1points: 0,
      team1currentPlayer: 0,
      team1playerCount: team1Size,

      team2name: team2name,
      team2points: 0, 
      team2currentPlayer: 0,
      team2playerCount: team2Size,

      currentTeam: 0,

      setGameLength: timer,
      timestamp: null,
      events: []
    }

    //save cookie 
    Cookies.set('myJsonData', JSON.stringify(newGame), { sameSite: 'lax', expires: 365 });

    //save empty events 
    Cookies.set('myEventData', JSON.stringify([]), { sameSite: 'lax', expires: 365 });

    //direct to game page
    window.location.href = "/";
    
  }

  function loadGame() {
    //link to game page 
    window.location.href = "/";
  }
  

  return (
    <div>
      <header>
        <h1>Menu</h1>
      </header>
      
      <main>
        <div>
          <button onClick={loadGame}>Load Game</button>
        </div>
        <div>
          <form onSubmit={onSumbitHandler}>
            <div>
              <label htmlFor="input1">Team 1 Name:</label>
              <input
                type="text"
                id="input1" 
                name="team1name"
                value={formData.team1name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="input1_5">Team 1 Spieler Anzahl:</label>
              <input
                type="number"
                id="input1_5" 
                name="team1Size"
                value={formData.team1Size}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="input2">Team 2 Name</label>
              <input
                type="text"
                id="input2"
                name="team2name"
                value={formData.team2name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="input2_5">Team 2 Spieler Anzahl:</label>
              <input
                type="number"
                id="input2_5" 
                name="team2Size"
                value={formData.team2Size}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="input3">Timer länge</label>
              <input
                type="number"
                id="input3"
                name="timer"
                value={formData.timer}
                onChange={handleChange}
              />
            </div>
            <button type="submit">New Game</button>
          </form>
          
        </div>
      </main>
    </div>

  );
}
