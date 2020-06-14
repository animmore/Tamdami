import React from "react";
import { WelcomeScreen } from "./app/screens/WelcomeScreen";
import { ViewImageScreen } from "./app/screens/ViewImageScreen";
import { Card } from "./app/components/Card";
import { ListItem } from "./app/components/ListItem";
import { MessageScreen } from "./app/screens/MessageScreen";
import { AppButton } from "./app/components/AppButton";
import { THEME } from "./app/theme";

export default function App() {
  return (
    <>
      <MessageScreen />
    </>
  );
}
