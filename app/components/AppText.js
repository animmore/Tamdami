import React from "react";
import { Text, StyleSheet } from "react-native";
import { THEME } from "../theme";

export function AppText({ children, style }) {
  return <Text style={{ ...styles.text, ...style }}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
});
