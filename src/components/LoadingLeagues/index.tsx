import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../redux";
import { Loading } from "./loading-leagues.styled";

interface Props {
  children: React.ReactElement;
}

const LoadingLeagues: React.FC<Props> = ({ children }) => {
  const isLoadingLeagues = useSelector(
    (state: RootState) => state.leagues.isLoading
  );

  if (isLoadingLeagues) {
    return <Loading />;
  }

  return children;
};

export default LoadingLeagues;
