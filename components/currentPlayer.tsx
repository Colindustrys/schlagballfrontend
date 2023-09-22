import React, { MouseEventHandler, FC, useEffect, useState } from 'react';
import GameData from '@/types/gameData';

interface myCurrentPlayer {
  json: GameData
  nextPlayer: MouseEventHandler
}

const CurrentPlayer: React.FC<myCurrentPlayer> = ({json, nextPlayer}) => {

  const [currentPlayer, setCurrentPlayer] = useState(0);

  useEffect(() => {
    setCurrentPlayerFunc()
  }, [json]);

  function setCurrentPlayerFunc() {
    if (json.currentTeam == 0) {
      //team 1
      setCurrentPlayer(json.team1currentPlayer)
    } else {
      //team 2
      setCurrentPlayer(json.team2currentPlayer)
    }
  }

  return (
    <div className='text-center'>
      <p className='font-bold text-2xl'>Spieler mit Schlagrecht:</p>
      <div className=' border-4 border-black p-2'>
        <p className='font-bold text-2xl'>Team: {json.currentTeam + 1}</p>
        <p className='font-bold text-2xl'>Player: {currentPlayer + 1}</p>
        <button className=' bg-white text-xl border-black border-4 font-bold -full nice-button' onClick={nextPlayer}>Hat geschlagen</button>
      </div>
    </div>
  );
}

export default CurrentPlayer;