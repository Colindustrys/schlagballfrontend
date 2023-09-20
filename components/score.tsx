import React, { MouseEventHandler, FC, useEffect, useState } from 'react';
import GameData from '@/types/gameData';

interface myCurrentPlayer {
  json: GameData
}

const ScoreBoard: React.FC<myCurrentPlayer> = ({json}) => {

  return (
    <div className='text-center text-5xl p-2 font-bold content-center'>
      <h2>{json.team1points}:{json.team2points}</h2>
    </div>
  );
}

export default ScoreBoard;