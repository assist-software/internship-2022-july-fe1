import styled from "styled-components";

export const Button = styled.button`
  height: 44px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #0241ae;
  background: none;
  color: #0241ae;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 20px;
    width: auto;
    margin: 0 10px 0 0;
  }

  &:hover {
    background: #e2edff;
  }

  &:active {
    background: #b7d1fe;
  }
`;
