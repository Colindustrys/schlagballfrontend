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
    <div className=' text-center'>
      <p className='mt-8 font-bold text-2xl'>Team: {json.currentTeam + 1}</p>
      <p className='mb-8 font-bold text-2xl'>Player: {currentPlayer + 1}</p>
      <button className=' bg-white text-xl border border-black border-2 font-bold py-2.5 px-5 rounded-full' onClick={nextPlayer}>nextPlayer</button>
    </div>
  );
}

export default CurrentPlayer;