import React, { MouseEventHandler, FC, useEffect, Key} from 'react';
import styles from "../app/page.module.css"
import GameData from "@/types/gameData";
import EventT from "@/types/eventT";

interface eventLog {
    events: EventT[]
}

function render(event: EventT, key: Key) {
    const date = new Date(event.timestampt);

    return (
        <tr key={key}>
            <th  className='table-element'>{date.getHours()}:{date.getMinutes()}</th>
            <th className='table-element'>{event.text}</th>
            <th className='table-element'>{event.team}</th>
            <th className='table-element'>{event.player}</th>
        </tr>
    )
}

const EventLog: React.FC<eventLog> = ({events}) => {

    ///console.log(events.slice());
    

    useEffect(() => {

    }, [events]);

  return (events.length > 0) && (
    // relative overflow-x-auto flex items-center justify-center
    <div className='flex items-center justify-center'>
        <table>
            <tbody className='border border-black border-4 text-left'>
                <tr>
                    <th className='table-element col-name'>Uhrzeit</th>
                    <th className='table-element col-name'>Punkt</th>
                    <th className='table-element col-name'>Team</th>
                    <th className='table-element col-name'>Spieler</th>
                </tr>
                {events.slice().reverse().map(render)}
            </tbody>
        </table>
    </div>
  );
}

export default EventLog;