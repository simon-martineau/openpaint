import React from "react";
import drawService from "src/services/canvas/draw-service";
import { useEventBus } from "../EventBus";

type UseResetProps = {
  canvasRef: React.MutableRefObject<HTMLCanvasElement>;
};

const useReset = ({ canvasRef }: UseResetProps) => {
  const performReset = () => {
    const context = canvasRef.current.getContext("2d");
    if (context) {
      drawService.reset(canvasRef.current);
    }
  };

  useEventBus("reset-canvas", performReset);
};

export default useReset;
