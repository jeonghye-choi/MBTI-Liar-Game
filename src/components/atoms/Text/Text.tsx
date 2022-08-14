import * as React from "react";
import "./styles.css";

interface Props {
  children: React.ReactNode;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}

function Text(props: Props) {
  const { children, color, fontSize, fontWeight } = props;

  return (
    <div className="text" style={{ color, fontSize, fontWeight }}>
      {children}
    </div>
  );
}

export default Text;
