import React from "react";

import Card from "../Card/Card";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CardSeeEverything from "./CardSeeEverything";

import { cardsMock } from "../../api/ApiMocks";
import Button from "react-bootstrap/Button";
import { FiArrowRight } from "react-icons/fi";

const CarouselCards = ({ render }) => {
  function seeEverything() {
    console.log("see everything");
  }

  return (
    <div className="container ">
      <br />
      <div className="ha">
        <h4>Latest</h4>
        <Button
          variant="default"
          className="shadow-none"
          onClick={() => seeEverything()}
        >
          <span className="ha2">
            See everything <FiArrowRight />
          </span>
        </Button>
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
      >
        {cardsMock.map((item, index) => {
          if (item.location === "Cluj") {
            return (
              <div key={index}>
                <SwiperSlide key={index}>
                  <Card key={index} />
                </SwiperSlide>
              </div>
            );
          }
          return console.log();
        })}
        <SwiperSlide>
          <CardSeeEverything />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselCards;
