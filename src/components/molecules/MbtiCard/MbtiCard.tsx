import classNames from "classnames";
import * as React from "react";
import "./styles.css";

interface Props {
  children: React.ReactNode;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}

function MbtiCard(props: Props) {
  const { children, color, fontSize, fontWeight } = props;

  return (
    <div className="mbti-card">
      <p className="text-mbti" style={{color, fontSize, fontWeight}}>
        {children}
      </p>
    </div>
  );
}

export default MbtiCard;
