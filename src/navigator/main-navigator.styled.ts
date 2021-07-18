import styled from "styled-components/native";

import { createStackNavigator } from "@react-navigation/stack";

export const Stack = createStackNavigator();

export const StyledNavigator = styled(Stack.Navigator).attrs(({ theme }) => ({
  screenOptions: {
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: theme.colors.darkBlue,
    },
    headerTintColor: "white",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  },
}))``;
