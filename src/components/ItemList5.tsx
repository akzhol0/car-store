import React from "react";

function ItemList5() {
  return (
    <div
      className="container main-page-text text-light d-flex flex-column justify-content-center align-items-center 
        my-5 gap-5"
    >
      <h1>НАШИ УСЛУГИ</h1>
      <div className="dods"></div>
      <div className="d-flex gap-5">
        <div className="btn text-light btn-main-page btn-lg rounded-0">
          ОКЛЕЙКА
        </div>
        <div className="btn text-light btn-main-page btn-lg rounded-0">
          ДЕТЕЙЛИНГ
        </div>
      </div>
    </div>
  );
}

export default ItemList5;
