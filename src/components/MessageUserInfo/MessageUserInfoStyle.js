import styled from "styled-components";

export const UserInfoContainer = styled.div`
  height: 92px;
  width: 292px;
  display: flex;
  align-items: center;
  padding: 0 10px;

  .profileImg {
    width: 40px;
    height: 40px;
    margin: 0 10px 0 0;
    border-radius: 50%;
  }

  * {
    margin: 0;
    padding: 0;
  }

  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
  }

  .column-items {
    display: flex;
    flex-direction: column;
    height: 92px;
    justify-content: center;
  }

  label {
    color: #596274;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }

  &:hover {
    background: ${({ stopStyle }) => (stopStyle ? "none" : "#f2f4f7")};
    cursor: ${({ stopStyle }) => (stopStyle ? "auto" : "pointer")};
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ElipsisText = styled.span`
  max-width: 220px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #404653;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
`;
