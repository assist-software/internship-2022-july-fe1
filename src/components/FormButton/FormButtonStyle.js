import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 44px;
  border-radius: 8px;
  background: #0356e8;
  border: none;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin: 40px 0 8px 0;

  &:hover {
    background: #0241ae;
  }

  &:active {
    background: #012b74;
  }
`;
