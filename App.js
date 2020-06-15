import React from "react";
import { WelcomeScreen } from "./app/screens/WelcomeScreen";
import { ViewImageScreen } from "./app/screens/ViewImageScreen";
import { Card } from "./app/components/Card";
import { ListItem } from "./app/components/ListItem";
import { MessageScreen } from "./app/screens/MessageScreen";
import { AppButton } from "./app/components/AppButton";
import { THEME } from "./app/theme";
import { MyAccountScreen } from "./app/screens/MyAccountScreen";
import { Icon } from "./app/components/Icon";
import { Screen } from "./app/components/Screen";

export default function App() {
  return (
    <Screen>
      <ListItem title="My title" ImageComponent={<Icon name={"email"} />} />
    </Screen>
  );
}
