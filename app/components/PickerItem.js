import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { AppText } from "./AppText";

export function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.appText}> {label} </AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  appText: {
    padding: 20,
  },
});
