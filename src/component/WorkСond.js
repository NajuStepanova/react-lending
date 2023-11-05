import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import back from "../img/Outlined.svg";
import frame1 from "../img/Frame1.svg";
import frame2 from "../img/Frame2.svg";
import frame3 from "../img/Frame3.svg";
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
          <img src={frame1} alt="Frame1" />
        </div>
      </div>
      <div className="cont3">
        <div className="h-box">
          <img src={frame2} alt="Frame2" />
        </div>
      </div>
      <div className="cont4">
        <div className="h-box">
          <img src={frame3} alt="Frame3" />
          <button>Заполнить анкету</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default WorkCond;
