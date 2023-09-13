import React, { MouseEventHandler, FC, useEffect, useState } from 'react';
import GameData from '@/types/gameData';

interface timerStartButton {
    json: GameData
}

const TimerStartButton: React.FC<timerStartButton> = ({json}) => {
    function onClick() {
        json.timestamp = Date.now()
    }

    return (
      <div>
        <button onClick={onClick}>Start Timer</button>
      </div>
    );
  }
  
  export default TimerStartButton;