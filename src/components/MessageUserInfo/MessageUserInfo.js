import React from "react";
import { ElipsisText, Header, UserInfoContainer } from "./MessageUserInfoStyle";

const MessageUserInfo = ({
  profileImage,
  altImage,
  name,
  date,
  houseName,
  label,
  stopStyle,
}) => {
  return (
    <UserInfoContainer stopStyle={stopStyle}>
      <div className="profileImg">
        <img src={profileImage} alt={altImage} />
      </div>
      <div className="column-items">
        <UserInfoHeader name={name} date={date} />
        <ElipsisText> {houseName} </ElipsisText>
        <label>{label}</label>
      </div>
    </UserInfoContainer>
  );
};

const UserInfoHeader = ({ name, date }) => {
  return (
    <Header>
      <p>{name}</p>
      <p>{date}</p>
    </Header>
  );
};
export default MessageUserInfo;
