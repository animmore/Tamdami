import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { THEME } from "../theme";

export function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleleIcon}></View>
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
    width: 50,
    height: 50,
    backgroundColor: THEME.MAIN_PEACH,
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleleIcon: {
    width: 50,
    height: 50,
    backgroundColor: THEME.LIGHT_BLUE,
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
