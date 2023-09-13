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
            <th>{date.getHours()}:{date.getMinutes()}</th>
            <th>{event.text}</th>
            <th>{event.team}</th>
            <th>{event.player}</th>
        </tr>
    )
}

const EventLog: React.FC<eventLog> = ({events}) => {
    useEffect(() => {

    }, [events]);

  return (
    <div>
        <table>
            <tbody>
                <tr>
                    <th>Uhrzeit</th>
                    <th>Punkt</th>
                    <th>Team</th>
                    <th>Spieler</th>
                </tr>
                {events.slice().reverse().map(render)}
            </tbody>
        </table>
    </div>
  );
}

export default EventLog;