import React from "react";

import { View, Text } from "react-native";
import { useSelector } from "react-redux";

import { RootState } from "../../redux";

const Standings: React.FC = () => {
  const standings = useSelector((state: RootState) => state.standings.list);

  return (
    <View>
      <Text>{JSON.stringify(standings)}</Text>
    </View>
  );
};

export default Standings;
