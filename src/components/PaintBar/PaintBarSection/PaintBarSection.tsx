import styled from "styled-components";
import { ParentComponentProps, StylableComponentProps } from "../../../types";

const StyledPaintBarSection = styled.div`
  padding: 8px;
  padding-top: 12px;
  border: 1px solid ${(props) => props.theme.paintbar.sectionBorder};
  border-radius: 10px;
  position: relative;
`;

const StyledPaintBarSectionTitle = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.paintbar.background};
  color: ${(props) => props.theme.paintbar.sectionBorder};
  padding: 0 8px;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);
  user-select: none;
  font-size: 1.1em;
  font-weight: bold;
`;

interface PaintBarSectionProps extends ParentComponentProps, StylableComponentProps {
  title: string;
}

const PaintBarSection = ({ style, children, title }: PaintBarSectionProps) => {
  return (
    <StyledPaintBarSection style={style}>
      <StyledPaintBarSectionTitle>{title}</StyledPaintBarSectionTitle>
      {children}
    </StyledPaintBarSection>
  );
};

export default PaintBarSection;
