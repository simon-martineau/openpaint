import React from "react";
import { OpenPaintTheme } from "./theme";

export interface ParentComponentProps {
  children: React.ReactNode;
}

declare module "styled-components" {
  export interface DefaultTheme extends OpenPaintTheme {}
}
