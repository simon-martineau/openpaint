import { StylableComponentProps } from "src/types";
import { FaUndoAlt } from "react-icons/fa";
import styled from "styled-components";

const StyledWrapper = styled.div`
  color: ${(props) => props.theme.toolbarItem};
  font-weight: bolder;
  font-size: 1.4em;
  cursor: pointer;
`;

interface ResetCanvasButtonProps extends StylableComponentProps {}

const ResetCanvasButton = (props: ResetCanvasButtonProps) => {
  const { style, className } = props;
  return (
    <StyledWrapper {...{ style, className }}>
      <FaUndoAlt />
    </StyledWrapper>
  );
};

export default ResetCanvasButton;
