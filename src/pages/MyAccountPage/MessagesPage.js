import React from "react";
import {
  Buttons,
  ChatContainer,
  ChatContent,
  ChatHeader,
  HeaderAndChatContainer,
  MessageInput,
  MessagesContainer,
  ReceivedMessage,
  ReceivedMessagesContainer,
  SendedMessage,
  SendMessageButton,
} from "./MyAccountPageElements";
import ChatBot from "../../assets/images/chatbot.png";
import StyledMyAccountTitle from "../../components/MyAccountTitle/MyAccountTitle";
import StyledInputLabel from "../../components/InputLabel/InputLabel";
import StyledPageButton from "../../components/PageButton/PageButton";
import ProfileImage from "../../assets/images/defaultUserProfile.png";
import HarryPotter from "../../assets/images/harryPotter.jpg";
import MessageUserInfo from "../../components/MessageUserInfo/MessageUserInfo";
import { CgTrash } from "react-icons/cg";
import { AiOutlineStop, AiOutlineSend } from "react-icons/ai";

const MessagesPage = () => {
  const existMessages = true;
  const duplicate = (x, n) => Array.from(new Array(n), () => x);
  const user = (
    <MessageUserInfo
      profileImage={ProfileImage}
      altImage="Profile image"
      name="Jordan Henderson"
      date="20.06"
      houseName="Hogwarts School of Witchcraft and Wizardry."
      label="Fantastic"
    />
  );

  const message = (
    <>
      <SendedMessage>Merge fantastic</SendedMessage>
      <ReceivedMessage>Felicitari =)))</ReceivedMessage>
    </>
  );

  const users = duplicate(user, 30);
  const messages = duplicate(message, 30);

  return (
    <MessagesContainer>
      {!existMessages && (
        <div className="no-messages">
          <img src={ChatBot} alt="Chatbot" className="noMessageImage" />
          <StyledMyAccountTitle text={"You haven't sent any messages yet."} />
          <StyledInputLabel
            text={"This is where you'll find all of your chats and messages."}
          />
          <div className="empty"></div>
          <StyledPageButton text="Start exploring" color={true} />
        </div>
      )}
      {existMessages && (
        <ChatContainer>
          <ReceivedMessagesContainer>{users}</ReceivedMessagesContainer>
          <HeaderAndChatContainer>
            <ChatHeader>
              <MessageUserInfo
                id="currentUser"
                profileImage={HarryPotter}
                altImage="Profile image"
                houseName="Jordan Henderson"
                label="Active 2 days ago"
                stopStyle={true}
              />
              <Buttons>
                <CgTrash />
                <AiOutlineStop />
              </Buttons>
            </ChatHeader>
            <ChatContent>
              <div className="row">
                <MessageInput type={"text"} placeholder="Message.." />
                <SendMessageButton>
                  <AiOutlineSend />
                </SendMessageButton>
              </div>
              <div className="messages">{messages}</div>
            </ChatContent>
          </HeaderAndChatContainer>
        </ChatContainer>
      )}
    </MessagesContainer>
  );
};

export default MessagesPage;
