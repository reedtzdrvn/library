import { useState } from "react";
import Subtitle from "../Common/Subtitle/Subtitle";
import HomeBigSlider from "./HomeBigSlider";
import HomeSmallSlider from "./HomeSmallSlider";

const allGenres = [
  "Фэнтези",
  "Научпоп",
  "Романтика",
  "Психология",
  "Детективы",
  "Фантастика",
  "Нон-Фикшн",
  "Классика",
  "История",
  "Здоровье",
  "Залупа",
  "Залупа",
  "Залупа",
  "Залупа",
  "Залупа",
  "Залупа",
  "Залупа",
  "Залупа",
];

const Home = () => {
  const [showAllGenres, setShowAllGenres] = useState(false);

  const genresToShow = showAllGenres ? allGenres : allGenres.slice(0, 10);

  return (
    <div className="px-[12.5%] max-lg:px-0 mb-[5.5%]">
      <Subtitle title={"Все жанры"} />
      <div className="mt-[24px]">
        <ul className="flex gap-4 flex-wrap select-none">
          {genresToShow.map((el, index) => (
            <li
              className="px-[16px] bg-white py-[8px] text-[14px] rounded-full font-[Roboto] cursor-pointer hover:border-[#e84565] transition hover:text-[#e84565] border-transparent border-2"
              key={index}
            >
              {el.toUpperCase()}
            </li>
          ))}
          <li
            className="px-[16px] bg-white py-[8px] text-[14px] rounded-full font-[Roboto] cursor-pointer hover:border-[#e84565] transition hover:text-[#e84565] border-transparent border-2"
            onClick={() => setShowAllGenres(!showAllGenres)}
          >
            {showAllGenres ? "-" : "+"}
          </li>
        </ul>
      </div>
      <HomeBigSlider />
      <Subtitle title={"Новинки"} />
      <HomeSmallSlider />
    </div>
  );
};

export default Home;
