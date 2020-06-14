import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import AppText from "../components/AppText";
import { THEME } from "../theme";

export function ListItem({
  image = require("../assets/mosh.jpg"),
  user,
  subTitle,
}) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.infoContainer}>
        <AppText style={styles.infoName}>John Doe</AppText>
        <AppText style={styles.subTitle}>5 Listings</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "flex-start",
    marginHorizontal: THEME.DEVICE_SCREEN_WIDTH * 0.07,
    marginTop: 25,
  },
  image: {
    borderRadius: 50,
    height: THEME.DEVICE_SCREEN_HEIGHT * 0.06,
    width: THEME.DEVICE_SCREEN_HEIGHT * 0.06,
  },
  infoContainer: {
    marginHorizontal: 10,
  },
  infoName: {
    fontWeight: "400",
  },
  subTitle: {
    color: THEME.GREY,
  },
});
