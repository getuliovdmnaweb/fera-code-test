import React from "react";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";

import { LoadingWrapper } from "../../components";
import { RootState } from "../../redux";
import TeamBody from "./TeamBody";
import TeamHeader from "./TeamHeader";

const TeamDetail: React.FC = () => {
  const { info, isLoading } = useSelector((state: RootState) => state.team);

  return (
    <ScrollView>
      <LoadingWrapper isLoading={isLoading}>
        <>
          <TeamHeader team={info?.team} />
          <TeamBody venue={info?.venue} />
        </>
      </LoadingWrapper>
    </ScrollView>
  );
};

export default TeamDetail;
