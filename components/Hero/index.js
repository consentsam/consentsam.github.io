import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from 'swiper';
import Slide from './Slide';

import "swiper/css";
import "swiper/css/effect-fade";

const hero_data = {
  slides: [
    {
      title: "Folley",
      image:
        "https://res.cloudinary.com/j-rigg-construction/image/upload/v1656585586/Projects/Folly/2020_03_12_99999_126b_gq0nkh_p1qntk.jpg",
    },
    {
      title: "Chastleton",
      image:
        "https://res.cloudinary.com/j-rigg-construction/image/upload/f_auto,c_limit,w_1920,q_100/v1656585270/Projects/Chastleton/MAY_17_015_ynhnt3_fg6unz.webp",
    },
    {
      title: "Todenham",
      image:
        "https://res.cloudinary.com/j-rigg-construction/image/upload/f_auto,c_limit,w_1920,q_100/v1656586264/Projects/Todenham/18.05.18_014_ttc2e0_lzshad.webp",
    },
  ],
};

const Hero = () => {
  return (
    <Swiper modules={[EffectFade]} effect="fade" loop className="swiper-container gallery-top">
      {hero_data?.slides && hero_data?.slides.map((slide, index) => (
        <SwiperSlide key={slide.title + "hero_key" + index}>
          <Slide slide={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Hero;