import classNames from "classnames";
import * as React from "react";
import "./styles.css";

interface Props {
  children: React.ReactNode;
  backgroundColor?: string;
}

function Player(props: Props) {
  const { children, backgroundColor } = props;

  return (
    <div className="player" style={{backgroundColor}}>
      {children}
    </div>
  );
}

export default Player;