import styled from "styled-components";

export const Password = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IconPass = styled.span`
  margin: -55px 0 0 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 25px;
  cursor: pointer;
  border-left: 2px solid #d0d5dd;

  @media screen and (max-width: 1300px) {
    margin: -55px 0 0 85%;
  }
`;
