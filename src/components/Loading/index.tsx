import React from "react";

import { Loading } from "./loading-styled";

interface Props {
  children: React.ReactElement;
  isLoading: boolean;
}

const LoadingWrapper: React.FC<Props> = ({ children, isLoading }) => {
  if (isLoading) {
    return <Loading />;
  }

  return children;
};

export default LoadingWrapper;
