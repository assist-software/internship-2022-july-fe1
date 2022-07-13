import styled from "styled-components";

export const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;
export const LeftSide = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginImage = styled.img`
  height: auto;
  width: 50vw;
`;
export const ContentContainer = styled.div`
  min-width: 40%;
  display: flex;
  flex-direction: column;
`;

export const LoginForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  h2 {
    font-size: 12px;
    font-weight: 400;
    color: #596274;
    margin: 10px 0 0 0;
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
  }
`;

export const BreakLine = styled.div`
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
