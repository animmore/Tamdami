import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { THEME } from "../theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons
          name="close"
          color="white"
          size={THEME.DEVICE_WINDOW_HEIGHT * 0.045}
        />
      </View>
      <View style={styles.deleleIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={THEME.DEVICE_WINDOW_HEIGHT * 0.045}
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.BLACK,
    flex: 1,
    width: "100%",
  },
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleleIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
