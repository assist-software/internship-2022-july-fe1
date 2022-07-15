import styled from "styled-components";

export const StyledDropdown = styled.div`
  .dropdown {
    background: none;
    box-shadow: 0;
  }

  #dropdown-basic {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 44px;
    background: none;
    color: #d0d5dd;
    border-radius: 8px;
    border: 1px solid #d0d5dd;
    margin: 0 0 20px 0;
  }

  svg {
    height: 25px;
    width: 50px;
    border-left: 1px solid #d0d5dd;
    margin-right: -10px;
    color: #1c1c1e;
  }

  .btn:focus {
    outline: 0;
    box-shadow: 0;
  }

  .dropdown-toggle::after {
    display: none;
  }
`;
