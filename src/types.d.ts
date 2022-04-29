import React, { CSSProperties } from "react";
import { OpenPaintThemeSpecification } from "./theme";

export interface ParentComponentProps {
  children?: React.ReactNode;
}

export interface StylableComponentProps {
  style?: CSSProperties;
  className?: string;
}

declare module "styled-components" {
  export interface DefaultTheme extends OpenPaintThemeSpecification {}
}
