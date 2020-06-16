import { Dimensions, Platform } from "react-native";

export const THEME = {
  //COLORS
  MAIN_PEACH: "#FF7F4F",
  LIGHT_BLUE: "#b4ceff",
  BLACK: "#000",
  WHITE: "#fff",
  GREY: "#6e6969",
  LIGHT_GREY: "#f8f4f4",
  DANGER: "#FF5252",
  YELLOW: "#ffe66d",
  DARK: "#0c0c0c",

  //OTHER

  DEVICE_WINDOW_HEIGHT: Dimensions.get("window").height,
  DEVICE_SCREEN_HEIGHT: Dimensions.get("screen").height,
  DEVICE_WINDOW_WIDTH: Dimensions.get("window").width,
  DEVICE_SCREEN_WIDTH: Dimensions.get("screen").width,
};
