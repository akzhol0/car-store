import React from "react";

function Footer() {
  return (
    <footer className="container-fluid main-page-text text-light">
      <div
        style={{ marginTop: "200px" }}
        className="container d-flex flex-column justify-content-center align-items-center gap-5"
      >
        <h1>ОТВЕТИМ НА ЛЮБОЙ ВОПРОС</h1>
        <div className="dods"></div>
        <div className="input-group d-flex justify-content-center align-items-center gap-5">
          <input
            style={{ height: "55px" }}
            placeholder="ИМЯ:"
            type="text"
            className="bg-black border border-dark ps-4 col text-light"
          />
          <input
            style={{ height: "55px" }}
            placeholder="ТЕЛЕФОН:"
            type="text"
            className="bg-black border border-dark ps-4 col text-light"
          />
        </div>
        <div className="container d-flex justify-content-between align-items-center">
          <input
            style={{ height: "150px" }}
            placeholder="ВОПРОСЫ ПО ТЮНИНГУ, ДИЗАЙНУ И ДР:"
            type="text"
            className="bg-black border border-dark ps-4 col-8 text-light"
          />
          <div className="d-flex flex-column gap-3">
            <div className="btn btn-lg btn-danger">
              <img src="/img/instagram.svg" alt="image" />
            </div>
            <div className="btn btn-lg btn-danger">
              <img src="/img/telegram.svg" alt="image" />
            </div>
            <div className="btn btn-lg btn-danger">
              <img src="/img/youtube.svg" alt="image" />
            </div>
          </div>
        </div>
        <div className="btn btn-danger btn-lg rounded-0">ОТПРАВИТЬ</div>
        <div className="container-fluid text-center">
          <p className="text-light main-page-text">
            2022 © Est et viverra pellentesque pharetra lorem proin in. Vitae
            magna at tempus commodo.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
