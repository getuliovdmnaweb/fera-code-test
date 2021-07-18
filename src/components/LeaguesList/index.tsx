import React from "react";
import { Text, View } from "react-native";
import { List } from "react-native-paper";

import { Accordion, AccordionItem, Icon } from "./leagues-list.styled";

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
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: 8,
                    }}
                  >
                    <Text style={{ marginRight: 8 }}>
                      {startDate.getFullYear()}/{startDate.getMonth()}
                    </Text>
                    <Text>to</Text>
                    <Text style={{ marginLeft: 8 }}>
                      {endDate.getFullYear()}/{endDate.getMonth()}
                    </Text>
                  </View>
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
