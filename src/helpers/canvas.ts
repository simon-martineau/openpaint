export const toCanvasCoordinates = (
  canvas: HTMLCanvasElement,
  x: number,
  y: number
): [number, number] => {
  const rect = canvas.getBoundingClientRect();

  return [
    ((x - rect.left) / (rect.right - rect.left)) * canvas.width,
    ((y - rect.top) / (rect.bottom - rect.top)) * canvas.height,
  ];
};
