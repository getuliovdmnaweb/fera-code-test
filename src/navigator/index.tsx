import * as React from "react";

import { SearchLeaguesScreen } from "../screens";
import { StyledNavigator, Stack } from "./main-navigator.styled";

function MainNavigator() {
  return (
    <StyledNavigator>
      <Stack.Screen name="Search Leagues" component={SearchLeaguesScreen} />
    </StyledNavigator>
  );
}

export default MainNavigator;
