import { StylableComponentProps } from "src/types";
import styled from "styled-components";
import { IoArrowRedo } from "react-icons/io5";
import { useEventDispatch } from "src/hooks/EventBus";

const StyledRedoButton = styled.div`
  color: ${(props) => props.theme.toolbarItem};
  font-weight: bolder;
  font-size: 1.4em;
  cursor: pointer;
`;

interface RedoButtonProps extends StylableComponentProps {}

const RedoButton = (props: RedoButtonProps) => {
  const { style, className } = props;
  const dispatchEvent = useEventDispatch();

  const handleClick = () => {
    dispatchEvent("redo", {});
  };
  return (
    <StyledRedoButton {...{ style, className }} onClick={handleClick}>
      <IoArrowRedo />
    </StyledRedoButton>
  );
};

export default RedoButton;
