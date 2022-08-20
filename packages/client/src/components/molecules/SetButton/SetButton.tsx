import classNames from "classnames";
import * as React from "react";
import "./styles.css";

interface Props {
  children: React.ReactNode;
}

function SetButton(props: Props) {
  const { children } = props;

  return (
    <div className="set-group">
      {children}
    </div>
  );
}

export default SetButton;
