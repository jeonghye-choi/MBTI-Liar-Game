import classNames from "classnames";
import * as React from "react";
import "./styles.css";

interface Props {
  backgroundColor: "green" | "grey";
  children: React.ReactNode;
  onClick: () => void;
}

function Button(props: Props) {
  const { backgroundColor, children, onClick } = props;

  return (
    <button
      className={classNames("button", `background-color-${backgroundColor}`)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
