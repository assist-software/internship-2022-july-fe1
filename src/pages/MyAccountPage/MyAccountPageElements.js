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

export const LineBreak = styled.hr`
  width: 100%;
  margin: 0 0 10px 0;
  border-bottom: 1px solid gray;
`;

export const StyledMyAccountContent = styled.div`
  /* width: 652px; */
  width: 45vw;
  margin: 0 0 0 100px;
  display: flex;
  flex-direction: column;
`;
export const StyledColumnDiv = styled.div`
  display: flex;
  flex-direction: column;

  input {
    margin: 20px 0;
  }
`;
export const MessagesContainer = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 235px;
    height: auto;
    margin-bottom: 50px;
  }

  .empty {
    height: 30px;
    width: 100%;
  }
`;
export const NotificationsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export const LoginSecurityContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  .updatePassword {
    display: ${(props) =>
      props.accountPassword.currentPassword.isOpened ? "flex" : "none"};
  }
`;
export const ProfileContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  input[type="date"] {
    height: 44px;
    border-radius: 8px;
    padding: 0 10px;
    margin: 20px 0;
    border: 1px solid #d0d5dd;
  }

  .select-placeholder-text {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #d0d5dd;
  }

  .longInput {
    width: 48%;
  }
  .updateName {
    display: ${(props) => (props.userData.name.isOpened ? "flex" : "none")};
  }

  .updateGender {
    display: ${(props) => (props.userData.gender.isOpened ? "flex" : "none")};
  }
  .updateDateOfBirth {
    display: ${(props) =>
      props.userData.dateOfBirth.isOpened ? "flex" : "none"};
  }
  .updateEmail {
    display: ${(props) => (props.userData.email.isOpened ? "flex" : "none")};
  }
  .updatePhoneNumber {
    display: ${(props) =>
      props.userData.phoneNumber.isOpened ? "flex" : "none"};
  }
  .updateAddress {
    display: ${(props) => (props.userData.address.isOpened ? "flex" : "none")};
  }

  .nameVisibility {
    display: ${(props) => (props.userData.name.isOpened ? "none" : "flex")};
  }
  .genderVisibility {
    display: ${(props) => (props.userData.gender.isOpened ? "none" : "flex")};
  }
  .dateOfBirthVisibility {
    display: ${(props) =>
      props.userData.dateOfBirth.isOpened ? "none" : "flex"};
  }
  .emailVisibility {
    display: ${(props) => (props.userData.email.isOpened ? "none" : "flex")};
  }
  .phoneNumberVisibility {
    display: ${(props) =>
      props.userData.phoneNumber.isOpened ? "none" : "flex"};
  }
  .addressVisibility {
    display: ${(props) => (props.userData.address.isOpened ? "none" : "flex")};
  }
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

export const ConnectedDevice = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  svg {
    color: #667085;
    height: 50px;
    width: auto;
    margin: 0 20px 0 0;
  }
`;

export const MessageNotifications = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background: #f2f2f7;
  position: absolute;
  top: 90%;
  left: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a5a5a5;
  cursor: pointer;

  &:hover {
    background-color: #e3e1e7;
  }

  svg {
    width: 30px;
    height: 30px;
  }
`;
