import React from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ItemList from './ItemList';

const Featured = ({ ProductList }) => {
  SwiperCore.use([Autoplay]);

  return (
    <div className="relative container mx-auto top-4 p-6">
      <section id="hero">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
        >
          {ProductList.map((res) => (
            <SwiperSlide key={res._id}>
              <ItemList res={res} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Featured;
