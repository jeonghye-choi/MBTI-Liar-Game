import * as React from "react";
import "./styles.css";
import classnames from "classnames";

interface Props {
  children: React.ReactNode;
}

function TextBox(props: Props) {
  const { children } = props;

  return (
    <div className="text-box">
      {children}
    </div>   
  );
}

export default TextBox;
