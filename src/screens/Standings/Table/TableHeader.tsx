import React from "react";
import { Text } from "react-native";

import {
  AllPlayedText,
  Container,
  DrawText,
  Header,
  LoseText,
  RankCell,
  ScoreCell,
  TeamCell,
  TeamContainer,
  WinText,
} from "./table.styled";

const TableHeader: React.FC = () => {
  return (
    <Container>
      <RankCell>#</RankCell>
      <Header>
        <TeamContainer>
          <TeamCell>Team</TeamCell>
        </TeamContainer>
        <ScoreCell>
          <AllPlayedText>P</AllPlayedText>
          <WinText>W</WinText>
          <DrawText>D</DrawText>
          <LoseText>L</LoseText>
          <Text style={{ fontWeight: "bold" }}>Pt</Text>
        </ScoreCell>
      </Header>
    </Container>
  );
};

export default TableHeader;
