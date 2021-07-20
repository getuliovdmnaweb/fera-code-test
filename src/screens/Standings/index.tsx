import React from "react";

import { ScrollView, useWindowDimensions } from "react-native";
import { DataTable } from "react-native-paper";
import { useSelector } from "react-redux";

import { LoadingWrapper } from "../../components";
import { RootState } from "../../redux";
import { HorizontalScroll } from "./standings.styled";
import { TableHeader, TableRow } from "./Table";

const Standings: React.FC = () => {
  const { list, isLoading } = useSelector(
    (state: RootState) => state.standings
  );

  return (
    <ScrollView>
      <HorizontalScroll horizontal>
        <LoadingWrapper isLoading={isLoading}>
          <DataTable>
            <TableHeader />
            {list[0]?.league.standings[0].map((standing: any) => (
              <TableRow key={standing.rank} standing={standing} />
            ))}
          </DataTable>
        </LoadingWrapper>
      </HorizontalScroll>
    </ScrollView>
  );
};

export default Standings;
