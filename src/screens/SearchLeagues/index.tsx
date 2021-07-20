import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { LeaguesList, LoadingWrapper } from "../../components";
import { useInputSubmit } from "../../hooks";
import { RootState } from "../../redux";
import { fetchSearchedLeague } from "../../redux/actions";
import { ScrollContainer, Input } from "./search-leagues.styled";

const SearchLeagues: React.FC = () => {
  const { list, isLoading } = useSelector((state: RootState) => state.leagues);
  const dispatch = useDispatch();

  const fetchLeagues = () => {
    dispatch(fetchSearchedLeague(inputText));
  };

  const { inputText, setInputText, onSubmit } = useInputSubmit({
    onFetch: fetchLeagues,
  });

  return (
    <ScrollContainer>
      <Input
        label="Country Code"
        value={inputText}
        placeholder="Type Country Code Ex.:(BR,FR,US...)"
        onChangeText={setInputText}
        onSubmitEditing={onSubmit}
        maxLength={2}
        right={<Input.Affix text="/2" />}
      />
      <LoadingWrapper isLoading={isLoading}>
        <LeaguesList leagues={list} />
      </LoadingWrapper>
    </ScrollContainer>
  );
};

export default SearchLeagues;
