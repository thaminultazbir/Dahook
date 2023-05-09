import React from "react";
import Slider from "react-slick";

const images = [
  "https://via.placeholder.com/1500x600.png?text=Slide+1",
  "https://via.placeholder.com/1500x600.png?text=Slide+2",
  "https://via.placeholder.com/1500x600.png?text=Slide+3",
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const SliderComponent = () => {
  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
