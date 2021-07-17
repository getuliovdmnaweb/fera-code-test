import React from "react";
import { List } from "react-native-paper";

import { Icon } from "./leagues-list.styled";

interface Props {
  leagues: LeagueInfo[];
}

const LeaguesList: React.FC<Props> = ({ leagues }) => {
  return (
    <List.AccordionGroup>
      {leagues.map(({ league, seasons }) => (
        <List.Accordion
          key={league.id.toString()}
          left={() => <Icon source={{ uri: league.logo }} />}
          title={league.name}
          id={league.id.toString()}
        >
          {seasons.map((season, index) => (
            <List.Item key={index.toString()} title={season.year.toString()} />
          ))}
        </List.Accordion>
      ))}
    </List.AccordionGroup>
  );
};

export default LeaguesList;
