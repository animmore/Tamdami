import { Dimensions, Platform } from "react-native";

export const THEME = {
  //COLORS
  MAIN_PEACH: "#FF7F4F",
  LIGHT_BLUE: "#b4ceff",
  BLACK: "#000",
  WHITE: "#fff",

  //OTHER

  DEVICE_WINDOW_HEIGHT: Dimensions.get("window").height,
  DEVICE_SCREEN_HEIGHT: Dimensions.get("screen").height,
  DEVICE_WINDOW_WIDTH: Dimensions.get("window").width,
  DEVICE_SCREEN_WIDTH: Dimensions.get("screen").width,
};
