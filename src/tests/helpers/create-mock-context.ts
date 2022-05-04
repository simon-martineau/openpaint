export const createMockCanvas = (
  context: CanvasRenderingContext2D
): jest.Mocked<HTMLCanvasElement> => {
  const mock = {
    getContext: () => context,
    width: 100,
    height: 100,
  };

  return mock as unknown as jest.Mocked<HTMLCanvasElement>;
};

export const createMockContext = (): jest.Mocked<CanvasRenderingContext2D> => {
  const mock = {
    clearRect: jest.fn(),
    beginPath: jest.fn(),
    moveTo: jest.fn(),
    stroke: jest.fn(),
    lineTo: jest.fn(),
    closePath: jest.fn(),
  };

  // @ts-expect-error
  const canvas = createMockCanvas(mock);
  // @ts-expect-error
  mock.canvas = canvas;

  return mock as unknown as jest.Mocked<CanvasRenderingContext2D>;
};
