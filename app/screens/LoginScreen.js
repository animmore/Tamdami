import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import { Screen } from "../components/Screen";
import { AppTextInput } from "../components/AppTextInput";
import { AppButton } from "../components/AppButton";
import { AppText } from "../components/AppText";
import { ErrorMessage } from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
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
            <ErrorMessage error={errors.email} />

            <AppTextInput
              icon="lock"
              autoCapitalize="none"
              placeholder="password"
              textContentType="password"
              secureTextEntry={true}
              onChange={handleChange("password")}
            />
            <ErrorMessage error={errors.password} />

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
