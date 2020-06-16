import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { THEME } from "../theme";
import { AppText } from "./AppText";

export function Card({
  title,
  subTitle,
  image = require("../assets/jacket.jpg"),
}) {
  return (
    <View style={styles.cardContainer}>
      <Image source={image} style={{ ...styles.imageCard }} />
      <View style={styles.infoContainter}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
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
    overflow: "hidden",
    width: "100%",
  },
  imageCard: {
    width: THEME.DEVICE_WINDOW_WIDTH * 0.9,
    height: THEME.DEVICE_WINDOW_HEIGHT * 0.22,
    // borderTopRightRadius: 15,
    // borderTopLeftRadius: 15,

    width: "100%",
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
