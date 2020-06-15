import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Screen } from "../components/Screen";
import { THEME } from "./../theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function MyAccountScreen({ image = require("../assets/mosh.jpg") }) {
  return (
    <View style={styles.container}>
      <View style={[styles.itemContainer, styles.firstItem]}>
        <Image source={image} style={styles.image} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Yevhenii YYsvd</Text>
          <Text style={styles.userEmail}>email@gmail.com</Text>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <View style={[styles.listingsIcon, styles.iconConfig]}>
          <MaterialCommunityIcons
            name={"format-list-bulleted"}
            size={THEME.DEVICE_WINDOW_HEIGHT * 0.025}
            color={THEME.WHITE}
          />
        </View>
        <Text style={styles.iconText}>My Listings</Text>
      </View>
      <View style={[styles.itemContainer, styles.thirdItem]}>
        <View style={[styles.messagesIcon, styles.iconConfig]}>
          <MaterialCommunityIcons
            name={"email"}
            size={THEME.DEVICE_WINDOW_HEIGHT * 0.025}
            color={THEME.WHITE}
          />
        </View>
        <Text style={styles.iconText}>My Messages</Text>
      </View>
      <View>
        <View style={styles.itemContainer}>
          <View style={[styles.logOutIcon, styles.iconConfig]}>
            <MaterialCommunityIcons
              name={"logout"}
              size={THEME.DEVICE_WINDOW_HEIGHT * 0.025}
              color={THEME.WHITE}
            />
          </View>
          <Text style={styles.iconText}>Log Out</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: THEME.DEVICE_SCREEN_HEIGHT * 0.075,
    backgroundColor: THEME.LIGHT_GREY,
    width: "100%",
    height: "100%",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: THEME.WHITE,
    width: "100%",
    padding: 10,
  },
  firstItem: { marginBottom: THEME.DEVICE_SCREEN_HEIGHT * 0.05 },
  thirdItem: { marginBottom: THEME.DEVICE_SCREEN_HEIGHT * 0.04 },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  userInfo: { marginLeft: 10 },
  userName: {},
  userEmail: { color: THEME.GREY },
  listingsIcon: {
    backgroundColor: THEME.MAIN_PEACH,
  },
  messagesIcon: {
    backgroundColor: THEME.LIGHT_BLUE,
  },
  logOutIcon: {
    backgroundColor: THEME.YELLOW,
  },
  iconConfig: {
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    paddingLeft: 7,
  },
});
