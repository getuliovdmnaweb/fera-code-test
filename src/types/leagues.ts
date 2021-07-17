interface LeagueInfo {
  country: Country;
  league: League;
  seasons: Season[];
}

interface Country {
  name: string;
  code: string;
  flag: string;
}

interface League {
  id: number;
  name: string;
  type: string;
  logo: string;
}

interface Season {
  current: boolean;
  end: string;
  start: string;
  year: number;
}
