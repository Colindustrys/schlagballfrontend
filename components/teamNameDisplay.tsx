import React, { MouseEventHandler, FC, useEffect, useState } from 'react';
import GameData from '@/types/gameData';

interface myCurrentPlayer {
  json: GameData
  teamNR: number
}

const TeamNameDisplay: React.FC<myCurrentPlayer> = ({json, teamNR}) => {

  const [teamName, setTeamName] = useState("")

  useEffect(() => {
    setTeamNameFunc();
  }, [json]);

  function setTeamNameFunc() {
    if (teamNR == 1) {
      setTeamName(json.team1name)
    } else {
      setTeamName(json.team2name)
    }
  }

  return (
    <div>
      <h2 className='truncate'>{teamName}</h2>
      
    </div>
  );
}

export default TeamNameDisplay;