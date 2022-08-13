import * as React from "react";
import "./styles.css";

interface Props {
  children: React.ReactNode;
}

function InputBox() {

  return (
    <div className="inputBox">
      <p>입력해주세요</p>
      <input type="text" />
    </div>   
  );
}

export default InputBox;