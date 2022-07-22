import React from 'react';
import ImageGallery from '../SingleItem/ImageGallery/ImageGallery';
import ContentSinglePage from '../SingleItem/ContentSinglePage/ContentSinglePage';

const SingleItem = () => {
  return (
    <div className='container'>
      <ImageGallery />
      <ContentSinglePage />
    </div>
  );
};

export default SingleItem;
