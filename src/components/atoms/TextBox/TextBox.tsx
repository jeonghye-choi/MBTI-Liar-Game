import classnames from "classnames";
import * as React from "react";
import "./styles.css";

interface Props {
  children: React.ReactNode;
  backgroundColor: "green" | "grey";
  onClick?: () => void;
}

function TextBox(props: Props) {
  const { backgroundColor, onClick, children } = props;

  return (
    <button
      className={classnames("text-box", `background-color-${backgroundColor}`)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default TextBox;
