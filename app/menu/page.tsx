"use client"
import React, { useState, useEffect, FormEvent } from "react";
import Cookies from "js-cookie";
import GameData from "@/types/gameData";

interface FormData {
  team1name: string;
  team2name: string;
  timer: number;
}

interface FormProps {
  onSubmit: (data: FormData) => void;
}

export default function Menu() {

  const [formData, setFormData] = useState<FormData>({
    team1name: '',
    team2name: '',
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
    
    newGame(formData.team1name, formData.team2name, formData.timer)
    
  }

  function newGame(team1name: string, team2name: string, timer: number) {
  
    //make new game object 
    let newGame: GameData = {
      team1name: team1name,
      team1points: 0,
      team1currentPlayer: 0,

      team2name: team2name,
      team2points: 0, 
      team2currentPlayer: 0,

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
