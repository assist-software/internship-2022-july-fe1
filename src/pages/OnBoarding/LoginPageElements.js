import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledMainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;
export const StyledLeftSide = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const StyledLoginImage = styled.img`
  height: auto;
  width: 50vw;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
export const StyledContentContainer = styled.div`
  min-width: 50%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

export const StyledLoginForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  p {
    font-size: 12px;
    font-weight: 400;
    color: #596274;
    margin: 15px 0 0 0;
  }

  h4 {
    color: #98a2b3;
    font-size: 14px;
  }

  .inline {
    display: flex;
    justify-content: center;
    margin: 24px 0 0 0;
  }

  .checkbox {
    display: flex;
    justify-content: space-between;
    margin-top: 38px;
    color: #596274;
    font-size: 14px;
    font-weight: 500;
  }

  .checkbox span {
    margin: 0 0 0 5px;
    user-select: none;
  }
`;

export const StyledBreakLine = styled.div`
  margin: 25px 0 0 0;

  p {
    position: relative;
    left: 47%;
    top: -10px;
    color: #6c6c6c;
    font-size: 12px;
    background-color: #fff;
    width: 2rem;
    text-align: center;
  }

  hr {
    background: #d0d0d0;
  }
`;

export const StyledAnchor = styled(Link)`
  text-decoration: none;
  color: #0356e8;
  font-size: 14px;
  margin-left: 5px;
`;
