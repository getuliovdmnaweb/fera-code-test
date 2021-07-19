import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import {
  Container,
  Header,
  RankCell,
  Row,
  ScoreCell,
  TeamCell,
  TeamContainer,
  TeamImage,
} from "./table.styled";

interface Props {
  standing: StandingInfo;
}

const TableRow: React.FC<Props> = ({ standing }) => {
  const getRankColor = (rank: number) => {
    if (rank < 5) {
      return "#0094E5";
    }
    if (rank >= 5 && rank < 7) {
      return "#1175A8";
    }
    if (rank >= 7 && rank < 13) {
      return "#1F304E";
    }
    if (rank >= 17 && rank < 21) {
      return "#9E203E";
    }
  };

  return (
    <Container>
      <RankCell style={{ backgroundColor: getRankColor(standing.rank) }}>
        {standing.rank}
      </RankCell>
      <Row>
        <TeamContainer>
          <TeamImage source={{ uri: standing.team.logo }} />
          <TeamCell>{standing.team.name}</TeamCell>
        </TeamContainer>
        <ScoreCell>
          <Text>{standing.all.played}</Text>
          <Text>{standing.all.win}</Text>
          <Text>{standing.all.draw}</Text>
          <Text>{standing.all.lose}</Text>
          <Text>{standing.points}</Text>
        </ScoreCell>
      </Row>
    </Container>
  );
};

export default TableRow;
