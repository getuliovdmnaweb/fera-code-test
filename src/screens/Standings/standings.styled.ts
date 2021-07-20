import styled from "styled-components/native";
import { Dimensions } from "react-native";

const deviceHeight = Dimensions.get("window").height;

export const HorizontalScroll = styled.ScrollView.attrs(({ theme }) => ({
  contentContainerStyle: {
    padding: 16,
    minHeight: deviceHeight,
    width: 500,
    justifyContent: "center",
  },
}))``;
