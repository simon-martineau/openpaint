export type OpenPaintThemeSpecification = {
  background: string;
  toolbar: string;
  toolbarItem: string;
  highlight: string;
  highlightContrast: string;
  menuBackground: string;
  branding: string;
  neutral: string;
  sliderHandle: string;
  paintbar: {
    background: string;
    sectionTitle: string;
    colorPadBorder: string;
    colorPadHighlightBorder: string;
  };
  canvasBorder: string;
  text: string;
  textDisabled: string;
};

export const defaultTheme: OpenPaintThemeSpecification = {
  background: "#4E546A",
  toolbar: "#272A37",
  toolbarItem: "#eee",
  highlight: "#9149D9",
  highlightContrast: "#FFF",
  menuBackground: "#EEE",
  branding: "#BA93E1",
  neutral: "#4E546A",
  sliderHandle: "#C4C4C4",
  paintbar: {
    background: "#323644",
    sectionTitle: "#fff",
    colorPadBorder: "##4E546A",
    colorPadHighlightBorder: "#fff",
  },
  canvasBorder: "1px solid #9149D9",
  text: "#eee",
  textDisabled: "#999",
};

export const sketchBookTheme: OpenPaintThemeSpecification = {
  background: "#F4E3C5",
  toolbar: "#816D51",
  toolbarItem: "#eee",
  highlight: "#c49678",
  highlightContrast: "#FFF",
  menuBackground: "#EEE",
  branding: "#ddd",
  neutral: "#D4BB9F",
  sliderHandle: "#C7B59C",
  paintbar: {
    background: "#DCCC9C",
    sectionTitle: "#53422C",
    colorPadBorder: "#816D51",
    colorPadHighlightBorder: "#FFF",
  },
  canvasBorder: "1px solid #D4BB9F",
  text: "#eee",
  textDisabled: "#eee",
};

export interface OpenPaintTheme {
  specification: OpenPaintThemeSpecification;
  name: string;
}

export const themes: OpenPaintTheme[] = [
  { name: "OpenPaint (default)", specification: defaultTheme },
  { name: "Sketchbook", specification: sketchBookTheme },
];

// The default export is the default theme
export default defaultTheme;
