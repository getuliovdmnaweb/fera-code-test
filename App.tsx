import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import MainNavigator from "./src/navigator";
import store from "./src/redux";
import { theme } from "./src/theme";
import { ThemeProvider } from "./src/theme/styled-components";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Provider store={store}>
          <MainNavigator />
          <StatusBar style="auto" />
        </Provider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
