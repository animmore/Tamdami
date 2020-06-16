import React from "react";
import { WelcomeScreen } from "./app/screens/WelcomeScreen";
import { ViewImageScreen } from "./app/screens/ViewImageScreen";
import { Card } from "./app/components/Card";
import { ListItem } from "./app/components/ListItem";
import { MessageScreen } from "./app/screens/MessageScreen";
import { AppButton } from "./app/components/AppButton";
import { AppTextInput } from "./app/components/AppTextInput";
import { THEME } from "./app/theme";
import { MyAccountScreen } from "./app/screens/MyAccountScreen";
import { ListingsScreen } from "./app/screens/ListingsScreen";
import { Icon } from "./app/components/Icon";
import { Screen } from "./app/components/Screen";

export default function App() {
  return (
    <Screen>
      <AppTextInput placeholder={"Username"} icon="email" />
    </Screen>
  );
}
