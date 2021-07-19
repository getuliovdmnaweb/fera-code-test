import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
`;

export const Header = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md};

  background-color: ${({ theme }) => theme.colors.lightGray};
`;

export const Row = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.lightBlue};
`;

export const TeamContainer = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const TeamImage = styled.Image`
  height: ${({ theme }) => theme.sizes.icon}px;
  width: ${({ theme }) => theme.sizes.icon}px;
  margin-right: ${({ theme }) => theme.spacing.md};
`;

export const RankCell = styled.Text`
  text-align: center;
  width: ${({ theme }) => theme.spacing.lg};
  padding-top: 19px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.lightGray};

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.lightBlue};
`;

export const TeamCell = styled.Text`
  font-weight: bold;
`;
export const ScoreCell = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;
