import React from 'react';
import { useState } from 'react';

import { BsGrid3X3GapFill } from 'react-icons/bs';
import Modal from 'react-bootstrap/Modal';
import { FiShare2, FiHeart } from 'react-icons/fi';
import '../ImageGallery/ImageGalleryStyle.css';

import house1 from '../../../assets/images/house1.jpg';
const ImageGallery = () => {
  const [modalShow, setModalShow] = useState(false);
  const [fullscreen] = useState(true);

  function share() {
    console.log('share');
  }
  function favourite() {
    console.log('favourite');
  }
  return (
    <div className=' imageGallery justiy-content-between'>
      <div className='bigPhoto'>
        <img src={house1} alt='gallery' className='firstPhotoGallery' />
      </div>
      <div className='smallPhotos'>
        <img src={house1} alt='Second gallery photos' className='secondPhotoGallery' />
        <img src={house1} alt='Second gallery photos' className='secondPhotoGallery2' />
        <img src={house1} alt='Second gallery photos' className='secondPhotoGallery' />
        <img src={house1} alt='Second gallery photos' className='secondPhotoGallery4' />
        <button className='showAllPhotosBtn' onClick={() => setModalShow(true)}>
          <BsGrid3X3GapFill className='iconShowAllPhotos' />
          <span className='showTextBtn'>Show all photos</span>
        </button>
      </div>
      <Modal
        fullscreen={fullscreen}
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby='example-modal-sizes-title-lg'>
        <Modal.Header closeButton>
          <Modal.Title id='example-modal-sizes-title-lg'>
            <div className='modalButtons'>
              <button className='shareBtnModal' onClick={() => share()}>
                <FiShare2 className='iconShare' />
                <span className='shareTextBtn'> Share</span>
              </button>
              <button className='shareBtnModal' onClick={() => favourite()}>
                <FiHeart className='iconHeart' />
                <span className='saveTextBtn'>Save</span>
              </button>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='container modalGallery'>
          <div>
            <img src={house1} alt='' className='modalPhoto1' />
          </div>
          <div className='justify-content-between'>
            <img src={house1} alt='' className='modalPhoto' />
            <img src={house1} alt='' className='modalPhoto' />
          </div>
          <div>
            <img src={house1} alt='' className='modalPhoto1' />
          </div>
          <div className='justify-content-between'>
            <img src={house1} alt='' className='modalPhoto' />
            <img src={house1} alt='' className='modalPhoto' />
          </div>
          <div>
            <img src={house1} alt='' className='modalPhoto1' />
          </div>
          <div className='justify-content-between'>
            <img src={house1} alt='' className='modalPhoto' />
            <img src={house1} alt='' className='modalPhoto' />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ImageGallery;
