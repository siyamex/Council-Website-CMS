import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="banner">
      <Slider {...settings}>
        <div>
          <h2>{t('welcome')}</h2>
          <p>{t('get_informed')}</p>
        </div>
        <div>
          <h2>{t('get_involved')}</h2>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;