import React from "react";
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { ListItem } from "./ListItem";
import Constants from "expo-constants";

console.log(Constants);

export function MessageScreen() {
  const messages = [
    {
      id: Math.random() * Math.random() * Math.random(),
      title: "T1",
      subTitle: "D1",
      image: require("../assets/mosh.jpg"),
    },
    {
      id: Math.random() * Math.random() * Math.random(),
      title: "T2",
      subTitle: "D2",
      image: require("../assets/mosh.jpg"),
    },
  ];

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => `${message.id}`}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});
