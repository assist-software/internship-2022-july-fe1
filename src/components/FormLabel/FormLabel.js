import { Label } from "./FormLabelStyle";
import React from "react";
const StyledFormLabel = ({ text, valid }) => {
  return <Label valid={valid}> {text} </Label>;
};

export default StyledFormLabel;
