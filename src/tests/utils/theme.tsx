import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "src/theme";

const TEST_THEME = defaultTheme;

export function renderWithTheme(children: ReactNode) {
  render(<ThemeProvider theme={TEST_THEME}>{children}</ThemeProvider>);
}
