import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { THEME } from "../theme";
import AppText from "../components/AppText";

export function Card({
  title,
  subTitle,
  image = require("../assets/jacket.jpg"),
}) {
  return (
    <View style={styles.cardContainer}>
      <Image source={image} style={{ ...styles.imageCard }} />
      <View style={styles.infoContainter}>
        <AppText style={styles.title}>Жакет на продажу!</AppText>
        <AppText style={styles.subTitle}>$125</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: THEME.WHITE,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  imageCard: {
    width: THEME.DEVICE_WINDOW_WIDTH * 0.9,
    height: THEME.DEVICE_WINDOW_HEIGHT * 0.22,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  infoContainter: {
    padding: 15,
  },
  title: {},
  subTitle: {
    color: "blue",
    paddingTop: 5,
  },
});
