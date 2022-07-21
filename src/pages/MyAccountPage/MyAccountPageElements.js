import styled from "styled-components";

export const StyledPageContent = styled.div`
  display: flex;
  margin: 40px 0 0 0;
`;

export const StyledProfileMenu = styled.div`
  width: 165px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    display: none;
  }
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

  @media screen and (max-width: 768px) {
    width: 95vw;
    margin: 0 10px;
  }
`;
export const StyledColumnDiv = styled.div`
  display: flex;
  flex-direction: column;

  input {
    margin: 20px 0;
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

  @media (max-width: 768px) {
    left: 85%;
  }
`;

// Messages page
export const MessagesContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .noMessageImage {
    width: 292px;
    height: auto;
  }

  img {
    width: 40px;
    height: 40px;
    margin-bottom: 50px;
  }

  .empty {
    height: 30px;
    width: 100%;
  }

  .no-messages {
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const ChatContainer = styled.div`
  width: 100%;
  height: 90%;
  border-radius: 24px;
  border: 1px solid #e4e7ec;
  display: flex;
`;

export const ReceivedMessagesContainer = styled.div`
  max-height: 855px;
  display: flex;
  flex-direction: column;
  min-width: 292px;
  padding: 20px 0;
  overflow-y: auto;
  overflow-x: hidden;
  border: 1px solid #e4e7ec;
  border-radius: 24px 0 0 24px;
`;

export const HeaderAndChatContainer = styled.div`
  width: 570px;
`;

export const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  color: #1c1c1e;
  height: 76px;
  border-bottom: 1px solid #e4e7ec;
`;

export const Buttons = styled.div`
  width: 72px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

export const ChatContent = styled.div`
  width: 100%;

  height: 695px;
  border-radius: 0 0 24px 0;
  display: flex;
  flex-direction: column-reverse;

  .messages {
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0 10px;
  }

  .messages::-webkit-scrollbar {
    width: 2px;
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    margin-bottom: 5px;
  }
`;

export const MessageInput = styled.input`
  width: 90%;
  border: 1px solid #d0d5dd;
  border-radius: 24px;
  height: 44px;
  outline: none;
  padding: 0 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;

  &::-webkit-input-placeholder {
    color: #98a2b3;
  }

  @media (max-width: 1700px) {
    width: 85%;
  }
`;

export const SendMessageButton = styled.button`
  width: 44px;
  min-height: 44px;
  background-color: #0356e8;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  svg {
    height: 30px;
    width: 30px;
  }
`;

export const SendedMessage = styled.div`
  min-height: 46px;
  display: flex;
  align-items: center;
  width: min-content;
  padding: 0 10px;
  justify-content: center;
  border-radius: 24px;
  background: #f2f4f7;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #1c1c1e;
  justify-content: flex-end;
  margin: 10px 0 10px auto;
  white-space: nowrap;
`;

export const ReceivedMessage = styled.div`
  border: 1px solid #e4e7ec;
  min-height: 46px;
  width: min-content;
  border-radius: 24px;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #1c1c1e;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  margin: 10px 0 10px;
`;
