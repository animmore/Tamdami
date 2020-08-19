import React from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight } from "react-native";
import { AppText } from "../AppText";
import { THEME } from "../../theme";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function ListItem({ image, IconComponent, title, subTitle, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={THEME.LIGHT_GREY} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image source={image} style={styles.image} />}
          <View style={styles.infoContainer}>
            <AppText style={styles.infoName} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons color={THEME.GREY} name="chevron-right" size={25} />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    backgroundColor: THEME.WHITE,
    width: "100%",
  },
  image: {
    borderRadius: 50,
    height: THEME.DEVICE_SCREEN_HEIGHT * 0.06,
    width: THEME.DEVICE_SCREEN_HEIGHT * 0.06,
  },
  infoContainer: {
    flex: 1,
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
