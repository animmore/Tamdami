import { DefaultTheme } from '@react-navigation/native';
import { THEME } from '../theme';

export const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: THEME.MAIN_PEACH,
    background: THEME.WHITE,
  },
};
