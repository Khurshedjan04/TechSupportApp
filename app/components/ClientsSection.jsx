'use client';
import {
  OsonIcon,
  PaymeIcon,
  PaynetIcon,
  UpayIcon,
  UzumIcon,
} from "./icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const icons = [
  OsonIcon,
  PaymeIcon,
  UzumIcon,
  PaynetIcon,
  UpayIcon,
  OsonIcon,
  UzumIcon,
];

function ClientsSection() {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={12}
      slidesPerView={3}
      centeredSlides={true}
      loop={true}
      speed={4000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        960: {
          slidesPerView: 5.2,
          spaceBetween: 50,
        },
      }}
      className="touch-pan-y max-w-[1440px] mx-auto"
    >
      {icons.map((Icon, index) => (
        <SwiperSlide key={index} className="h-full ">
          <div key={index} className="scale-[60%] md:scale-100">
            <Icon />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default ClientsSection;
