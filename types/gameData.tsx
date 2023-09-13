import EventT from "@/types/eventT";

interface GameData {
  team1name: string;
  team1points: number;
  team1currentPlayer: number;

  team2name: string;
  team2points: number;
  team2currentPlayer: number;

  currentTeam: number;

  timestamp: number,
  setGameLength: number
  events: EventT[]
}

export default GameData;
