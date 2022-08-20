import classNames from "classnames";
import * as React from "react";
import "./styles.css";

interface Props {
  children: React.ReactNode;
}

function ExplainCard(props: Props) {
  const { children } = props;

  return (
    <div className="explain-card">
      {children}
    </div>
  );
}

export default ExplainCard;
