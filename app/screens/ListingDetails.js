import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import AppText from "../components/AppText";
import { THEME } from "../theme";

export function ListingDetails({
  image = require("../assets/mosh.jpg"),
  user,
}) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View>
        <AppText>John Doe</AppText>
        <AppText>5 Listings</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    borderRadius: 50,
    height: THEME.DEVICE_SCREEN_HEIGHT * 0.06,
    width: THEME.DEVICE_SCREEN_HEIGHT * 0.06,
  },
});
