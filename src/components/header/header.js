import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.css';
import { FiHeart, FiUser, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdOutlineSecurity, MdOutlineNotificationsNone, MdLogout } from 'react-icons/md';
import { BiMessageDetail } from 'react-icons/bi';
import logo from '../../assets/images/assistLogo.png';

import { useGlobalAuthContext } from '../../Context/authContext';

const Header = () => {
  const { logout } = useGlobalAuthContext()

  const handleLogOut = () => {
    logout()
  }

  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className='mb-3 headerComponent'>
          <Container>
            <Navbar.Brand href='/'>
              <img src={logo} alt='Assist Logo' className='headerLogo' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement='end'>
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className='justify-content-between'>
                  <Dropdown className='dropDownBtn' id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    <Dropdown.Toggle variant='default'>
                      <span className='textCategory'>Category </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href='/category/latest'>Latest</Dropdown.Item>
                      <Dropdown.Item href='/category/Big'>Big houses</Dropdown.Item>
                      <Dropdown.Item href='/category/Small'>Small houses</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav>
                <div id='inputSearchBar'>
                  <input
                    type='text'
                    placeholder='Search'
                    className='searchInput'
                    aria-label='Search'
                  />

                  <FiSearch className='searchIcon'></FiSearch>
                </div>
                <div>
                  <Button variant='outline' className='favouritesBtn'>
                    <FiHeart id='headerIcons'></FiHeart>
                    <Link to={'/favourites'} className='colorText'>
                      Favourites
                    </Link>
                  </Button>
                </div>
                <div>
                  <Dropdown
                    className='userBtn'
                    title='My account'
                    id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    <Dropdown.Toggle variant='default'>
                      <span className='colorText'>
                        <FiUser id='headerIcons' />
                        My account
                      </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <h5> Hello!</h5>
                      <Dropdown.Item className='textMyAccount'>
                        <FiUser className='myAccountIcons' />

                        <Link to={'/my-account/profile'}>Profile</Link>
                      </Dropdown.Item>
                      <Dropdown.Item href='/my-account/login&security' className='textMyAccount'>
                        <MdOutlineSecurity className='myAccountIcons' />
                        Login & security
                      </Dropdown.Item>
                      <Dropdown.Item href='/my-account/notifications' className='textMyAccount'>
                        <MdOutlineNotificationsNone className='myAccountIcons' />
                        Notifications
                      </Dropdown.Item>
                      <Dropdown.Item href='/my-account/messages' className='textMyAccount'>
                        <BiMessageDetail className='myAccountIcons' />
                        Messages
                      </Dropdown.Item>
                      <div className='emptyDiv'></div>
                      <Dropdown.Item href='/' onClick={() => handleLogOut()} className='textMyAccount'>
                        <MdLogout className='myAccountIcons' />
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header;
