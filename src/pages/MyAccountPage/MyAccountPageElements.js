import styled from "styled-components";

export const StyledPageContent = styled.div`
  display: flex;
  margin: 40px 0 0 0;
`;
export const StyledProfileMenu = styled.div`
  width: 165px;
  display: flex;
  flex-direction: column;
`;

export const StyledProfileImage = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
`;

export const EditProfileImageButton = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0356eb;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.16);
  position: relative;
  left: 78px;
  top: -32px;
  cursor: pointer;
`;

export const LineBreak = styled.hr`
  width: 100%;
  margin: 0 0 10px 0;
  border-bottom: 1px solid gray;
`;

export const StyledMyAccountContent = styled.div`
  width: 652px;
  margin: 0 0 0 100px;
  display: flex;
  flex-direction: column;
`;

export const ProfileContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const StyledRowDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 18px 0 0 0;

  button {
    color: #0241ae;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    border: none;
    background-color: white;
  }

  button:hover {
    background-color: #e2edff;
    border-radius: 8px;
    padding: 0 6px;
    cursor: pointer;
  }

  .redTextColor {
    color: red;
  }
`;

export const StyledText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #667085;
`;
