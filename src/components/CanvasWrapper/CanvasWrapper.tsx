import React, { CSSProperties, MutableRefObject, useRef } from "react";
import { useDrawer } from "src/hooks/canvas";
import styled, { useTheme } from "styled-components";

const StyledWrapper = styled.div`
  overflow: auto;
  padding: 16px;
`;

interface CanvasProps {
  style?: CSSProperties;
}

const CanvasWrapper = ({ style }: CanvasProps) => {
  const canvasRef = useRef() as MutableRefObject<HTMLCanvasElement>;
  useDrawer({ canvasRef });
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
    </StyledWrapper>
  );
};

export default CanvasWrapper;
