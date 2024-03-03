import React from "react";

interface ItemList2Props {
  title: string;
  imgName: string;
}

function ItemList2({ imgName, title }: ItemList2Props) {
  return (
    <div className="col main-page-text gap-3 text-light border border-dark p-5 d-flex flex-column justify-content-center align-items-center">
      <div style={{ height: "50px", width: "50px" }} className={imgName}></div>
      <h4 className="text-center">{title}</h4>
      <p className="text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint nemo
        fugit provident voluptatum
      </p>
      <div className="btn rounded-0 btn-danger">ПОДРОБНЕЕ</div>
    </div>
  );
}

export default ItemList2;
