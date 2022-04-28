export type OpenPaintTheme = {
  background: string;
  toolbar: string;
  highlight: string;
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
};

export const defaultTheme: OpenPaintTheme = {
  background: "#4E546A",
  toolbar: "#272A37",
  highlight: "#9149D9",
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
};

export const sketchBookTheme: OpenPaintTheme = {
  background: "#F4E3C5",
  toolbar: "#816D51",
  highlight: "#816D51",
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
};

// The default export is the default theme
export default sketchBookTheme;
