import React from "react";
import { ScrollView, View, Text } from "react-native";
import { useSelector } from "react-redux";

import { RootState } from "../../redux";
import {
  CallendarIcon,
  CentralizedRow,
  WhiteSpan,
  DarkSpan,
  Header,
  TeamLogo,
  Body,
  Title,
  Row,
} from "./team-detail.styled";

const TeamDetail: React.FC = () => {
  const teamInformation = useSelector((state: RootState) => state.team.info);

  return (
    <ScrollView>
      <Header>
        <CentralizedRow>
          <TeamLogo source={{ uri: teamInformation?.team?.logo }} />
          <View style={{ alignItems: "flex-start" }}>
            <CentralizedRow>
              <CallendarIcon icon="calendar" />
              <WhiteSpan>{teamInformation?.team?.founded}</WhiteSpan>
            </CentralizedRow>
            <CentralizedRow>
              <CallendarIcon icon="flag" />
              <WhiteSpan>{teamInformation?.team?.country}</WhiteSpan>
            </CentralizedRow>
            <CentralizedRow>
              <CallendarIcon icon="subtitles-outline" />
              <WhiteSpan>{teamInformation?.team?.name}</WhiteSpan>
            </CentralizedRow>
          </View>
        </CentralizedRow>
      </Header>
      <Body>
        <Title>Venue Info</Title>
        <Row>
          <DarkSpan>Name: </DarkSpan>
          <Text>{teamInformation?.venue?.name}</Text>
        </Row>
        <Row>
          <DarkSpan>Address: </DarkSpan>
          <Text>{teamInformation?.venue?.address}</Text>
        </Row>
        <Row>
          <DarkSpan>City: </DarkSpan>
          <Text>{teamInformation?.venue?.city}</Text>
        </Row>
        <Row>
          <DarkSpan>Capacity: </DarkSpan>
          <Text>{teamInformation?.venue?.capacity} people</Text>
        </Row>
      </Body>
    </ScrollView>
  );
};

export default TeamDetail;
