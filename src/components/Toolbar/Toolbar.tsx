import { CSSProperties } from "react";
import styled from "styled-components";

const StyledToolbar = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.toolbar};
  padding: 8px;
  display: flex;
  width: 100%;
`;

const StyledBranding = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.4em;
  color: ${(props) => props.theme.highlightSoft};
  font-weight: bold;
  user-select: none;
`;

interface ToolbarProps {
  style?: CSSProperties;
}

const Toolbar = ({ style }: ToolbarProps) => {
  return (
    <StyledToolbar style={style}>
      <StyledBranding>OpenPaint</StyledBranding>
    </StyledToolbar>
  );
};

export default Toolbar;
