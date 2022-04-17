import React, { useState } from "react";
import './Banner.css';
import { Carousel } from "react-bootstrap";
import wedding from "../../../images/banner/wedding.jpg";
import birthday from "../../../images/banner/baby-photo.jpeg";
import event from "../../../images/banner/Event-Photography.jpg";
const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="image d-block w-100" src={wedding} alt="First slide" />
        <Carousel.Caption>
          <h3>Memorable Weidding Day</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image d-block w-100"
          src={birthday}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Memorable Birthday Party Photo</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image d-block w-100"
          src={event}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Memorable Event Photo</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
