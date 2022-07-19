import React from "react";
import StyledInputLabel from "../../components/InputLabel/InputLabel";
import NotificationsPageModal from "../../components/ModalWindow/ModalWindow";
import {
  LineBreak,
  NotificationsContainer,
  StyledRowDiv,
  StyledText,
} from "./MyAccountPageElements";

const NotificationsPage = () => {
  return (
    <NotificationsContainer>
      {/* News */}
      <StyledRowDiv>
        <StyledInputLabel text="News" />
        <NotificationsPageModal
          title="News"
          description={
            "Tips on how to sell quicker, interesting news and offers from us and our partenrs."
          }
        />
      </StyledRowDiv>
      <StyledText>Off</StyledText>
      <LineBreak />
      {/* Discounts & promotions */}
      <StyledRowDiv>
        <StyledInputLabel text="Discounts & promotions" />
        <NotificationsPageModal
          title="Discounts & promotions"
          description={
            "Notifications about promotions and disocunts offered by us for our services."
          }
        />
      </StyledRowDiv>
      <StyledText>Off</StyledText>
      <LineBreak />
      {/* Messages */}
      <StyledRowDiv>
        <StyledInputLabel text="Messages" />
        <NotificationsPageModal
          title="Messages"
          description={
            "Notifications about promotions and disocunts offered by us for our services."
          }
        />
      </StyledRowDiv>
      <StyledText>Off</StyledText>
      <LineBreak />
      {/* New listings */}
      <StyledRowDiv>
        <StyledInputLabel text="New listings" />
        <NotificationsPageModal
          title="New listings"
          description={
            "Notifications about promotions and disocunts offered by us for our services."
          }
        />
      </StyledRowDiv>
      <StyledText>Off</StyledText>
      <LineBreak />
      {/* Price change */}
      <StyledRowDiv>
        <StyledInputLabel text="Price change" />
        <NotificationsPageModal
          title="Price change"
          description={
            "Notifications about promotions and disocunts offered by us for our services."
          }
        />
      </StyledRowDiv>
      <StyledText>Off</StyledText>
      <LineBreak />
    </NotificationsContainer>
  );
};

export default NotificationsPage;
