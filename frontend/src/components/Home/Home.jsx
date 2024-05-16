import HomeBigSlider from "./HomeBigSlider";

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
];

const Home = () => {
  return (
    <div className="px-[12.5%] max-lg:px-0">
      <div className="mt-[32px] text-[36px] text-[#302119] font-[Roboto]">Все жанры</div>
      <div className="mt-[24px]">
        <ul className="flex gap-4 flex-wrap select-none">
          {allGenres.map((el, index) => (
            <li
              className="px-[16px] bg-white py-[8px] text-[14px] rounded-full font-[Roboto] cursor-pointer hover:border-[#e84565] transition hover:text-[#e84565] border-transparent border-2"
              key={index}
            >
              {el.toUpperCase()}
            </li>
          ))}
          <li className="px-[16px] bg-white py-[8px] text-[14px] rounded-full font-[Roboto] cursor-pointer hover:border-[#e84565] transition hover:text-[#e84565] border-transparent border-2">+</li>
        </ul>
      </div>

      <HomeBigSlider />
    </div>
  );
};

export default Home;
