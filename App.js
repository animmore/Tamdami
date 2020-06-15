import React from "react";
import { WelcomeScreen } from "./app/screens/WelcomeScreen";
import { ViewImageScreen } from "./app/screens/ViewImageScreen";
import { Card } from "./app/components/Card";
import { ListItem } from "./app/components/ListItem";
import { MessageScreen } from "./app/screens/MessageScreen";
import { AppButton } from "./app/components/AppButton";
import { THEME } from "./app/theme";
import { MyAccountScreen } from "./app/screens/MyAccountScreen";

export default function App() {
  return (
    <>
      <MyAccountScreen />
    </>
  );
}
