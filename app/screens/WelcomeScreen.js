import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { THEME } from "../theme";
import AppButton from "../components/AppButton";

export function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
      blurRadius={9}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Sell anything!</Text>
      </View>
      <View style={styles.loginButton}>
        <AppButton color={THEME.WHITE}>LOGIN</AppButton>
      </View>
      <View style={styles.registerButton}>
        <AppButton color={THEME.WHITE}>REGISTER</AppButton>
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
  loginButton: {
    width: "90%",
    height: 60,
    backgroundColor: THEME.MAIN_PEACH,
    justifyContent: "center",
    borderRadius: 25,
    margin: 10,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: { width: 100, height: 100 },
  registerButton: {
    width: "90%",
    height: 60,
    backgroundColor: THEME.LIGHT_BLUE,
    justifyContent: "center",
    borderRadius: 25,
    margin: 10,
    marginBottom: 25,
  },
});
