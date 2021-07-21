import React from "react";

import { DarkSpan, Body, Title, Row, TeamOption } from "./team-detail.styled";

interface Props {
  venue: Venue;
}

const TeamBody: React.FC<Props> = ({ venue }) => {
  return (
    <Body>
      <Title>Venue Info</Title>
      <Row>
        <DarkSpan>Name: </DarkSpan>
        <TeamOption>{venue?.name}</TeamOption>
      </Row>
      <Row>
        <DarkSpan>Address: </DarkSpan>
        <TeamOption>{venue?.address}</TeamOption>
      </Row>
      <Row>
        <DarkSpan>City: </DarkSpan>
        <TeamOption>{venue?.city}</TeamOption>
      </Row>
      <Row>
        <DarkSpan>Capacity: </DarkSpan>
        <TeamOption>{venue?.capacity} people</TeamOption>
      </Row>
    </Body>
  );
};

export default TeamBody;
