import { NavLink, useLocation } from "react-router-dom";

import logo from "../../images/logo.png";
import search from "../../images/search.png";

const HOMEPATH = "/";
const GENRESPATH = "/genres";
const AUTHORSPATH = "/authors";
const MYBOOKSPATH = "/my-books";

const Header = () => {
  const location = useLocation();

  const { pathname } = location;

  return (
    <div className="header px-8 bg-white text-[16px] flex justify-between h-[64px] items-center select-none">
      <div className="header_left flex items-center h-full">
        <div className="w-[50px]">
          <NavLink to={HOMEPATH}>
            <img className="cursor-pointer" alt="" src={logo} />
          </NavLink>
        </div>
        <div className="ml-6 h-[100%]">
          <div className="flex gap-8 h-full">
            <div
              className={`border-b-2 border-transparent hover:border-[#e84565] hover:text-[#e84565] ${
                pathname === HOMEPATH && "!border-[#e84565] text-[#e84565]"
              } flex items-center cursor-pointer`}
            >
              <NavLink className={"h-full flex items-center"} to={"/"}>
                Главная
              </NavLink>
            </div>
            <div
              className={`border-b-2 border-transparent hover:border-[#e84565] hover:text-[#e84565] ${
                pathname === GENRESPATH && "!border-[#e84565] text-[#e84565]"
              } transition flex items-center cursor-pointer`}
            >
              <NavLink className={"h-full flex items-center"} to={"/genres"}>
                Жанры
              </NavLink>
            </div>
            <div
              className={`border-b-2 border-transparent hover:border-[#e84565] hover:text-[#e84565] ${
                pathname === AUTHORSPATH && "!border-[#e84565] text-[#e84565]"
              } transition flex items-center cursor-pointer`}
            >
              <NavLink className={"h-full flex items-center"} to={"/authors"}>
                Авторы
              </NavLink>
            </div>
            <div
              className={`border-b-2 border-transparent hover:border-[#e84565] hover:text-[#e84565] ${
                pathname === MYBOOKSPATH && "!border-[#e84565] text-[#e84565]"
              } transition flex items-center cursor-pointer`}
            >
              <NavLink className={"h-full flex items-center"} to={"/my-books"}>
                Мои книги
              </NavLink>
            </div>
            <div className="flex items-center">
              <div className="w-[20px] cursor-pointer">
                <NavLink to={"/search"}>
                  <img src={search} alt="" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header_right auth h-full">
        <div className="flex gap-8 h-full">
          <div className="h-full flex items-center cursor-pointer border-b-2 border-transparent hover:border-[#e84565] hover:text-[#e84565] transition">
            <NavLink to={'/login'}>
            <span>Логин</span>
            </NavLink>
          </div>
          <div className="h-full flex items-center cursor-pointer border-b-2 border-transparent hover:border-[#e84565] hover:text-[#e84565] transition">
            <NavLink to={'/register'}>
            <span>Регистрация</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
