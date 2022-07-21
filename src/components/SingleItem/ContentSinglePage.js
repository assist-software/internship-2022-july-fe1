import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { FiShare2, FiHeart } from 'react-icons/fi';
import user1 from '../../assets/images/user1.webp';
import GoogleMap from '../GoogleMap/GoogleMap';

import { useRef, useState } from 'react';
import '../SingleItem/SingleItem.css';

const ContentSinglePage = () => {
  const inputRef = useRef(null);
  const [defaultMessage, setDefaultMessage] = useState('');

  const scrollToElement = (e) => {
    e.preventDefault();
    inputRef.current.scrollIntoView();
    setDefaultMessage(
      'Hello! I would love to purchase your listing. Please reach back to me so that we can set up a meeting to discuss further details. Thanks!',
    );
    console.log('das');
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
        <span>Dreamy Treehouse Above Park City</span>
        <Button className='shareBtn' variant='light' onClick={() => share()}>
          <FiShare2 className='iconShare' />
          <span>Share</span>
        </Button>
      </div>
      <span className='priceSpan'>123,456 lei</span>
      <div className='infoForm justify-content-between'>
        <div className='descriptionForm '>
          <h4 className='descriptTitle'>Description</h4>
          <div className='descriptContent'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat ad doloribus earum,
            vel ipsa, id magnam quam sequi ipsum et animi omnis! Iste expedita animi ut molestias,
            dolor atque perspiciatis. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Totam asperiores nam aliquam reprehenderit recusandae, nulla doloribus debitis ipsa. Cum
            maiores sapiente voluptatum impedit non qui saepe architecto, atque eveniet? Et. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Itaque, possimus voluptas. Ducimus
            tempore deserunt architecto dolorum labore quam! Alias tempora corporis asperiores
            distinctio, eligendi amet saepe quod consequatur cupiditate ut!
          </div>
        </div>
        <div className='userForm'>
          <div className='userContent'>
            <img src={user1} alt='UserPhoto' id='userPhoto' />
            <div className='userInfo'>
              <span className='userName'>Vasile Henderson</span>
              <div className='pInfo'>
                <p>Joined in July 2020</p>
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
          <span className='spanLocation'>City, County</span>
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
    </div>
  );
};

export default ContentSinglePage;
