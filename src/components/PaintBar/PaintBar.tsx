import { CSSProperties } from "react";
import styled from "styled-components";

interface PaintBarProps {
  style?: CSSProperties;
}

const StyledPaintBar = styled.div`
  background-color: ${(props) => props.theme.paintbar};
`;

const PaintBar = ({ style }: PaintBarProps) => {
  return <StyledPaintBar style={{ ...style }}></StyledPaintBar>;
};

export default PaintBar;
