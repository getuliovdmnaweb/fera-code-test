import styled from "styled-components/native";

import { Avatar } from "react-native-paper";

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  padding: ${({ theme }) => theme.spacing.md};
  align-items: center;
`;

export const CentralizedRow = styled.View`
  flex-direction: row;
  justify-content: center
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CallendarIcon = styled(Avatar.Icon).attrs(({ theme }) => ({
  size: 30,
  color: "white",
}))`
  background-color: ${({ theme }) => theme.colors.darkBlue};
`;

export const WhiteSpan = styled.Text`
  color: white;
  font-weight: bold;
  font-size: ${({ theme }) => theme.spacing.md};
`;

export const DarkSpan = styled.Text`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: bold;
  font-size: ${({ theme }) => theme.spacing.md};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.darkBlue};
  align-self: center;
  font-weight: bold;
  font-size: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const TeamLogo = styled.Image`
  width: ${({ theme }) => theme.images.sm};
  height: ${({ theme }) => theme.images.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  margin-right: ${({ theme }) => theme.spacing.md};
`;

export const Body = styled.View`
  padding: ${({ theme }) => theme.spacing.md};
`;

export const TeamOption = styled.Text`
  color: ${({ theme }) => theme.colors.darkBlue};
`;
