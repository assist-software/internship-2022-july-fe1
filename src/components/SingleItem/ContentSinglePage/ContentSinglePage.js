import React, { useEffect, useRef, useState } from 'react';
import '../../SingleItem/ContentSinglePage/ContentSinglePageStyle.css';
import { FiShare2, FiHeart } from 'react-icons/fi';

import GoogleMap from '../../GoogleMap/GoogleMap';
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

import { APIData } from '../../../api/APIData';
import user1 from '../../../assets/images/user1.webp';
import Button from 'react-bootstrap/esm/Button';

const ContentSinglePage = ({ id }) => {
  const inputRef = useRef(null);
  const [defaultMessage, setDefaultMessage] = useState('');
  const [cardContent, setCardContent] = useState({});

  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const d = new Date(cardContent.createdAt);
  let year = d.getFullYear();
  let userMonthJoined = month[d.getMonth()];

  useEffect(() => {
    id = '6d8b261b-9958-425d-f760-08da6a2f1d50';
    fetch(`${APIData.url}/listing/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCardContent(data);
      });
  }, []);

  const scrollToElement = (e) => {
    e.preventDefault();
    inputRef.current.scrollIntoView();
    setDefaultMessage(
      'Hello! I would love to purchase your listing. Please reach back to me so that we can set up a meeting to discuss further details. Thanks!',
    );
  };

  const sendMessage = (event) => {
    console.log('Message: ', inputRef.current.value);
    alert('Your message was succesfully sent!');
  };
  function share() {
    console.log('share');
  }
  function favourite() {
    console.log('favourite');
  }
  return (
    <div className='contentSinglePage'>
      <div className='infoLabel'>
        <span className='titleSpan'>{cardContent.title}</span>
        <Button id='shareBtn' variant='default' onClick={() => share()}>
          <FiShare2 className='iconShare' />
          Share
        </Button>
      </div>
      <span className='priceSpan'>{cardContent.price} lei </span>
      <div className='infoForm justify-content-between'>
        <div className='descriptionForm '>
          <h4 className='descriptTitle'>Description</h4>
          <div className='descriptContent'>{cardContent.description}</div>
        </div>
        <div className='userForm'>
          <div className='userContent'>
            <img src={user1} alt='UserPhoto' id='userPhoto' />
            <div className='userInfo'>
              <span className='userName'>Name</span>
              <div className='pInfo'>
                <p>
                  Joined in {userMonthJoined} {year}
                </p>
                <p>Response rate: 0%</p>
                <p>Response time: within an hour</p>
              </div>
            </div>
          </div>
          <div className='buttonsGroup'>
            <Button className='purchaseBtn' onClick={(e) => scrollToElement(e)}>
              Purchase
            </Button>
            <Button className='heartBtn' onClick={() => favourite()}>
              <FiHeart />
            </Button>
          </div>
        </div>
      </div>
      <div className='locationContent'>
        <div className='locationForm'>
          <h4>Location</h4>
          <span className='spanLocation'>{cardContent.location}</span>
          <div className='maps'>
            <GoogleMap />
          </div>
        </div>
      </div>
      <div className='messageForm'>
        <h4>Message the seller</h4>
        <textarea
          placeholder='Insert your message...'
          value={defaultMessage}
          onChange={(e) => setDefaultMessage(e.target.value)}
          ref={inputRef}
          name='textarea'
          id='input'
          className='messageText'
          cols='30'
          rows='10'></textarea>
        <div className='sendBtnPosition'>
          <Button className='sendBtn' onClick={() => sendMessage()} disabled={!defaultMessage}>
            Send
          </Button>
        </div>
      </div>
      {/* <div>
        <GooglePlacesAutocomplete apiKey='AIzaSyB0C38O6O4IIHFaxHYhLZKF_Uv_0fvsJA4' />
      </div> */}
    </div>
  );
};

export default ContentSinglePage;
