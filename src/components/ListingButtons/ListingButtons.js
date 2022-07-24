import React from 'react';
import { ListingButton, ListingButtonsContainer } from './ListingButtonsStyle';

const StyledListingButtons = ({
  firstText,
  secondText,
  firstPathname,
  secondPathname,
  pagesNumber,
}) => {
  return (
    <ListingButtonsContainer>
      <ListingButton to={firstPathname}>{firstText}</ListingButton>
      <ListingButton to={secondPathname}>
        {secondText}
        <span>{pagesNumber}</span>
      </ListingButton>
      <hr />
    </ListingButtonsContainer>
  );
};

export default StyledListingButtons;
