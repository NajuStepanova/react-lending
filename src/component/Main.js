import offer from "../img/OfferBig.svg";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

function Main() {
  return (
    <div className="vacancy">
      <Header />
      <div className="part1">
        <div className="box-help-part1">
          <div className="b-text1">
            <h3>Всегда ищем людей, с которыми достигнем цели!</h3>
            <p>
              Краткое описание преимуществ работы в компании и подхода к подбору
              сотрудников.
            </p>
            <NavLink className="a" to={"/workcond"}>
              <button> Смотреть</button>
            </NavLink>
          </div>
          <div className="boxV">
            <h1>Вакансии OneSelfJob</h1>
            <ul>
              <li>
                <NavLink className="vac-teg">IT</NavLink>
              </li>
              <li>
                <NavLink className="vac-teg">Маркетинг</NavLink>
              </li>
              <li>
                <NavLink className="vac-teg">Продажи</NavLink>
              </li>
              <li>
                <NavLink className="vac-teg">Дизайн</NavLink>
              </li>
              <li>
                <NavLink className="vac-teg">Тестирование</NavLink>
              </li>
              <li>
                <NavLink className="vac-teg">Финансы</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="part2">
        <img src={offer} alt="Offer" />
        <div className="b-text2">
          <p>
            Мы - молодая и динамичная команда, работающая над созданием
            уникальной социальной сети, которая изменит способ находить и
            предлагать услуги и товары. Наша цель - сделать жизнь проще и
            удобнее, обеспечивая возможность находить необходимые товары и
            услуги в одном месте.
          </p>
        </div>
      </div>
      <div className="part3">
        <p>Вакансии OneSelfJob</p>
        <div className="boxScroll">
          <div className="button-group">
            <NavLink className="a" to={"/vacan"}>
              <button> Все</button>
            </NavLink>
            <NavLink className="a" to={"/"}>
              <button> IT</button>
            </NavLink>
            <NavLink className="a" to={"/"}>
              <button> Маркетинг</button>
            </NavLink>
            <NavLink className="a" to={"/"}>
              <button> Продажи</button>
            </NavLink>
            <NavLink className="a" to={"/"}>
              <button> Дизайн</button>
            </NavLink>
            <NavLink className="a" to={"/"}>
              <button> Менеджеры продукта</button>
            </NavLink>
            <select className="drop-d">
              <option selected></option>
              <option>Значение 2</option>
              <option>Значение 3</option>
            </select>
          </div>
          <div className="tb1">
            <div className="tb1-m">
              <NavLink className="link-work" to="/workcond">
                <p1>
                  Специалист по продажам и сопровождению клиентов (в стартап)
                </p1>
                <p>Удаленно</p>
              </NavLink>
            </div>
          </div>
          <div className="tb2">
            <div className="tb2-m">
              <NavLink className="link-work" to="/workcond">
                <p1>
                  Специалист по продажам и сопровождению клиентов (в стартап)
                </p1>
                <p>Удаленно</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
