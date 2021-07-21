import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useDispatch } from "react-redux";
import { fetchTeamInformation } from "../../../redux/actions";

import {
  AllPlayedText,
  BoldText,
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
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onNavigate = () => {
    dispatch(fetchTeamInformation(standing.team.id));
    navigation.navigate("Team Detail");
  };

  return (
    <Container key={standing.rank.toString()}>
      <RankCell style={{ backgroundColor: getRankColor(standing.rank) }}>
        {standing.rank}
      </RankCell>
      <Row>
        <TeamContainer onPress={onNavigate}>
          <TeamImage source={{ uri: standing.team.logo }} />
          <TeamCell>{standing.team.name}</TeamCell>
        </TeamContainer>
        <ScoreCell>
          <AllPlayedText>{standing.all.played}</AllPlayedText>
          <WinText>{standing.all.win}</WinText>
          <DrawText>{standing.all.draw}</DrawText>
          <LoseText>{standing.all.lose}</LoseText>
          <BoldText>{standing.points}</BoldText>
        </ScoreCell>
      </Row>
    </Container>
  );
};

export default TableRow;
