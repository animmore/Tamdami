import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { WelcomeScreen } from "./app/screens/WelcomeScreen";
import { ViewImageScreen } from "./app/screens/ViewImageScreen";
import { Card } from "./app/screens/Card";
import { ListItem } from "./app/screens/ListItem";
import AppButton from "./app/components/AppButton";
import { THEME } from "./app/theme";

export default function App() {
  return (
    <View style={styles.container}>
      <>
        <Card />
        <ListItem />
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
