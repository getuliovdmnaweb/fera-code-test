import styled from "styled-components/native";

import { ActivityIndicator } from "react-native-paper";

export const Loading = styled(ActivityIndicator).attrs(({ theme }) => ({
  color: theme.colors.darkBlue,
  size: "large",
}))``;
