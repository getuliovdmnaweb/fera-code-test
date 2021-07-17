import React from "react";
import { ScrollView } from "react-native";
import { TextInput, List, Avatar } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { LeaguesList } from "../../components";
import { useInputSubmit } from "../../hooks";
import { RootState } from "../../redux";
import { fetchSearchedLeague } from "../../redux/actions";

const SearchLeagues: React.FC = () => {
  const leagues = useSelector((state: RootState) => state.leagues.list);
  const dispatch = useDispatch();

  const fetchLeagues = () => {
    dispatch(fetchSearchedLeague(inputText));
  };

  const { inputText, setInputText, onSubmit } = useInputSubmit({
    onFetch: fetchLeagues,
  });

  return (
    <ScrollView>
      <TextInput
        label="Country"
        value={inputText}
        placeholder="Type Country Code or Country Name"
        onChangeText={setInputText}
        onSubmitEditing={onSubmit}
        mode="outlined"
      />
      <LeaguesList leagues={leagues} />
    </ScrollView>
  );
};

export default SearchLeagues;
