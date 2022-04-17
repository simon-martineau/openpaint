export type OpenPaintTheme = {
  background: string;
  toolbar: string;
  paintbar: string;
  canvasBorder: string;
  text: string;
};

export const pastelTheme: OpenPaintTheme = {
  background: "#eee",
  toolbar: "#FF9AA2",
  paintbar: "#FFB7B2",
  canvasBorder: "1px solid #FFB7B2",
  text: "#ddd",
};

// The default export is the default theme
export default pastelTheme;
