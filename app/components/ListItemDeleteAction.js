import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { THEME } from "../theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name={"trash-can"}
          size={THEME.DEVICE_WINDOW_HEIGHT * 0.035}
          color={THEME.WHITE}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.DANGER,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
