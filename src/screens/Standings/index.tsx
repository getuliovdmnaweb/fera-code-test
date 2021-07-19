import React from "react";

import { ScrollView, useWindowDimensions } from "react-native";
import { DataTable } from "react-native-paper";
import { useSelector } from "react-redux";

import { LoadingStandings } from "../../components";

import { RootState } from "../../redux";
import { HorizontalScroll } from "./standings.styled";
import { TableHeader, TableRow } from "./Table";

const Standings: React.FC = () => {
  const standings = useSelector((state: RootState) => state.standings.list);
  return (
    <ScrollView>
      <HorizontalScroll horizontal>
        <LoadingStandings>
          <DataTable>
            <TableHeader />
            {standings[0]?.league.standings[0].map((standing: any) => (
              <TableRow key={standing.rank} standing={standing} />
            ))}
          </DataTable>
        </LoadingStandings>
      </HorizontalScroll>
    </ScrollView>
  );
};

export default Standings;
