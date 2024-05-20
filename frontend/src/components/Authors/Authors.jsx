import Subtitle from "../Common/Subtitle/Subtitle";
import AuthorCard from "./AuthorCard";

import image1 from "../../images/author1.jpg";
import image2 from "../../images/author2.jpg";
import image3 from "../../images/author3.jpg";

const allAuthors = [
  "Джордж Оруэлл",
  "Эрих Мария Ремарк",
  "Эрнест Хемингуэй",
  "Джордж Оруэлл",
  "Эрих Мария Ремарк",
  "Эрнест Хемингуэй",
  "Джордж Оруэлл",
  "Эрих Мария Ремарк",
  "Эрнест Хемингуэй",
];

const images = [image1, image2, image3];

const Authors = () => {
  return (
    <div className="px-[12.5%] max-lg:px-0 mb-[5.5%]">
      <Subtitle title={"Все авторы"} />

      <div className="2xl:grid 2xl:grid-cols-4 flex flex-col gap-12 mt-[24px]">
        {allAuthors.map((el, index) => (
          <AuthorCard image={images[index % 3]} name={el} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Authors;
