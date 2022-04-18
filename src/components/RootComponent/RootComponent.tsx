import styled, { createGlobalStyle } from "styled-components";
import CanvasWrapper from "../CanvasWrapper";
import PaintBar from "../PaintBar";
import Toolbar from "../Toolbar";

const StyledRoot = styled.div`
  background: ${(props) => props.theme.background};
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const StyledPaintContainer = styled.div`
  display: flex;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    font-family: 'Karla', sans-serif;
  }
`;

const RootComponent = () => {
  return (
    <StyledRoot>
      <GlobalStyle />
      <Toolbar style={{ flexShrink: 0, height: 64 }} />
      <StyledPaintContainer style={{ flexShrink: 1, flexGrow: 1, minHeight: 0 }}>
        <PaintBar style={{ width: 200, flexShrink: 0 }} />
        {/* <div style={{ flexShrink: 1, flexGrow: 1, height: "550", backgroundColor: "#ff0000" }} /> */}
        <CanvasWrapper style={{ flexShrink: 1, flexGrow: 1, minWidth: 0 }} />
      </StyledPaintContainer>
    </StyledRoot>
  );
};

export default RootComponent;
