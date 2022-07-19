import React from 'react';
import StyledInputLabel from '../../components/InputLabel/InputLabel';
import {
  LineBreak,
  NotificationsContainer,
  StyledRowDiv,
  StyledText,
} from './MyAccountPageElements';

const NotificationsPage = () => {
  return (
    <NotificationsContainer>
      {/* News */}
      <StyledRowDiv>
        <StyledInputLabel text='News' />
        <button>Edit</button>
      </StyledRowDiv>
      <StyledText>Off</StyledText>
      <LineBreak />
      {/* Discounts & promotions */}
      <StyledRowDiv>
        <StyledInputLabel text='Discounts & promotions' />
        <button>Edit</button>
      </StyledRowDiv>
      <StyledText>Off</StyledText>
      <LineBreak />
      {/* Messages */}
      <StyledRowDiv>
        <StyledInputLabel text='Messages' />
        <button>Edit</button>
      </StyledRowDiv>
      <StyledText>Off</StyledText>
      <LineBreak />
      {/* New listings */}
      <StyledRowDiv>
        <StyledInputLabel text='New listings' />
        <button>Edit</button>
      </StyledRowDiv>
      <StyledText>Off</StyledText>
      <LineBreak />
      {/* Price change */}
      <StyledRowDiv>
        <StyledInputLabel text='Price change' />
        <button>Edit</button>
      </StyledRowDiv>
      <StyledText>Off</StyledText>
      <LineBreak />
    </NotificationsContainer>
  );
};

export default NotificationsPage;
