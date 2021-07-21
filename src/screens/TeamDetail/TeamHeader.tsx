import React from "react";
import { View } from "react-native";

import {
  CallendarIcon,
  CentralizedRow,
  WhiteSpan,
  Header,
  TeamLogo,
} from "./team-detail.styled";

interface Props {
  team: Team;
}

const TeamHeader: React.FC<Props> = ({ team }) => {
  return (
    <Header>
      <CentralizedRow>
        <TeamLogo source={{ uri: team.logo }} />
        <View style={{ alignItems: "flex-start" }}>
          <CentralizedRow>
            <CallendarIcon icon="calendar" />
            <WhiteSpan>{team?.founded}</WhiteSpan>
          </CentralizedRow>
          <CentralizedRow>
            <CallendarIcon icon="flag" />
            <WhiteSpan>{team?.country}</WhiteSpan>
          </CentralizedRow>
          <CentralizedRow>
            <CallendarIcon icon="subtitles-outline" />
            <WhiteSpan>{team?.name}</WhiteSpan>
          </CentralizedRow>
        </View>
      </CentralizedRow>
    </Header>
  );
};

export default TeamHeader;
