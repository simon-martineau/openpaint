import styled from "styled-components";
import { ParentComponentProps, StylableComponentProps } from "../../../types";

const StyledPaintBarSection = styled.div`
  padding-top: 32px;
  border-radius: 10px;
  position: relative;
`;

const StyledPaintBarSectionTitle = styled.div`
  position: absolute;
  left: 12px;
  top: 0px;
  color: ${(props) => props.theme.paintbar.sectionTitle};
  padding: 0 8px;
  user-select: none;
  font-size: 1.4em;
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
