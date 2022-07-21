import React from 'react';
import house1 from '../../assets/images/house1.jpg';
import '../SingleItem/SingleItem.css';
import Button from 'react-bootstrap/esm/Button';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import Modal from 'react-bootstrap/Modal';
import { FiShare2, FiHeart } from 'react-icons/fi';

import { useState } from 'react';

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
        <Button className='showAllPhotosBtn' variant='default' onClick={() => setModalShow(true)}>
          <BsGrid3X3GapFill className='iconBtn' />
          Show all photos
        </Button>
      </div>
      <Modal
        fullscreen={fullscreen}
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby='example-modal-sizes-title-lg'>
        <Modal.Header closeButton>
          <Modal.Title id='example-modal-sizes-title-lg' className='modalTitle'>
            <Button className='shareBtn' variant='light' onClick={() => share()}>
              <FiShare2 className='iconShare' />
              <span>Share</span>
            </Button>
            <Button className='shareBtnModal' variant='light' onClick={() => favourite()}>
              <FiHeart className='iconHeart' />
              Save
            </Button>
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
