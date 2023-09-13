import React, { MouseEventHandler, FC, useEffect, useState } from 'react';
import GameData from '@/types/gameData';

interface timeLeft {
    json: GameData
    endGameCallback: Function
}

const TimeLeft: React.FC<timeLeft> = ({json, endGameCallback}) => {
    const [timeMinutes, setMinutes] = useState(0);
    const [timeSeconds, setSeconds] = useState(0)

    var canAlert = true;

    useEffect(() => {
        const intervalId = setInterval(() => {
            const difference: number = json.setGameLength * 60 - ((Date.now() - json.timestamp) / 1000);
        if (difference <= 0) {
            if (canAlert) {
                canAlert = false;
                endGameCallback();
            }
            setMinutes(0);
            setSeconds(0);
        } else {
            const minutes: number = Math.floor(difference / 60);
            const seconds: number = Math.round(difference - (minutes * 60));

            setMinutes(minutes);
            setSeconds(seconds);
        }

        

          }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return <div>{timeMinutes}:{timeSeconds}</div>;
};

export default TimeLeft;
