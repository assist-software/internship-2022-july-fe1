import React from "react";

import Form from "react-bootstrap/Form";
import img from "../../assets/images/assistLogo.png";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/esm/Button";
import { FiHeart, FiUser, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <div className='headerComponent'>
      <Navbar className='container'>
        {/* <Container fluid> */}
        <Navbar.Brand href='/'>
          <img src={img} alt='Assist Logo' className='headerLogo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav navbarScroll>
            <Dropdown className='dropDownBtn ' title='Category'>
              <Dropdown.Toggle variant='default'>
                <span className='textCategory'>Category </span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href='#'>Latest</Dropdown.Item>
                <Dropdown.Item href='#'>Big houses</Dropdown.Item>
                <Dropdown.Item href='#'>Small houses</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Form>
              <Form.Control
                type='search'
                placeholder='Search'
                className='searchInput '
                aria-label='Search'
              />
            </Form>

            <FiSearch className='searchIcon'></FiSearch>
            <Button variant='outline' className='favouritesBtn '>
              <FiHeart id='headerIcons'></FiHeart>
              <Link to={"/favourites"} className='ColorText'>
                Favourites
              </Link>
            </Button>
            <Button variant='outline' className='userBtn'>
              <FiUser id='headerIcons'></FiUser>
              <Link to={"/login"} className='ColorTextd'>
                My account
              </Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </div>
  );
};

export default Header;
