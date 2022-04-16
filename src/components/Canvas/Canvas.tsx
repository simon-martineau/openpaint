import React, { MutableRefObject, useCallback, useEffect, useRef } from "react";
import { useDrawingStore } from "../../contexts/DrawingStore";
import useGlobalEventListener from "../../hooks/use-global-event-listener";
import { getImageDataFromPen } from "../../services/pen-service";

const Canvas = () => {
  const { state, dispatch } = useDrawingStore();
  const canvasRef = useRef() as MutableRefObject<HTMLCanvasElement>;

  const toCanvasCoordinates = (x: number, y: number): [number, number] => {
    const rect = canvasRef.current.getBoundingClientRect();

    return [
      ((x - rect.left) / (rect.right - rect.left)) * canvasRef.current.width,
      ((y - rect.top) / (rect.bottom - rect.top)) * canvasRef.current.height,
    ];
  };

  const drawLine = (x1: number, y1: number, x2: number, y2: number) => {
    const canvasContext = canvasRef.current?.getContext("2d");
    if (canvasContext !== null) {
      const toDraw = getImageDataFromPen(canvasContext);
      canvasContext.putImageData(toDraw, x2, y2);
    }
  };

  const handleMouseUp = useCallback((e: MouseEvent) => {
    dispatch({ type: "pen_up" });
  }, []);

  useGlobalEventListener("mouseup", handleMouseUp);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (state.isDrawing) {
      drawLine(state.lastX, state.lastY, state.x, state.y);
    }
    const [x, y] = toCanvasCoordinates(e.pageX, e.pageY);
    dispatch({ type: "pen_move", x: x, y: y });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    dispatch({ type: "pen_down" });
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        id="paint-canvas"
        style={{ border: "1px solid #000", width: 1150, height: 650 }}
        width="1150"
        height="650"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
      ></canvas>
      <p>isDrawing: {state.isDrawing ? "true" : "false"}</p>
      <p>lastX: {state.lastX}</p>
      <p>lastY: {state.lastY}</p>
      <p>x: {state.x}</p>
      <p>y: {state.y}</p>
    </div>
  );
};

export default Canvas;
