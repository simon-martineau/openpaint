import React, { MutableRefObject, useRef } from "react";
import { useDrawer } from "../../hooks/canvas";

const Canvas = () => {
  const canvasRef = useRef() as MutableRefObject<HTMLCanvasElement>;
  const state = useDrawer({ canvasRef });

  return (
    <div>
      <canvas
        ref={canvasRef}
        id="paint-canvas"
        style={{ border: "1px solid #000", width: 1150, height: 650 }}
        width="1150"
        height="650"
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
