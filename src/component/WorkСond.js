import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import back from "../img/Outlined.svg";
import { NavLink } from "react-router-dom";

function WorkCond() {
  return (
    <div className="cooperation">
      <Header />
      <div className="content">
        <NavLink className="bt-back" to="/vacan">
          <img src={back} alt="Back" />
          Назад к вакансиям
        </NavLink>
        <div className="box-job-d">
          <div className="m-box-job-d">
            <div className="mm-box-job-d">
              {" "}
              <p1>
                Специалист по продажам и сопровождению клиентов (в стартап)
              </p1>
              <p>Удаленно</p>
            </div>
            <p2>
              Мы ищем Специалиста по продажам и обслуживанию клиентов, который
              поможет нам привлечь новых пользователей в качестве исполнителей
              (продавцов) и обеспечить им первоклассное обслуживание до запуска
              и после запуска проекта.
            </p2>
            <button>Заполнить анкету</button>
          </div>
        </div>
      </div>
      <div className="cont2">
        <div className="h-box">
          <h1>Чем будете заниматься</h1>
          <ul>
            <li>
              Привлечение новых пользователей (исполнителей) на сайт и в
              приложение стартапа.
            </li>
            <li>
              Помощь пользователям в процессе регистрации и настройки аккаунта.
            </li>
            <li>Консультирование клиентов по функциям приложения и сайта.</li>
            <li>Мониторинг и учет активности пользователей.</li>
            <li>
              Взаимодействие с клиентами через различные каналы коммуникации
              (электронная почта, чат, телефонные звонки, переписка в соц. сетях
              и др.).
            </li>
            <li>
              Работа с вопросами и замечаниями пользователей, поиск решений и
              предоставление качественного обслуживания.
            </li>
            <li>
              Составление отчетов о проделанной работе и рекомендации по
              улучшению обслуживания клиентов.
            </li>
          </ul>
        </div>
      </div>
      <div className="cont3"></div>
      <div className="cont4"></div>
      <Footer />
    </div>
  );
}
export default WorkCond;
