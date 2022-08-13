import * as React from "react";
import { StyledTextBox } from "./styles";

interface Props {
  backgroundColor?: string;
  color?: string;
  fontSize?: number;
  fontWeight?: number;
  children: string;
}

function TextBox(props: Props) {
  const { backgroundColor, color, fontSize, fontWeight } = props;

  return (
    <StyledTextBox
      backgroundColor={backgroundColor}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {props.children}
    </StyledTextBox>
  );
}

export default TextBox;
