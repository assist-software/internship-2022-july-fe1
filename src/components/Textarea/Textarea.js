import React, { useState } from "react";
import { Textarea, TextareaMessage } from "./TextareaStyle";

const StyledTextarea = ({ value, onchange }) => {
  const MIN_CHARS = 100;
  const [text] = useState("");

  const remaining = `${text.length}/${MIN_CHARS} mandatory characters`;
  return (
    <div>
      <Textarea
        id='myTextarea'
        onChange={onchange}
        value={value}
        placeholder='Placeholder'
      />
      <TextareaMessage>{remaining}</TextareaMessage>
    </div>
  );
};

export default StyledTextarea;
