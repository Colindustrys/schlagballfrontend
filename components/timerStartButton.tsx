import React, { MouseEventHandler, FC, useEffect, useState } from 'react';
import GameData from '@/types/gameData';
import Image from 'next/image'

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
        <button className=' bg-green-400 nice-button flex items-center justify-center' onClick={() => onClickFunction()}>
          <h1 className='mr-3 text-2xl'>Start Timer</h1>
          <Image src="/clock.svg" alt="Clock Icon" width={35} height={35} priority/>
          </button>
      </div>
    );
  }
  
  export default TimerStartButton;