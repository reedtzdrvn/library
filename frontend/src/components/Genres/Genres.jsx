import Subtitle from "../Common/Subtitle/Subtitle";
import Genre from "./Genre";

import image1 from "../../images/genre-image1.jpg";
import image2 from "../../images/genre-image2.jpeg";

const allGenres = ["Приключения", "Детективы", "Приключения", "Детективы", "Приключения", "Детективы"];

const Genres = () => {
  return (
    <div className="px-[12.5%] max-lg:px-0 mb-[5.5%]">
      <Subtitle title={"Все жанры"} />

      <div className="2xl:grid 2xl:grid-cols-2 flex flex-col gap-12 mt-[24px]">
        {allGenres.map((el, index) => (
          <Genre image={index % 2 != 0 ? image1 : image2} name={el} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Genres;
