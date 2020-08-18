import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { THEME } from "../theme";

export function AppButton({ title, style, onPress, isDisabled, color = THEME.MAIN_PEACH }) {
  return (
    <TouchableOpacity
      style={{ ...styles.appBtn, ...style, backgroundColor: color }}
      onPress={onPress}
      disabled={isDisabled}
    >
      <Text style={{ ...styles.title, ...style }}>{title}</Text>
    </TouchableOpacity>
  );
}

export const styles = StyleSheet.create({
  appBtn: {
    width: "100%",
    height: THEME.DEVICE_WINDOW_HEIGHT * 0.06,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    color: THEME.WHITE,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
