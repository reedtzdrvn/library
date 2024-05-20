import { Swiper, SwiperSlide } from "swiper/react";
import SmallSlide from "./SmallSlide";

import image1 from "../../images/small-image1.jpeg";
import image2 from "../../images/small-image2.jpeg";
import image3 from "../../images/small-image3.jpeg";
import { useState } from "react";

const HomeSmallSlider = () => {
    const [slidesCount, setSlidesCount] = useState(5)

  return (
    <div className="mt-8 select-none">
      <Swiper slidesPerView={slidesCount} spaceBetween={30} grabCursor={true}>
        <SwiperSlide>
          <SmallSlide
            image={image1}
            author={"Джордж Оруэлл"}
            title={"Title Title Super"}
            setSlidesCount={setSlidesCount}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SmallSlide
            image={image2}
            author={"Эрих Мария Ремарк"}
            title={"Title Title"}
            setSlidesCount={setSlidesCount}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SmallSlide
            image={image3}
            author={"Эрнест Хемингуэй"}
            title={"Title Title Super Dooper long title"}
            setSlidesCount={setSlidesCount}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SmallSlide
            image={image1}
            author={"Джордж Оруэлл"}
            title={"Title Title Super"}
            setSlidesCount={setSlidesCount}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SmallSlide
            image={image2}
            author={"Эрих Мария Ремарк"}
            title={"Title Title"}
            setSlidesCount={setSlidesCount}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SmallSlide
            image={image3}
            author={"Эрнест Хемингуэй"}
            title={"Title Title Super Dooper long title"}
            setSlidesCount={setSlidesCount}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SmallSlide
            image={image1}
            author={"Джордж Оруэлл"}
            title={"Title Title Super"}
            setSlidesCount={setSlidesCount}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SmallSlide
            image={image2}
            author={"Эрих Мария Ремарк"}
            title={"Title Title"}
            setSlidesCount={setSlidesCount}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SmallSlide
            image={image3}
            author={"Эрнест Хемингуэй"}
            title={"Title Title Super Dooperlong title"}
            setSlidesCount={setSlidesCount}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSmallSlider;
