import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Vacan() {
  return (
    <div className="cooperation">
      <Header />
      <div className="content">
        <p>Страница Вакансии</p>
        <button>
          <a href="https://github.com" target={"_blank"} rel="noreferrer">
            View At Github
          </a>
        </button>
      </div>
      <Footer />
    </div>
  );
}
export default Vacan;
