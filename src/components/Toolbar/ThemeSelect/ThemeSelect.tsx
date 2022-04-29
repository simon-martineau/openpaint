import { RiPaintBrushFill, RiArrowDownSFill } from "react-icons/ri";
import SelectMenu from "src/components/common/SelectMenu";
import { SelectMenuChoice } from "src/components/common/SelectMenu/SelectMenu";
import { useThemeMutator } from "src/contexts/MutableTheme/MutableTheme";
import { themes } from "src/theme";
import { StylableComponentProps } from "src/types";
import styled from "styled-components";

const StyledThemeSelectButton = styled.div`
  user-select: none;
  display: flex;
  gap: 8px;
  cursor: pointer;
  color: ${(props) => props.theme.toolbarItem};
  font-weight: bold;
  font-size: 1.2em;
`;

interface ThemeSelectProps extends StylableComponentProps {}

const themeChoices: SelectMenuChoice[] = themes.map((theme) => ({
  label: theme.name,
  value: theme.specification,
}));

const ThemeSelect = (props: ThemeSelectProps) => {
  const { style, className } = props;
  const { setTheme } = useThemeMutator();

  const handleChange = (choice: SelectMenuChoice) => {
    setTheme(choice.value);
  };

  return (
    <SelectMenu
      align="right"
      buttonElement={
        <StyledThemeSelectButton {...{ style, className }}>
          <RiPaintBrushFill />
          <span>Theme</span>
          <RiArrowDownSFill />
        </StyledThemeSelectButton>
      }
      onChange={handleChange}
      choices={themeChoices}
    />
  );
};

export default ThemeSelect;
