import styled from "styled-components/native";

import { Avatar } from "react-native-paper";

export const Icon = styled(Avatar.Image).attrs(({ theme }) => ({
  size: theme.sizes.icon,
}))`
  background-color: transparent;
`;
