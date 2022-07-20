import React, { useState } from "react";
import { Textarea, TextareaMessage } from "./TextareaStyle";

const StyledTextarea = ({ value, onchange }) => {
  const MAX_CHARS = 100;
  const handleTextareaChange = (e) => {
    // setDescription(e.target.value);

  };
  const remaining = `${value.length}/${MAX_CHARS} mandatory characters`;
  return (
    <div>
      <Textarea
        id="myTextarea"
        onChange={onchange}
        value={value}
        placeholder="Placeholder"
      />
      <TextareaMessage>{remaining}</TextareaMessage>
    </div>
  );
};

export default StyledTextarea;
