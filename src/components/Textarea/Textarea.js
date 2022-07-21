import React, { useState } from "react";
import { Textarea, TextareaMessage } from "./TextareaStyle";

const StyledTextarea = () => {
  const MIN_CHARS = 100;
  const [text, setText] = useState("");
  const handleTextareaChange = (e) => {
    setText(e.target.value);
  };
  const remaining = `${text.length}/${MIN_CHARS} mandatory characters`;
  return (
    <div>
      <Textarea
        id="myTextarea"
        onChange={(e) => handleTextareaChange(e)}
        value={text}
        placeholder="Placeholder"
      />
      <TextareaMessage>{remaining}</TextareaMessage>
    </div>
  );
};

export default StyledTextarea;
