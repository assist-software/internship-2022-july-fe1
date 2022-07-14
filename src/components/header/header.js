import React from 'react'
import img from '../../assets/images/assistLogo.png'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import {FiHeart, FiUser, FiSearch } from 'react-icons/fi'


const Header = () => {
    return ( 
    <div className='headerComponent'>
        <div className='container' >
            <img src={img} alt="Assist Logo" className='headerLogo'/>
            <Form className='searchForm'>
            <Dropdown   className='dropDownBtn' title='Category'>
            <Dropdown.Toggle variant="default"><a className='aColorTextCategory'>Category</a>  </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#">Latest</Dropdown.Item>
                    <Dropdown.Item href="#">Big houses</Dropdown.Item>
                    <Dropdown.Item href="#">Small houses</Dropdown.Item>
                </Dropdown.Menu>    
            </Dropdown>
            <Form.Control 
              className="searchInput"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Button variant="outline" className='faSearchIcon'>
                <FiSearch></FiSearch>
            </Button>
            <Button variant="outline" className='favouritesBtn'>
                <FiHeart id='headerIcons'></FiHeart>
                <a className='aColorText'>  Favourites</a>
            </Button>
            <Button variant="outline" className='userBtn' href="/login">
                <FiUser id='headerIcons'></FiUser>
                <a className='aColorTextd'> My account</a>
            </Button>
          </Form>   
        </div>
    </div>
    )
}

export default Header