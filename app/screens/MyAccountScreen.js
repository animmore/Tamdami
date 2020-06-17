import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Screen } from "../components/Screen";
import { ListItem } from "../components/ListItem";
import { Icon } from "../components/Icon";
import { THEME } from "./../theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ListItemSeparator } from "../components/ListItemSeparator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: THEME.MAIN_PEACH,
    },
  },
  {
    title: "My Messages",
    icon: { name: "email", backgroundColor: THEME.LIGHT_BLUE },
  },
];

export function MyAccountScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Yevhenii YY"
          subTitle="email@gmail.com"
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => `${menuItem.title}`}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  bgColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" bgColor={THEME.YELLOW} />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: THEME.LIGHT_GREY,
  },
  container: {
    marginVertical: 20,
  },
});