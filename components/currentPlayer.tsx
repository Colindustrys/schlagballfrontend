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
    <div className='currentPlayerBox'>
      <p>Current Player: Team: {json.currentTeam + 1} Player: {currentPlayer + 1}</p>
      <button onClick={nextPlayer}>nextPlayer</button>
    </div>
  );
}

export default CurrentPlayer;