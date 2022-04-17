import React, { CSSProperties, MutableRefObject, useRef } from "react";
import styled, { useTheme } from "styled-components";
import { useDrawer } from "../../hooks/canvas";

const StyledWrapper = styled.div`
  overflow: auto;
  padding: 16px;
`;

interface CanvasProps {
  style?: CSSProperties;
}

const CanvasWrapper = ({ style }: CanvasProps) => {
  const canvasRef = useRef() as MutableRefObject<HTMLCanvasElement>;
  const state = useDrawer({ canvasRef });
  const theme = useTheme();

  return (
    <StyledWrapper style={style}>
      <canvas
        ref={canvasRef}
        id="paint-canvas"
        style={{
          width: 1150,
          height: 650,
          backgroundColor: "#fff",
          border: theme.canvasBorder,
          cursor: "crosshair",
        }}
        width="1150"
        height="650"
      ></canvas>
      <div style={{ userSelect: "none" }}>
        <p>isDrawing: {state.isDrawing ? "true" : "false"}</p>
        <p>lastX: {state.lastX}</p>
        <p>lastY: {state.lastY}</p>
        <p>x: {state.x}</p>
        <p>y: {state.y}</p>
      </div>
    </StyledWrapper>
  );
};

export default CanvasWrapper;
