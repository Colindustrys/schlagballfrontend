import React, { MouseEventHandler, FC, useEffect, useState } from 'react';
import GameData from '@/types/gameData';

interface myCurrentPlayer {
  pointFunc: Function
  team: number
  art: string
  playerCount: number
}

const PlayerSelector: React.FC<myCurrentPlayer> = ({pointFunc, team, art, playerCount}) => {

  function test() {
    console.log("test");
    
  }

  function renderButton(num: number) {
    num++
    return (
      <button className='player-select-button' onClick={() => pointFunc(team, num, art)}>{num}</button>
    )
  }

  return (
    <div className='currentPlayerBox grid grid-cols-4 bg-slate-200'>
      {Array.from({ length: playerCount}, (_, index) => index).map(renderButton)}
    </div>
  );
}

export default PlayerSelector;