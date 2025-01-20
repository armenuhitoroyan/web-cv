import React from "react";
import Slider from "react-slick";
import styles from "../style/ContactPage.module.css";

const first: string = `https://afsu.tohidur.com/img/clients-img-1.png`;
const second: string = `https://afsu.tohidur.com/img/clients-img-2.png`;
const third: string = `https://afsu.tohidur.com/img/clients-img-3.png`;
const fourth: string = `https://afsu.tohidur.com/img/clients-img-4.png`;
const fifth: string = `https://afsu.tohidur.com/img/clients-img-5.png`;

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
  responsive: {
    breakpoint: number;
    settings: {
      slidesToShow: number;
    };
  }[];
}

const Carousel: React.FC = () => {
  const settings: SliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.carousel_container}>
      <Slider {...settings}>
        <div>
          <img src={first} alt="Slide 1" />
        </div>
        <div>
          <img src={second} alt="Slide 2" />
        </div>
        <div>
          <img src={third} alt="Slide 3" />
        </div>
        <div>
          <img src={fourth} alt="Slide 4" />
        </div>
        <div>
          <img src={fifth} alt="Slide 5" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
