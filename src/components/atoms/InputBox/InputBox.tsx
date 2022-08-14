import * as React from "react";
import "./styles.css";

interface Props {
  value?: string;
  required?: boolean;
}

function InputBox(props: Props) {
  const { value } = props;

  return (
    <div className="inputBox">
      <p>입력해주세요</p>
      <input type="text" />
    </div>
  );
}

export default InputBox;
