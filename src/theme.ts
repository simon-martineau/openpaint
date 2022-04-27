export type OpenPaintTheme = {
  background: string;
  toolbar: string;
  highlight: string;
  neutral: string;
  neutralFocus: string;
  paintbar: {
    background: string;
    sectionBackground: string;
    sectionBorder: string;
  };
  canvasBorder: string;
  text: string;
};

export const pastelTheme: OpenPaintTheme = {
  background: "#4E546A",
  toolbar: "#272A37",
  highlight: "#9149D9",
  neutral: "#4E546A",
  neutralFocus: "#C4C4C4",
  paintbar: {
    background: "#323644",
    sectionBackground: "#eee",
    sectionBorder: "#fff",
  },
  canvasBorder: "1px solid #9149D9",
  text: "#eee",
};

// The default export is the default theme
export default pastelTheme;
