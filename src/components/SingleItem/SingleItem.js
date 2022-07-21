import React from 'react';
import ImageGallery from '../SingleItem/ImageGallery';
import ContentSinglePage from './ContentSinglePage';

const SingleItem = () => {
  return (
    <div className='container'>
      <ImageGallery />
      <ContentSinglePage />
    </div>
  );
};

export default SingleItem;
