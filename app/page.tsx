"use client"
import { useState } from "react";
import Cookies from "js-cookie";

let myJson = {
  "team1name": "Eagles",
  "team1points": 30, 
  "team2name": "lakers",
  "team2points": 20
}


export default function Home() {

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
    Cookies.set('myJsonData', JSON.stringify(json), { sameSite: 'lax' });
  }

  return <>

    <header>
      <h1>My Page</h1>
    </header>
    <body>
      <p>{json.team1name}: {json.team1points}</p>
      <p>{json.team2name}: {json.team2points}</p>
      <button onClick={pointTeam1}>point for team 1</button>
      <button onClick={pointTeam2}>point for team 2</button>

      <button onClick={loadData}>load</button>
      <button onClick={saveData}>save</button>
    </body>

  </>

}
