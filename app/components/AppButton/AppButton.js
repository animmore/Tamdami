import React from "react";
import { Button } from "react-native";
import { THEME } from "../../theme";

import { styles } from "./styles";

export default function AppButton({
  children,
  style,
  onPress,
  color,
  mode = "contained",
  isDisabled,
  labelStyle,
  // color = THEME.MAIN_PEACH,
}) {
  return (
    <Button
      style={{ ...styles.appBtn, ...style }}
      color={color}
      onPress={onPress}
      mode={mode}
      disabled={isDisabled}
      title={children}
      labelStyle={{ ...styles.appBtnTitle, ...labelStyle }}
    >
      {children}
    </Button>
  );
}
