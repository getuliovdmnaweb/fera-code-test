interface StandingInfo {
  all: All;
  points: number;
  team: StandingTeam;
  rank: number;
}

interface All {
  draw: number;
  lose: number;
  played: number;
  win: number;
}
interface StandingTeam {
  id: number;
  name: string;
  logo: string;
}
