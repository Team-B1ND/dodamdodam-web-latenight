import { ThemeProvider } from "styled-components";
import useTheme from "../../../hooks/theme/useTheme";
import { ReactNode } from "react";
import GlobalStyle from "../../../styles/globalStyles";

interface Props {
  children: ReactNode;
}

const ThemeProviderContainer = ({ children }: Props) => {
  const { themeColor } = useTheme();
  return (
    <ThemeProvider theme={themeColor}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
export default ThemeProviderContainer;
