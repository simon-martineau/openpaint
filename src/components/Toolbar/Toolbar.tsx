import { CSSProperties } from "react";
import styled from "styled-components";

const StyledToolbar = styled.div`
  background-color: ${(props) => props.theme.toolbar};
  padding: 8px;
  display: flex;
  width: 100%;
`;

interface ToolbarProps {
  style?: CSSProperties;
}

const Toolbar = ({ style }: ToolbarProps) => {
  return <StyledToolbar style={style}></StyledToolbar>;
};

export default Toolbar;
