import React, { MouseEventHandler, FC, useEffect, useState } from 'react';
import GameData from '@/types/gameData';

interface timerStartButton {
    json: GameData
    onClickFunction: Function
}

const TimerStartButton: React.FC<timerStartButton> = ({json, onClickFunction}) => {
    // function onClick() {
    //     if (json.timestamp === null) {
    //         json.timestamp = Date.now()
    //     }
    // }

    return (
      <div>
        <button className=' bg-green-400 nice-button' onClick={() => onClickFunction()}>Start Timer</button>
      </div>
    );
  }
  
  export default TimerStartButton;