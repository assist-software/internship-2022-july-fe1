import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px;
  gap: 8px;
  width: 165px;
  height: 44px;
  background: ${({ bcolor }) => (bcolor ? "#0356e8" : "#fff")};
  border-radius: 8px;
  border: ${({ bcolor }) =>
    bcolor ? "1px solid #0356e8" : "1px solid #0231ae"};
  color: ${({ bcolor }) => (bcolor ? "#fff" : "#0231ae")};
  font-size: 14px;
`;
