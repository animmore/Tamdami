import React from "react";
import { Text } from "react-native";
import { THEME } from "../theme";
import defaultStyles from "../styles";

export function AppText({ children, style, ...otherProps }) {
  return <Text style={[defaultStyles, style]}>{children}</Text>;
}
