import React from "react";
import drawService from "src/services/canvas/draw-service";
import { useEventBus } from "../EventBus";

type UseUndoProps = {
  canvasRef: React.MutableRefObject<HTMLCanvasElement>;
};

const useUndo = ({ canvasRef }: UseUndoProps) => {
  const performUndo = () => {
    const context = canvasRef.current.getContext("2d");
    if (context) {
      drawService.undo(context);
    }
  };

  const performRedo = () => {
    const context = canvasRef.current.getContext("2d");
    if (context) {
      drawService.redo(context);
    }
  };

  useEventBus("undo", performUndo);
  useEventBus("redo", performRedo);
};

export default useUndo;
