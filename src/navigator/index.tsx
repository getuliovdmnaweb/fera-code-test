import * as React from "react";

import { SearchLeaguesScreen, StandingsScreen } from "../screens";
import { StyledNavigator, Stack } from "./main-navigator.styled";

function MainNavigator() {
  return (
    <StyledNavigator>
      <Stack.Screen name="Search Leagues" component={SearchLeaguesScreen} />
      <Stack.Screen name="League Standings" component={StandingsScreen} />
    </StyledNavigator>
  );
}

export default MainNavigator;
