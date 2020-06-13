import React from "react";
import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  appBtn: {
    width: "90%",
    height: THEME.DEVICE_WINDOW_HEIGHT * 0.06,
    backgroundColor: THEME.MAIN_PEACH,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  appBtnTitle: {
    fontSize: 16,
    color: THEME.WHITE,
  },
});
