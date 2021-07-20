import React from "react";
import { Text } from "react-native";
import {
  AllPlayedText,
  Container,
  DrawText,
  LoseText,
  RankCell,
  Row,
  ScoreCell,
  TeamCell,
  TeamContainer,
  TeamImage,
  WinText,
} from "./table.styled";

interface Props {
  standing: StandingInfo;
}

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

const TableRow: React.FC<Props> = ({ standing }) => {
  return (
    <Container key={standing.rank.toString()}>
      <RankCell style={{ backgroundColor: getRankColor(standing.rank) }}>
        {standing.rank}
      </RankCell>
      <Row>
        <TeamContainer>
          <TeamImage source={{ uri: standing.team.logo }} />
          <TeamCell>{standing.team.name}</TeamCell>
        </TeamContainer>
        <ScoreCell>
          <AllPlayedText>{standing.all.played}</AllPlayedText>
          <WinText>{standing.all.win}</WinText>
          <DrawText>{standing.all.draw}</DrawText>
          <LoseText>{standing.all.lose}</LoseText>
          <Text style={{ fontWeight: "bold" }}>{standing.points}</Text>
        </ScoreCell>
      </Row>
    </Container>
  );
};

export default TableRow;
