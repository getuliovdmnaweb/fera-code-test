import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../redux";
import { Loading } from "../Loading";

interface Props {
  children: React.ReactElement;
}

const LoadingStandings: React.FC<Props> = ({ children }) => {
  const isLoadingStandings = useSelector(
    (state: RootState) => state.standings.isLoading
  );

  if (isLoadingStandings) {
    return <Loading />;
  }

  return children;
};

export default LoadingStandings;
