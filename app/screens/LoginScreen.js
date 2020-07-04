import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Formik } from "formik";

import { Screen } from "../components/Screen";
import { AppTextInput } from "../components/AppTextInput";
import { AppButton } from "../components/AppButton";

export function LoginScreen({}) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              icon="email"
              autoCapitalize="none"
              placeholder="email"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
              onChange={handleChange("email")}
            />
            <AppTextInput
              icon="lock"
              autoCapitalize="none"
              placeholder="password"
              textContentType="password"
              secureTextEntry={true}
              onChange={handleChange("password")}
            />
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
