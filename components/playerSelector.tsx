import React, { MouseEventHandler, FC, useEffect, useState } from 'react';
import GameData from '@/types/gameData';

interface myCurrentPlayer {
  pointFunc: Function
  team: number
  art: string
}

const PlayerSelector: React.FC<myCurrentPlayer> = ({pointFunc, team, art}) => {

  function test() {
    console.log("test");
    
  }

  return (
    <div className='currentPlayerBox grid grid-cols-4 bg-slate-200'>
      <button className='player-select-button' onClick={() => pointFunc(team, 1, art)}>1</button>
      <button className='player-select-button' onClick={() => pointFunc(team, 2, art)}>2</button>
      <button className='player-select-button' onClick={() => pointFunc(team, 3, art)}>3</button>
      <button className='player-select-button' onClick={() => pointFunc(team, 4, art)}>4</button>
      <button className='player-select-button' onClick={() => pointFunc(team, 5, art)}>5</button>
      <button className='player-select-button' onClick={() => pointFunc(team, 6, art)}>6</button>
      <button className='player-select-button' onClick={() => pointFunc(team, 7, art)}>7</button>
      <button className='player-select-button' onClick={() => pointFunc(team, 8, art)}>8</button>
      <button className='player-select-button' onClick={() => pointFunc(team, 9, art)}>9</button>
      <button className='player-select-button' onClick={() => pointFunc(team, 10, art)}>10</button>
      <button className='player-select-button' onClick={() => pointFunc(team, 11, art)}>11</button>
      <button className='player-select-button' onClick={() => pointFunc(team, 12, art)}>12</button>
    </div>
  );
}

export default PlayerSelector;