import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme, { OpenPaintTheme } from "../../theme";
import { ParentComponentProps } from "../../types";

type ThemeMutator = {
  setTheme: (theme: OpenPaintTheme) => void;
};

const defaultThemeMutator: ThemeMutator = {
  setTheme: () => {},
};

const ThemeMutatorContext = createContext(defaultThemeMutator);

const MutableThemeProvider = ({ children }: ParentComponentProps) => {
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <ThemeMutatorContext.Provider value={{ setTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeMutatorContext.Provider>
  );
};

export default MutableThemeProvider;
