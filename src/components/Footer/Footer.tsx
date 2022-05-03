import { StylableComponentProps } from "src/types";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import styled from "styled-components";

const StyledFooter = styled.div`
  height: 36px;
  background-color: ${(props) => props.theme.toolbar};

  display: grid;
  column-gap: 10px;
  grid-template-columns: 1fr 10px 1fr;
`;

const StyledFooterSection = styled.div<{ justify?: "right" | "left" | "center" }>`
  color: ${(props) => props.theme.text};
  font-size: 1em;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify || "left"};
  gap: 12px;
  color: ${(props) => props.theme.textDisabled};
`;

const StyledFooterIconButton = styled.a`
  font-size: 1.4rem;
  cursor: pointer;

  &:link {
    text-decoration: inherit;
    color: inherit;
  }

  &:visited {
    text-decoration: inherit;
    color: inherit;
  }

  &:hover {
    color: ${(props) => props.theme.highlight};
  }
`;

interface FooterProps extends StylableComponentProps {}

const Footer = (props: FooterProps) => {
  const { style, className } = props;
  return (
    <StyledFooter {...{ style, className }}>
      <StyledFooterSection justify="right">
        <span style={{ fontSize: "0.9em" }}>© 2022 Simon Martineau </span>
      </StyledFooterSection>
      <StyledFooterSection justify="center">|</StyledFooterSection>
      <StyledFooterSection>
        <span style={{ fontSize: "0.9em" }}>simon.martineau.dev@gmail.com</span>

        <StyledFooterIconButton href="https://github.com/simon-martineau">
          <BsGithub />
        </StyledFooterIconButton>

        <StyledFooterIconButton href="https://www.linkedin.com/in/simon-martineau-086631205/">
          <BsLinkedin />
        </StyledFooterIconButton>
      </StyledFooterSection>
    </StyledFooter>
  );
};

export default Footer;
