import React, { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { ListItem } from "../components/ListItem";
import { Screen } from "../components/Screen";
import Constants from "expo-constants";
import { THEME } from "../theme";
import { ListItemSeparator } from "../components/ListItemSeparator";
import { ListItemDeleteAction } from "../components/ListItemDeleteAction";

const initialMessages = [
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

export function MessageScreen() {
  const [messages, setMessages] = useState(initialMessages);

  const handleDeleteMessage = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => `${message.id}`}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            onPress={() => {}}
            renderRightActions={() => (
              <ListItemDeleteAction
                onPress={() => {
                  handleDeleteMessage(item);
                }}
              />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
