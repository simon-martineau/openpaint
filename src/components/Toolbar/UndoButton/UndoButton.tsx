import { StylableComponentProps } from "src/types";
import styled from "styled-components";
import { IoArrowUndo } from "react-icons/io5";
import { useEventDispatch } from "src/hooks/EventBus";

const StyledUndoButton = styled.div`
  color: ${(props) => props.theme.toolbarItem};
  font-weight: bolder;
  font-size: 1.4em;
  cursor: pointer;
`;

interface UndoButtonProps extends StylableComponentProps {}

const UndoButton = (props: UndoButtonProps) => {
  const { style, className } = props;
  const dispatchEvent = useEventDispatch();

  const handleClick = () => {
    dispatchEvent("undo", {});
  };
  return (
    <StyledUndoButton {...{ style, className }} onClick={handleClick}>
      <IoArrowUndo />
    </StyledUndoButton>
  );
};

export default UndoButton;
