import { CSSProperties } from "react";
import styled from "styled-components";
import ColorSelection from "./ColorSelection";
import PensizeSelection from "./PensizeSelection";
import ToolSelection from "./ToolSelection";

interface PaintBarProps {
  style?: CSSProperties;
}

const StyledPaintBar = styled.div`
  background-color: ${(props) => props.theme.paintbar.background};
  display: flex;
  gap: 16px;
  flex-direction: column;
  padding: 32px 12px;
  overflow-y: auto;
`;

const PaintBar = ({ style }: PaintBarProps) => {
  return (
    <StyledPaintBar style={{ ...style }}>
      <ToolSelection />
      <PensizeSelection />
      <ColorSelection />
    </StyledPaintBar>
  );
};

export default PaintBar;
