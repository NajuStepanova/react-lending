import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.svg";

function Header() {
  return (
    <div className="wrapper">
      <header>
        <img src={logo} alt="Logo" />
        <h3>OneSelf</h3>
        <p>Создай личный бренд</p>
        <ul>
          <li>
            <NavLink className="tags" to={"/"}>
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink className="tags" to={"/about"}>
              О нас
            </NavLink>
          </li>
          <li>
            <NavLink className="tags" to={"/vacan"}>
              Вакансии
            </NavLink>
          </li>
        </ul>
      </header>
      <div className="search-block">
        <input placeholder="Поиск" />
      </div>
    </div>
  );
}
export default Header;
