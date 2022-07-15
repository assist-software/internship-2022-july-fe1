import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled.div`
  display: flex;
  color: ${({ selected }) => (selected ? "#0356e8" : "#596274")};
  height: 20px;
  margin-bottom: 26px;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }

  &:hover {
    color: #0241ae;
  }

  &:target {
    color: red;
  }
`;

export const StyledButtonText = styled(Link)`
  font-size: 14px;
  line-height: 22px;
  font-weight: 700;
  text-decoration: none;
  color: ${({ selected }) => (selected ? "#0356e8" : "#596274")};
`;
