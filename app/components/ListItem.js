import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import { AppText } from "./AppText";
import { THEME } from "../theme";
import Swipeable from "react-native-gesture-handler/Swipeable";

export function ListItem({
  // image = require("../assets/mosh.jpg"),
  image,
  ImageComponent,
  title,
  subTitle,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={THEME.LIGHT_GREY} onPress={onPress}>
        <View style={styles.container}>
          {ImageComponent}
          {image && <Image source={image} style={styles.image} />}
          <View style={styles.infoContainer}>
            <AppText style={styles.infoName}> {title} </AppText>
            {subTitle && (
              <AppText style={styles.subTitle}> {subTitle} </AppText>
            )}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: THEME.DEVICE_SCREEN_WIDTH * 0.07,
    padding: 10,
    backgroundColor: THEME.WHITE,
  },
  image: {
    borderRadius: 50,
    height: THEME.DEVICE_SCREEN_HEIGHT * 0.06,
    width: THEME.DEVICE_SCREEN_HEIGHT * 0.06,
  },
  infoContainer: {
    marginHorizontal: 10,
    justifyContent: "center",
  },
  infoName: {
    fontWeight: "400",
  },
  subTitle: {
    color: THEME.GREY,
  },
});
