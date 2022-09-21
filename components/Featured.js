import Image from 'next/image';
import React from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Featured = () => {
  SwiperCore.use([Autoplay]);
  return (
    <section id="hero">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 100000 }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide> {Slide()}</SwiperSlide>
        <SwiperSlide> {Slide()}</SwiperSlide>
        <SwiperSlide> {Slide()}</SwiperSlide>
        <SwiperSlide> {Slide()}</SwiperSlide>
        <SwiperSlide> {Slide()}</SwiperSlide>
        <SwiperSlide> {Slide()}</SwiperSlide>
        <SwiperSlide> {Slide()}</SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Featured;

const Slide = () => {
  return (
    <div className="container flex flex-col-reverse items-center px-0 mx-auto mt-5 space-y-0 md:space-y-0 md:flex-row">
      <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
        <h1 className="mx-w-md text-3xl font-bold text-center md:text-left md:text-4xl">
          Putting food into your body that it doesn't need is a waste of food!
        </h1>
        <p className="mx-w-sm text-center text-brightRed md:text-left text-xl font-bold italic">
          Offer 5% off To the people who have a ticket to a local hocky game, or
          $5 of any purchase before a concert that's down the street.
        </p>
        <div className="flex justify-center md:justify-start">
          <a
            href="#"
            className="bg-brightRed hover:bg-brightRedLight p-3  px-6 pt-1 self-baseline rounded-full text-white "
          >
            Add new Food
          </a>
        </div>
      </div>
      <div className="md:w-1/2">
        <Image src={'/img/sandwich.jpg'} width={400} height={500}></Image>
      </div>
    </div>
  );
};
