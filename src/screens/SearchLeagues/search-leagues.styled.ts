import styled from "styled-components/native";
import { TextInput } from "react-native-paper";

export const ScrollContainer = styled.ScrollView`
  padding-right: ${({ theme }) => theme.spacing.md};
  padding-left: ${({ theme }) => theme.spacing.md};
`;

export const Input = styled(TextInput)`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  border-color: ${({ theme }) => theme.colors.lightBlue};
`;
