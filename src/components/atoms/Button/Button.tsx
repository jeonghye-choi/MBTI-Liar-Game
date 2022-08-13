import * as React from "react";
import "./styles.css";

interface Props {
  children: React.ReactNode;
}

function Button(props: Props) {
  const { children } = props;

  return (
    <div className="button">
      {children}
    </div>   
  );
}

export default Button;
