import * as React from "react";
import "./styles";
import classnames from "classnames";

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
    <div
      className={classnames(
        "styled-textbox",
        `styled-textbox-background-${backgroundColor}`,
      )}
    >
      {props.children}
    </div>
  );
}

export default TextBox;
