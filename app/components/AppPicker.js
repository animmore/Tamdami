import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { THEME } from "../theme";
import defaultStyles from "../styles";
import { AppText } from "./AppText";

export function AppPicker({ icon, placeholder, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons name={icon} size={20} color={THEME.GREY} style={styles.icon} />
      )}
      <AppText style={styles.text}> {placeholder} </AppText>
      <MaterialCommunityIcons name="chevron-down" size={20} color={THEME.GREY} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.LIGHT_GREY,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});
