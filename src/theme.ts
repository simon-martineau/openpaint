export type OpenPaintTheme = {
  background: string;
  toolbar: string;
  highlight: string;
  neutral: string;
  paintbar: {
    background: string;
    sectionBackground: string;
    sectionBorder: string;
  };
  canvasBorder: string;
  text: string;
};

export const pastelTheme: OpenPaintTheme = {
  background: "#eee",
  toolbar: "#FF9AA2",
  highlight: "#ff9099",
  neutral: "#ffe1e3",
  paintbar: {
    background: "#FFB7B2",
    sectionBackground: "#eee",
    sectionBorder: "#fff",
  },
  canvasBorder: "1px solid #FFB7B2",
  text: "#333",
};

// The default export is the default theme
export default pastelTheme;
