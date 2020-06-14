import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { THEME } from "../theme";
import { AppButton } from "../components/AppButton";

export function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
      blurRadius={9}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell anything!</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <AppButton title={"login"} />
        <AppButton title={"registration"} color={THEME.LIGHT_BLUE} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: { width: 100, height: 100 },
  tagline: {
    fontWeight: "600",
    fontSize: THEME.DEVICE_WINDOW_HEIGHT * 0.03,
    paddingVertical: 20,
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
    alignItems: "center",
  },
});
