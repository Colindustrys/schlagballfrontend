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
  weitschlag: number,
  lauf: number,
  abwurf: number,
  fang: number,
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
    weitschlag: 1,
    lauf: 1,
    abwurf: 1,
    fang: 1
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
    
    newGame(formData.team1name, formData.team1Size, formData.team2name, formData.team2Size, formData.timer, formData.weitschlag,
      formData.lauf, formData.abwurf, formData.fang
      )
    
  }

  function newGame(team1name: string, team1Size: number, team2name: string, team2Size: number, timer: number, weitschlag: number,
    lauf: number, abwurf: number, fang: number,) {
  
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

      weitschlag: weitschlag,
      lauf: lauf,
      abwurf: abwurf,
      fang: fang,

      setGameLength: timer,
      timestamp: null,
      events: []
    }

    //save cookie 
    //Cookies.set('myJsonData', JSON.stringify(newGame), { sameSite: 'lax', expires: 365 });
    localStorage.setItem("myGameData", JSON.stringify(newGame))
    

    //save empty events 
    //Cookies.set('myEventData', JSON.stringify([]), { sameSite: 'lax', expires: 365 });
    localStorage.setItem("myEventsData", JSON.stringify([]))

    //direct to game page
    window.location.href = "/game";
    
  }

  function loadGame() {
    //link to game page 
    window.location.href = "/game";
  }
  

  return (
    <div>
      <header className="flex items-center justify-center my-10 font-bold text-3xl ">
        <h1>Menu</h1>
      </header>
      
      <main>
        <div className="flex items-center justify-center mb-6">
          <button className=" bg-blue-200 nice-button" onClick={loadGame}>Spiel Laden</button>
        </div>

          <form onSubmit={onSumbitHandler}>
            <div id="sides" className="flex flex-wrap items-center justify-center font-bold">
              <div id="team1" className=" px-5 flex items-start justify-center flex-col">
                <div className="p-2">
                  <label htmlFor="input1">Team 1 Name: </label>
                  <input className=" border-4 border-black w-80" placeholder="Team Name 1" type="text" id="input1" name="team1name" value={formData.team1name} onChange={handleChange}/>
                </div>
                <div className="p-2">
                  <label htmlFor="input1_5">Team 1 Spieler Anzahl: </label>
                  <input className=" border-4 border-black w-20" type="number" id="input1_5" name="team1Size" value={formData.team1Size} onChange={handleChange}/>
                </div>
              </div>
              <div id="team2" className="px-5 flex  justify-center flex-col">
                <div className="p-2">
                  <label htmlFor="input2">Team 2 Name: </label>
                  <input className="border-4 border-black w-80" placeholder="Team Name 2" type="text" id="input2" name="team2name" value={formData.team2name} onChange={handleChange}/>
                </div>
                <div className="p-2">
                  <label htmlFor="input2_5">Team 2 Spieler Anzahl:</label>
                  <input className=" border-4 border-black w-20" type="number" id="input2_5" name="team2Size" value={formData.team2Size} onChange={handleChange}/>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-end justify-end font-bold">
                <div className="point-amount_selector">
                    <label htmlFor="weitschlag">Weitschlagpunkte: </label>
                    <input className=" border-4 border-black w-20" type="number" id="weitschlag" name="weitschlag" value={formData.weitschlag} onChange={handleChange}/>
                </div>
                <div className="point-amount_selector">
                    <label htmlFor="lauf">Laufpunkte: </label>
                    <input className=" border-4 border-black w-20" type="number" id="lauf" name="lauf" value={formData.lauf} onChange={handleChange}/>
                </div>
                <div className="point-amount_selector">
                    <label htmlFor="abwurf">Abwurfpunkte: </label>
                    <input className=" border-4 border-black w-20" type="number" id="abwurf" name="abwurf" value={formData.abwurf} onChange={handleChange}/>
                </div>
                <div className="point-amount_selector">
                    <label htmlFor="fang">Fangpunkte: </label>
                    <input className=" border-4 border-black w-20" type="number" id="fang" name="fang" value={formData.fang} onChange={handleChange}/>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center font-bold mt-5">
              <label className="mr-5" htmlFor="input3">Timer länge (min)</label>
              <input className="border-4 border-black w-20" type="number" id="input3" name="timer" value={formData.timer} onChange={handleChange}/>
            </div>
            <div className=" flex items-center justify-center mt-4">
              <button className=" bg-green-300 nice-button " type="submit">Neues Spiel erstellen</button>
            </div>
          </form>
          
      </main>
    </div>

  );
}
