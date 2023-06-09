import { THEME_KEY, ThemeType } from "../constants/Theme/theme.constant";
import cookie from "../libs/Cookie/cookie";

export const getTheme = (): ThemeType => {
  let themeMode = undefined;

  if (typeof window !== "undefined") {
    themeMode = cookie.getCookie(THEME_KEY);
  }

  if (typeof window !== "undefined" && themeMode === undefined) {
    const isDarkTheme: boolean = window.matchMedia(
      `(prefers-color-scheme: dark)`
    ).matches;

    if (isDarkTheme) {
      return "DARK";
    }
    return "LIGHT";
  }
  return themeMode as ThemeType;
};
