import styled from "styled-components";

export const StyledPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledPageContent = styled.form`
  height: 100%;
  width: 847px;
  margin: 32px 20px 40px 20px;

  .data {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .row {
    margin: 40px 0px 0 0;
    width: 360px;
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledData = styled.div`
  display: flex;
  border-bottom: 1px solid #e4e7ec;
  margin-top: 24px;

  /* input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  } */

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledRightContent = styled.div`
  width: 70%;

  span {
    font-size: 14px;
    font-weight: 500;
    margin-left: 10px;
    color: #4d5464;
  }

  .select-placeholder-text {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #d0d5dd;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
