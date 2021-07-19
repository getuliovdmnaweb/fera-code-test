import React from "react";

import { View, Text, ScrollView } from "react-native";
import { DataTable } from "react-native-paper";

import { useSelector } from "react-redux";

import { RootState } from "../../redux";
import { TableHeader, TableRow } from "./Table";

const Standings: React.FC = () => {
  const standings = useSelector((state: RootState) => state.standings.list);

  if (standings.length === 0) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  console.log(standings[0].league.standings);
  return (
    <ScrollView>
      <ScrollView
        contentContainerStyle={{ width: 500, padding: 16 }}
        horizontal
      >
        <DataTable>
          <TableHeader />
          {standings[0]?.league.standings[0].map((standing: any) => {
            return <TableRow standing={standing} />;
          })}
        </DataTable>
      </ScrollView>
    </ScrollView>
  );
};

export default Standings;
