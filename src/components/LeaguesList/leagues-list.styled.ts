import styled from "styled-components/native";

import { Avatar, List } from "react-native-paper";

export const Icon = styled(Avatar.Image).attrs(({ theme }) => ({
  size: theme.sizes.icon,
}))`
  background-color: transparent;
`;

export const Accordion = styled(List.Accordion).attrs(({ theme }) => ({
  titleStyle: {
    color: "white",
  },
}))`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  border-width: 1px;
  border-radius: 4px;
  border-color: gray;
`;

export const AccordionItem = styled(List.Item)`
  background-color: ${({ theme }) => theme.colors.lightBlue};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const DateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm};
`;

export const StartDate = styled.Text`
  margin-right: ${({ theme }) => theme.spacing.sm};
`;
export const EndDate = styled.Text`
  margin-left: ${({ theme }) => theme.spacing.sm};
`;
