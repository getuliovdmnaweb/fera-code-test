import * as React from "react";

import {
  SearchLeaguesScreen,
  StandingsScreen,
  TeamDetailScreen,
} from "../screens";
import { StyledNavigator, Stack } from "./main-navigator.styled";

function MainNavigator() {
  return (
    <StyledNavigator>
      <Stack.Screen name="Search Leagues" component={SearchLeaguesScreen} />
      <Stack.Screen name="League Standings" component={StandingsScreen} />
      <Stack.Screen name="Team Detail" component={TeamDetailScreen} />
    </StyledNavigator>
  );
}

export default MainNavigator;
