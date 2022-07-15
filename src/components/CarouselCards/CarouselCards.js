import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from '../Card/Card';
import CardSeeEverything from '../CarouselCards/CardSeeEverything';

const CarouselCards = (props) => {
  return (
    <div className='container'>
      <Carousel className='carousel'>
        <Carousel.Item>
          <CardGroup className='cds'>
            <Card /> <Card /> <Card /> <Card />
          </CardGroup>
        </Carousel.Item>
        <Carousel.Item>
          <CardGroup className='cds'>
            <Card /> <Card /> <Card /> <CardSeeEverything />
          </CardGroup>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselCards;
