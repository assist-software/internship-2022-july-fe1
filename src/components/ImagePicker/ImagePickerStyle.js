import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  /* margin-left: -15px; */
  /* justify-content: spac; */

  .dropzone {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dropzone,
  .selectedImage {
    width: 165px;
    height: 130px;
    border-radius: 12px;
    background-color: #f2f4f7;
    margin: 0 15px 30px 15px;
  }
  ul {
    list-style: none;
  }

  svg {
    height: 25px;
    width: 25px;
    cursor: pointer;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }

  .delete {
    position: relative;
    top: -130px;
    width: 165px;
    height: 130px;
    opacity: 0;
    background-color: black;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .circle {
    position: relative;
    top: -210px;
    left: 65px;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 50%;
    opacity: 0;
  }

  .selectedImage:hover .delete {
    opacity: 20%;
  }

  .selectedImage:hover .circle {
    opacity: 100%;
  }
`;
