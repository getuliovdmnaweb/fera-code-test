import React from "react";
import { Text } from "react-native";
import { List } from "react-native-paper";

import {
  Accordion,
  AccordionItem,
  DateContainer,
  EndDate,
  Icon,
  StartDate,
} from "./leagues-list.styled";

interface Props {
  leagues: LeagueInfo[];
}

const LeaguesList: React.FC<Props> = ({ leagues }) => {
  return (
    <List.AccordionGroup>
      {leagues.map(({ league, seasons }) => (
        <Accordion
          key={league.id.toString()}
          left={() => <Icon source={{ uri: league.logo }} />}
          title={league.name}
          id={league.id.toString()}
        >
          {seasons.map((season, index) => {
            const startDate = new Date(season.start);
            const endDate = new Date(season.end);
            return (
              <AccordionItem
                key={index.toString()}
                left={(props) => <List.Icon {...props} icon="calendar" />}
                right={() => (
                  <DateContainer>
                    <StartDate>
                      {startDate.getFullYear()}/{startDate.getMonth()}
                    </StartDate>
                    <Text>to</Text>
                    <EndDate>
                      {endDate.getFullYear()}/{endDate.getMonth()}
                    </EndDate>
                  </DateContainer>
                )}
                title={season.year.toString()}
              />
            );
          })}
        </Accordion>
      ))}
    </List.AccordionGroup>
  );
};

export default LeaguesList;
