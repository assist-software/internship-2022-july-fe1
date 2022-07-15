import React from "react";

import Carousel from "react-grid-carousel";
import Card from "../Card/Card";

const CarouselCards = (props) => {

  return (
    <div className="container">
      <div className="carouselComp">
        <Carousel cols={4} rows={1} gap={1} loop>
          <Carousel.Item>
          <Card />
          </Carousel.Item>
          <Carousel.Item>
            <Card />
          </Carousel.Item>
          <Carousel.Item>
            <Card />
          </Carousel.Item>
          <Carousel.Item>
            <Card />
          </Carousel.Item>
          <Carousel.Item>
            <Card />
          </Carousel.Item>
          <Carousel.Item>
            <Card />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselCards;
