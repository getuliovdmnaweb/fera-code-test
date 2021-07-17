import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SearchLeaguesScreen } from "../screens";

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search Leagues" component={SearchLeaguesScreen} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
