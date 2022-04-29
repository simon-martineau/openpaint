import { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme, { OpenPaintThemeSpecification } from "../../theme";
import { ParentComponentProps } from "../../types";

type ThemeMutator = {
  setTheme: (theme: OpenPaintThemeSpecification) => void;
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

export const useThemeMutator = () => {
  return useContext(ThemeMutatorContext);
};

export default MutableThemeProvider;
