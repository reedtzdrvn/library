import { useState } from "react";
import arrow from "../../images/go-arrow.png";

import styles from './BookCard.module.css';

const BookCard = ({ title, author, description, image, categories }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative mt-[24px] w-full bg-white rounded-md flex cursor-pointer border-2 hover:border-[#e84565] border-transparent transition">
      <div className="basis-6/11">
        <img className="max-w-[300px] w-[300px] h-[400px] rounded-md" src={image} />
      </div>
      <div className="basis-4/11 mt-12 pl-6 flex flex-col justify-between pr-12">
        <div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span
                className="font-[400] text-[28px] leading-9"
                style={{ fontFamily: "Old Standard TT" }}
              >
                {title}
              </span>
              <span className="text-[16px] text-gray-500 font-[Roboto] hover:underline">
                {author}
              </span>
            </div>
            <div>
              <ul className="flex gap-2 flex-wrap select-none">
                {categories.map((el, index) => (
                  <li
                    className="px-[16px] bg-white py-[8px] text-[14px] rounded-full font-[Roboto] border-2"
                    key={index}
                  >
                    {el.toUpperCase()}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={`mt-10 text-gray-500 font-[Roboto] ${isExpanded ? '' : styles.lineclamp3}`}>
            {description}
          </div>
          {description.length > 400 && (
            <button
              onClick={toggleDescription}
              className="text-blue-500 mt-2 self-start"
            >
              {isExpanded ? "Скрыть" : "Показать больше"}
            </button>
          )}
        </div>
      </div>
      <div className="absolute top-3 right-3">
        <img className="w-[30px] h-[30px]" src={arrow} alt="go" />
      </div>
    </div>
  );
};

export default BookCard;
