import styled from 'styled-components';

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
export const NotificationsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export const LoginSecurityContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export const ProfileContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  input[type='date'] {
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
    display: ${(props) => (props.userData.name.isOpened ? 'flex' : 'none')};
  }

  .updateGender {
    display: ${(props) => (props.userData.gender.isOpened ? 'flex' : 'none')};
  }
  .updateDateOfBirth {
    display: ${(props) =>
      props.userData.dateOfBirth.isOpened ? 'flex' : 'none'};
  }
  .updateEmail {
    display: ${(props) => (props.userData.email.isOpened ? 'flex' : 'none')};
  }
  .updatePhoneNumber {
    display: ${(props) =>
      props.userData.phoneNumber.isOpened ? 'flex' : 'none'};
  }
  .updateAddress {
    display: ${(props) => (props.userData.address.isOpened ? 'flex' : 'none')};
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
