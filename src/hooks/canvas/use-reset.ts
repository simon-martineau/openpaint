import React from "react";
import { useEventBus } from "../EventBus";

type UseResetProps = {
  canvasRef: React.MutableRefObject<HTMLCanvasElement>;
};

const useReset = ({ canvasRef }: UseResetProps) => {
  const performReset = () => {
    const context = canvasRef.current.getContext("2d");
    context?.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  useEventBus("reset-canvas", performReset);
};

export default useReset;
