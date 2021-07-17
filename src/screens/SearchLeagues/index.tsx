import React from "react";
import { ScrollView } from "react-native";
import { TextInput, List, Avatar } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { fetchSearchedLeague } from "../../redux/actions";

const SearchLeagues: React.FC = () => {
  const [text, setText] = React.useState("");
  const leagues = useSelector((state: RootState) => state.leagues.list);
  const dispatch = useDispatch();

  const clearInput = () => {
    setText("");
  };
  const onFetch = () => {
    dispatch(fetchSearchedLeague(text));
  };
  const onSubmit = () => {
    onFetch();
    clearInput();
  };

  return (
    <ScrollView>
      <TextInput
        label="Country"
        value={text}
        placeholder="Type Country Code or Country Name"
        onChangeText={setText}
        onSubmitEditing={onSubmit}
        mode="outlined"
      />
      <List.AccordionGroup>
        {leagues.map(({ league, seasons }) => (
          <List.Accordion
            left={() => (
              <Avatar.Image
                style={{ backgroundColor: "transparent" }}
                size={24}
                source={{ uri: league.logo }}
              />
            )}
            title={league.name}
            id={league.id.toString()}
          >
            {seasons.map((season: any) => (
              <List.Item title={season.year.toString()} />
            ))}
          </List.Accordion>
        ))}
      </List.AccordionGroup>
    </ScrollView>
  );
};

export default SearchLeagues;
