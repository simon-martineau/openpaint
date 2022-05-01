import { CSSProperties } from "react";
import styled from "styled-components";
import RedoButton from "./RedoButton";
import ResetCanvasButton from "./ResetCanvasButton";
import ThemeSelect from "./ThemeSelect";
import UndoButton from "./UndoButton";

const StyledToolbar = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.toolbar};
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const StyledToolBarSection = styled.div`
  padding: 0 32px;
  display: flex;
  gap: 24px;
  align-items: center;
`;

const StyledBranding = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.4em;
  color: ${(props) => props.theme.branding};
  font-weight: bold;
  user-select: none;
`;

interface ToolbarProps {
  style?: CSSProperties;
}

const Toolbar = ({ style }: ToolbarProps) => {
  return (
    <StyledToolbar style={style}>
      <StyledToolBarSection>
        <ResetCanvasButton />
        <UndoButton />
        <RedoButton />
      </StyledToolBarSection>
      <StyledToolBarSection>
        <ThemeSelect />
      </StyledToolBarSection>
      <StyledBranding>OpenPaint</StyledBranding>
    </StyledToolbar>
  );
};

export default Toolbar;
