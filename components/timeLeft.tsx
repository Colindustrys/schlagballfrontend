import React, { MouseEventHandler, FC, useEffect, useState } from 'react';
import GameData from '@/types/gameData';

interface timeLeft {
    json: GameData
    endGameCallback: Function
}

const TimeLeft: React.FC<timeLeft> = ({json,  endGameCallback}) => {
    const [timeMinutes, setMinutes] = useState(0);
    const [timeSeconds, setSeconds] = useState(0);

    var canAlert = true;
    var startDate = new Date((json.timestamp === null) ? 0 : json.timestamp );
    

    useEffect(() => {
        const intervalId = setInterval(() => {
        if (json.timestamp === null) {
            setMinutes(0)
            setSeconds(0)
        } else {
            const difference: number = json.setGameLength * 60 - ((Date.now() - json.timestamp) / 1000);
            if (difference <= 0) {
                if (canAlert) {
                    canAlert = false;
                    endGameCallback();
                    json.timestamp = null;
                    canAlert = true;
                }
            } else {
                const minutes: number = Math.floor(difference / 60);
                const seconds: number = Math.round(difference - (minutes * 60));

                setMinutes(minutes);
                setSeconds(seconds);
            }
        }
          }, 1000);
        return () => clearInterval(intervalId);
    }, [json]);

    return <div>
        <div>Läuft seit {startDate.getHours()}:{startDate.getMinutes()}, {startDate.toDateString()}</div>
        <div>Läuft noch {timeMinutes}:{timeSeconds} minuten</div>
    </div>;
};

export default TimeLeft;
