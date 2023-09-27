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
      <p className='mt-4 font-bold text-2xl'>Spieler mit Schlagrecht</p>
      <div className='border-4 border-black mb-4'>
        <p className='font-bold text-2xl'>Team: {json.currentTeam + 1}</p>
        <p className='font-bold text-2xl'>Player: {currentPlayer + 1}</p>
      </div>
      <button className=' bg-white text-xl border-black border-2 font-bold py-2.5 px-5 rounded-full' onClick={nextPlayer}>Hat geschlagen</button>
    </div>
  );
}

export default CurrentPlayer;