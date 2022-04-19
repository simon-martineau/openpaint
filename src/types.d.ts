import React, { CSSProperties } from "react";
import { OpenPaintTheme } from "./theme";

export interface ParentComponentProps {
  children?: React.ReactNode;
}

export interface StylableComponentProps {
  style?: CSSProperties;
  className?: string;
}

declare module "styled-components" {
  export interface DefaultTheme extends OpenPaintTheme {}
}
