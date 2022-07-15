import styled from "styled-components";

export const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  resize: none;
  border-radius: 10px;
  border: 1px solid #d0d5dd;
  padding: 20px;
  outline: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #4d5464;
`;

export const TextareaMessage = styled.div`
  overflow: hidden;
  min-height: 40px;
  width: 100%;
  font-weight: 300;
  font-size: 10px;
  line-height: 13px;
  color: #4e4b66;
  border-radius: 0 0 10px 10px;
  margin-top: -7px;
  padding-top: 5px;
`;
