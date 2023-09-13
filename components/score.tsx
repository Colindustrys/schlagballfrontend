import React, { MouseEventHandler, FC, useEffect, useState } from 'react';
import GameData from '@/types/gameData';

interface myCurrentPlayer {
  json: GameData
}

const ScoreBoard: React.FC<myCurrentPlayer> = ({json}) => {

  return (
    <div className='scoreBox'>
      <h2>{json.team1points}:{json.team2points}</h2>
      
    </div>
  );
}

export default ScoreBoard;