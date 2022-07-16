import React from 'react';
import { StyledPageContainer } from '../AddNewPage/AddNewPageElements';
import {
  LineBreak,
  StyledMyAccountContent,
  StyledProfileMenu,
  StyledPageContent,
} from './MyAccountPageElements';
import StyledProfileButton from '../../components/ProfileButton/ProfileButton';
import { BiUser, BiMessageSquareDetail } from 'react-icons/bi';
import { MdSecurity, MdOutlineLogout } from 'react-icons/md';
import { IoMdNotificationsOutline } from 'react-icons/io';
import StyledFormTitle from '../../components/FormTitle/FormTitle';
import ProfilePage from './ProfilePage';
import LoginSecurityPage from './LoginSecurityPage';
import NotificationsPage from './NotificationsPage';
import MessagesPage from './MessagesPage';
import { useLocation } from 'react-router-dom';
import UploadImage from '../../components/ProfileImage/UploadImage';

const MyAccountPage = ({ pageName }) => {
  const location = useLocation();

  return (
    <StyledPageContainer>
      <StyledPageContent>
        {/* Profile menu */}
        <StyledProfileMenu>
          {/* Profile image */}
          <UploadImage />
          {/* Profile buttons */}
          <StyledProfileButton
            icon={<BiUser />}
            text='Profile'
            selected={
              location.pathname === '/my-account/profile' ? true : false
            }
            pathname='/my-account/profile'
          />
          <StyledProfileButton
            icon={<MdSecurity />}
            text='Login & security'
            selected={
              location.pathname === '/my-account/login&security' ? true : false
            }
            pathname='/my-account/login&security'
          />
          <StyledProfileButton
            icon={<IoMdNotificationsOutline />}
            text='Notifications'
            selected={
              location.pathname === '/my-account/notifications' ? true : false
            }
            pathname='/my-account/notifications'
          />
          <StyledProfileButton
            icon={<BiMessageSquareDetail />}
            text='Messages'
            selected={
              location.pathname === '/my-account/messages' ? true : false
            }
            pathname='/my-account/messages'
          />
          <LineBreak />
          <StyledProfileButton
            icon={<MdOutlineLogout />}
            text='Logout'
            selected={false}
            pathname='/login'
          />
        </StyledProfileMenu>
        {/* Profile page content */}
        <StyledMyAccountContent>
          <StyledFormTitle text={pageName} />
          {/* Profile page */}
          {pageName === 'Profile' && <ProfilePage />}
          {/* Login & security */}
          {pageName === 'Login & security' && <LoginSecurityPage />}
          {/* Notificatoins */}
          {pageName === 'Notifications' && <NotificationsPage />}
          {/* Messages */}
          {pageName === 'Messages' && <MessagesPage />}
        </StyledMyAccountContent>
      </StyledPageContent>
    </StyledPageContainer>
  );
};

export default MyAccountPage;
