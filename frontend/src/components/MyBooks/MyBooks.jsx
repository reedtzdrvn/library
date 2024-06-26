import Subtitle from "../Common/Subtitle/Subtitle";

import example from "../../images/example.jpeg";
import example2 from "../../images/example2.jpeg";
import BookCard from "./BookCard";

const myBooks = [
  {
    title: "Какие-то штуки",
    author: "Стас Зелень",
    image: example,
    description:
      "Это книга о вдохновляющих научных идеях. В ней улитка, лягушка и другие животные рассуждают про счастье, ошибки мозга и наше место во вселенной. Присутствуют жуки-сектанты и шутки про бывших. Это книга о вдохновляющих научных идеях. В ней улитка, лягушка и другие животные рассуждают про счастье, ошибки мозга и наше место во вселенной. Присутствуют жуки-сектанты и шутки про бывших. kfjdhsjkfhsdjkfjksdhfhsdhkjfsdhjkfk",
    categories: ["Науки о Земле", "Комиксы", "Наука"],
  },
  {
    title: "Fallout. Хроники создания легендарной саги",
    author: "Эрван Лафлериэль",
    image: example2,
    description:
      "От хаоса Пустошей к великой игре! Мир Fallout — это смесь ретро-футуризма и постапокалипсиса, где время и радиация неспешно пожирают следы человеческих мечтаний о счастливом будущем. Идеи, заложенные в игру, пришлись по вкусу миллионам геймеров. Fallout постоянно развивается и меняется, и выход каждой новой части становится громким событием в игровой индустрии. Эта книга приглашает вас заглянуть за кулисы культовой серии игр и поразмыслить о том, что делает Fallout уникальной. — Как появилась вселенная Fallout и почему она стала такой популярной? — Как разработчики добивались идеального сплетения геймплея, нарратива и других элементов игры, чтобы игроки не смогли оторваться? — Как сформировалось наследие Fallout и что ждет серию в будущем? «Я горжусь своей связью с такой культовой игрой, как Fallout — игрой, вместе с которой фанаты росли и открывали для себя другой мир». — Брайан Фарго, сооснователь Interplay Entertainment",
    categories: ["IT-технологии", "Видеоигры", "Игры"],
  },
];

const MyBooks = () => {
  return (
    <div className="px-[12.5%] max-lg:px-0 mb-[5.5%]">
      <Subtitle title={"Мои книги"} />

      {myBooks.map((el, index) => (
        <BookCard
          title={el.title}
          author={el.author}
          image={el.image}
          description={el.description}
          categories={el.categories}
        />
      ))}
    </div>
  );
};

export default MyBooks;
