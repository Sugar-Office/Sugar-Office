/* eslint-disable @next/next/no-img-element */
// src/components/Carousel.tsx

import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../../styles/carousel.module.css'; 


const images = [
  'https://sekerofisi.com/uploads/p/o/UJcZfLu1mDz4.jpg',
  'https://sekerofisi.com/uploads/p/o/5IW9tx067AYF.jpg',
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow className={undefined} style={undefined} onClick={undefined} />,
    prevArrow: <PrevArrow className={undefined} style={undefined} onClick={undefined} />,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="carousel-slide relative">
          <img src={image} alt={`Slide ${index + 1}`} />
          <ShopNowButton link={`/shop/${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

const ShopNowButton = ({ link }) => {
  const handleShopNowClick = () => {
    // Shop Now butonuna tıklandığında yapılacak işlemler
    window.location.href = link;
  };

  return (
    <button className={styles.shopNowButton}  onClick={handleShopNowClick}>
      Shop Now
    </button>
  );
};

const NextArrow = (props: { className: any; style: any; onClick: any; }) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: 'block', marginRight: "40px" }} onClick={onClick}>
      Next
    </div>
  );
};

const PrevArrow = (props: { className: any; style: any; onClick: any; }) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: 'block', marginLeft: "40px", background: "red" }} onClick={onClick}>
      Prev
    </div>
  );
};

export default Carousel;
