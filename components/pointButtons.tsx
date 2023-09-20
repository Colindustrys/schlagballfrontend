import React, { MouseEventHandler, FC, useEffect, useState } from 'react';
import PlayerSelector from './playerSelector';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { PopupPosition } from 'reactjs-popup/dist/types';

interface myPointButtons {
  pointFunc: Function
  team: number
  playerCount: number
}

const PointButtons: React.FC<myPointButtons> = ({pointFunc, team, playerCount}) => {

  let popupPos: PopupPosition = "center center"
  if (team == 1) {
    popupPos = "right center"
  } else {
    popupPos = "left center"
  }

  return (
    <div className='currentPlayerBox flex flex-col font-bold'>
      <Popup trigger={<button className='point-button'> Weitschlagpunkt</button>} position={popupPos}>
        <PlayerSelector pointFunc={pointFunc} team={team} playerCount={playerCount} art="Weitschlagpunkt"/>
      </Popup>
      <Popup trigger={<button className='point-button'> Laufpunkt</button>} position={popupPos}>
        <PlayerSelector pointFunc={pointFunc} team={team} playerCount={playerCount} art="Laufpunkt"/>
      </Popup>
      <Popup trigger={<button className='point-button'> Abwurfpunkt</button>} position={popupPos}>
        <PlayerSelector pointFunc={pointFunc} team={team} playerCount={playerCount} art="Abwurfpunkt"/>
      </Popup>
      <Popup trigger={<button className='point-button'> Fangpunkt</button>} position={popupPos}>
        <PlayerSelector pointFunc={pointFunc} team={team} playerCount={playerCount} art="Fangpunkt"/>
      </Popup>
    </div>
  );
}

export default PointButtons;