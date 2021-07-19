import React from "react";
import { Text, View } from "react-native";

import {
  Container,
  Header,
  RankCell,
  ScoreCell,
  TeamCell,
  TeamContainer,
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
          <Text>MP</Text>
          <Text>W</Text>
          <Text>D</Text>
          <Text>L</Text>
          <Text>Pts</Text>
        </ScoreCell>
      </Header>
    </Container>
  );
};

export default TableHeader;
