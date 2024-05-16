import { Swiper, SwiperSlide } from "swiper/react";
import BigSlide from "./BigSlide";

import "swiper/css";

import example from "../../images/example.jpeg";
import example2 from "../../images/example2.jpeg";

const HomeBigSlider = () => {
  return (
    <div className="mt-8">
      <Swiper slidesPerView={"auto"} spaceBetween={30} grabCursor={true}>
        <SwiperSlide className="!w-[600px]">
          <BigSlide
            imageSrc={example}
            title={"Какие-то штуки"}
            desc={
              "«Наука — чудо-дуршлаг, изменивший мир». Улитка из маршмеллоу — о тайнах Вселенной"
            }
          />
        </SwiperSlide>
        <SwiperSlide className="!w-[600px]">
          <BigSlide
            imageSrc={example2}
            title={"Fallout. Хроники создания легендарной саги"}
            desc={"История легендарной игры — к старту одноименного сериала"}
          />
        </SwiperSlide>
        <SwiperSlide className="!w-[600px]">
          <BigSlide
            imageSrc={example}
            title={"Какие-то штуки"}
            desc={"История легендарной игры — к старту одноименного сериала"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeBigSlider;
