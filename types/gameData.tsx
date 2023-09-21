import EventT from "@/types/eventT";

interface GameData {
  team1name: string;
  team1points: number;
  team1currentPlayer: number;
  team1playerCount: number;

  team2name: string;
  team2points: number;
  team2currentPlayer: number;
  team2playerCount: number;

  currentTeam: number;

  weitschlag: number,
  lauf: number,
  abwurf: number,
  fang: number,

  timestamp: number | null,
  setGameLength: number
  events: EventT[]
}

export default GameData;
