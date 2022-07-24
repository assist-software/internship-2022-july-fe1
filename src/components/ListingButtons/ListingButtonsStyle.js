import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListingButtonsContainer = styled.div`
  width: 100%;

  hr {
    color: #98a2b3;
  }
`;
export const ListingButton = styled(Link)`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #98a2b3;
  text-decoration: none;
  margin-right: 28px;

  &:hover {
    color: #0241ae;
    border-bottom: 3px solid #0241ae;
    padding-bottom: 17px;
  }

  span {
    margin-left: 8px;
    font-weight: 600;
    font-size: 16px;
    color: #98a2b3;
    width: 36px;
    padding: 5px 10px;
    height: 24px;
    background-color: #f1f6ff;
    border-radius: 4px;
  }
`;
