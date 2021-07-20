import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { List } from "react-native-paper";
import { useDispatch } from "react-redux";

import {
  Accordion,
  AccordionItem,
  DateContainer,
  EndDate,
  Icon,
  StartDate,
} from "./leagues-list.styled";
import { fetchLeagueStandings } from "../../redux/actions";

interface Props {
  leagues: LeagueInfo[];
}

const LeaguesList: React.FC<Props> = ({ leagues }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onNavigate = (leagueId: number, leagueYear: number) => {
    navigation.navigate("League Standings", {
      leagueId,
      leagueYear,
    });
    dispatch(fetchLeagueStandings(leagueId, leagueYear));
  };

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
                onPress={() => onNavigate(league.id, season.year)}
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
