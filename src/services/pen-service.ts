/* istanbul ignore file */
/* This file is unused but may be reused very soon. For now, we ignore the coverage */

type Point = [number, number];
type PenCache = {
  [key: string]: ImageData;
};

const penCache: PenCache = {};

const PIXEL_DATA_SIZE = 4;

const as2dCoordinate = (sizeX: number, sizeY: number, i: number): Point => {
  const i_p = i / PIXEL_DATA_SIZE;
  return [i_p % sizeX, Math.floor(i_p / sizeY)];
};

const createPen = (context: CanvasRenderingContext2D, diameter: number) => {
  const imageData = context.createImageData(diameter, diameter);
  const radius = diameter / 2;
  const center = Math.floor(diameter / 2);
  const distance = (p1: Point, p2: Point) =>
    Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));

  for (let i = 0; i < imageData.data.length; i += 4) {
    const shouldFill = distance(as2dCoordinate(diameter, diameter, i), [center, center]) < radius;
    if (shouldFill) {
      imageData.data[i + 3] = 255;
    }
  }
  return imageData;
};

const getHash = (context: CanvasRenderingContext2D, diameter: number) => {
  return `${diameter}`;
};

const getImageDataFromPen = (context: CanvasRenderingContext2D) => {
  const diameter = 3;
  const hash = getHash(context, diameter);
  if (penCache[hash]) {
    return penCache[hash];
  }

  const newPen = createPen(context, diameter);
  penCache[hash] = newPen;
  return newPen;
};

const testExports = { as2dCoordinate };

export { testExports, getImageDataFromPen };
