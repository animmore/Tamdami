import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import { Screen } from "../components/Screen";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export function LoginScreen() {
  const fields = (
    <>
      <AppFormField
        icon="email"
        autoCapitalize="none"
        placeholder="Email"
        autoCorrect={false}
        keyboardType="email-address"
        textContentType="emailAddress"
        name="email"
      />

      <AppFormField
        icon="lock"
        autoCapitalize="none"
        placeholder="Password"
        textContentType="password"
        secureTextEntry={true}
        name="password"
      />

      <SubmitButton title="Login" />
    </>
  );
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <AppForm
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
        childrem={fields}
      />
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
