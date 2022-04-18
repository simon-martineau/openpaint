import { CSSProperties } from "react";
import styled from "styled-components";
import ToolSelection from "./ToolSelection";

interface PaintBarProps {
  style?: CSSProperties;
}

const StyledPaintBar = styled.div`
  background-color: ${(props) => props.theme.paintbar.background};
  display: flex;
  flex-direction: column;
  padding: 32px 12px;
`;

const PaintBar = ({ style }: PaintBarProps) => {
  return (
    <StyledPaintBar style={{ ...style }}>
      <ToolSelection />
    </StyledPaintBar>
  );
};

export default PaintBar;
