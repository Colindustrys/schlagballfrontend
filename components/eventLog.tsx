import React, { MouseEventHandler, FC } from 'react';
import styles from "../app/page.module.css"
import GameData from "@/types/gameData";
import EventT from "@/types/eventT";

interface eventLog {
    json: GameData
}

function render(event: EventT) {
    const date = new Date(event.timestampt);

    return (
        <tr>
            <th>{date.getHours()}:{date.getMinutes()}</th>
            <th>{event.text}</th>
            <th>{event.team}</th>
            <th>{event.player}</th>
        </tr>
    )
}

const EventLog: React.FC<eventLog> = ({json}) => {

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
                {json.events.map(render)}
            </tbody>
        </table>
    </div>
  );
}

export default EventLog;