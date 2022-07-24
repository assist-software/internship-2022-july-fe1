import styled from "styled-components";

export const Label = styled.label`
  color: ${({ valid }) => (valid ? "red" : "#98a2b3")};
  font-size: ${({ valid }) => (valid ? "16px" : "14px")};
  margin: 0 0 10px 0;
`;
