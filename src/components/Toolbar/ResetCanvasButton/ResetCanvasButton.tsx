import { StylableComponentProps } from "src/types";
import { FaUndoAlt } from "react-icons/fa";
import styled from "styled-components";
import { useEventDispatch } from "src/hooks/EventBus";

const StyledWrapper = styled.div`
  color: ${(props) => props.theme.toolbarItem};
  font-weight: bolder;
  font-size: 1.4em;
  cursor: pointer;
`;

interface ResetCanvasButtonProps extends StylableComponentProps {}

const ResetCanvasButton = (props: ResetCanvasButtonProps) => {
  const { style, className } = props;
  const dispatchEvent = useEventDispatch();

  const handleClick = () => {
    dispatchEvent("reset-canvas", {});
  };

  return (
    <StyledWrapper {...{ style, className }} onClick={handleClick}>
      <FaUndoAlt />
    </StyledWrapper>
  );
};

export default ResetCanvasButton;
