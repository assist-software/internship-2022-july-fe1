import React, { useEffect, useState } from "react";
import { StyledPageContainer } from "../AddNewPage/AddNewPageElements";
import {
  LineBreak,
  StyledMyAccountContent,
  StyledProfileMenu,
  StyledPageContent,
  MessageNotifications,
} from "./MyAccountPageElements";
import StyledProfileButton from "../../components/ProfileButton/ProfileButton";
import { BiUser, BiMessageSquareDetail, BiMessageDetail } from "react-icons/bi";
import { MdSecurity, MdOutlineLogout } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import ProfilePage from "./ProfilePage";
import LoginSecurityPage from "./LoginSecurityPage";
import NotificationsPage from "./NotificationsPage";
import MessagesPage from "./MessagesPage";
import { useLocation } from "react-router-dom";
import UploadImage from "../../components/ProfileImage/UploadImage";
import StyledMyAccountTitle from "../../components/MyAccountTitle/MyAccountTitle";

import { useGlobalAuthContext } from "../../Context/authContext";

const MyAccountPage = ({ pageName }) => {
  const { getUserData } = useGlobalAuthContext();
  const location = useLocation();
  const [userData, setUserData] = useState({})

  // const [test, setTest] = useState()

  useEffect(() => {
    setUserData(getUserData('id'))
  }, [getUserData])

  // const getUserDataApi = (id) => {
  //   id = '3fa85f64-5717-4562-b3fc-2c963f66afa6';
  //   const requestOptions = {
  //     method: 'GET',
  //     headers: { 'Content-Type': 'application/json' },
  //   };
  //   fetch(`https://assist-jully-2022-be1.azurewebsites.net/api/user/get/${id}`, requestOptions)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       return setTest(data);
  //     });
  // };

  // useEffect(() => {
  //   getUserDataApi('ceva')
  // }, [])

  // console.log(test);
  console.log(userData);

  return (

    <StyledPageContainer>
      {/* MessageNotifications */}
      <MessageNotifications>
        <BiMessageDetail />
      </MessageNotifications>
      <StyledPageContent>
        {/* Profile menu */}
        <StyledProfileMenu>
          {/* Profile image */}
          <UploadImage />
          {/* Profile buttons */}
          <StyledProfileButton
            icon={<BiUser />}
            text="Profile"
            selected={
              location.pathname === "/my-account/profile" ? true : false
            }
            pathname="/my-account/profile"
          />
          <StyledProfileButton
            icon={<MdSecurity />}
            text="Login & security"
            selected={
              location.pathname === "/my-account/login&security" ? true : false
            }
            pathname="/my-account/login&security"
          />
          <StyledProfileButton
            icon={<IoMdNotificationsOutline />}
            text="Notifications"
            selected={
              location.pathname === "/my-account/notifications" ? true : false
            }
            pathname="/my-account/notifications"
          />
          <StyledProfileButton
            icon={<BiMessageSquareDetail />}
            text="Messages"
            selected={
              location.pathname === "/my-account/messages" ? true : false
            }
            pathname="/my-account/messages"
          />
          <LineBreak />
          <StyledProfileButton
            icon={<MdOutlineLogout />}
            text="Logout"
            selected={false}
            pathname="/login"
          />
        </StyledProfileMenu>
        {/* Profile page content */}
        <StyledMyAccountContent>
          <StyledMyAccountTitle text={pageName} />
          {/* Profile page */}
          {pageName === "Profile" && <ProfilePage />}
          {/* Login & security */}
          {pageName === "Login & security" && <LoginSecurityPage />}
          {/* Notificatoins */}
          {pageName === "Notifications" && <NotificationsPage />}
          {/* Messages */}
          {pageName === "Messages" && <MessagesPage />}
        </StyledMyAccountContent>
      </StyledPageContent>
    </StyledPageContainer>
  );
};

export default MyAccountPage;
