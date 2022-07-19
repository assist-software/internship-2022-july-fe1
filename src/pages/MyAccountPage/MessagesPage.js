import React from "react";
import { MessagesContainer } from "./MyAccountPageElements";
import ChatBot from "../../assets/images/chatbot.png";
import StyledMyAccountTitle from "../../components/MyAccountTitle/MyAccountTitle";
import StyledInputLabel from "../../components/InputLabel/InputLabel";
import StyledPageButton from "../../components/PageButton/PageButton";

const MessagesPage = () => {
  return (
    <MessagesContainer>
      <img src={ChatBot} alt="Chatbot" />
      <StyledMyAccountTitle text={"You haven't sent any messages yet."} />
      <StyledInputLabel
        text={"This is where you'll find all of your chats and messages."}
      />
      <div className="empty"></div>
      <StyledPageButton text="Start exploring" color={true} />
    </MessagesContainer>
  );
};

export default MessagesPage;
