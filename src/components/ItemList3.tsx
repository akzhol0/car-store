import React from "react";
import ItemList from "./ItemList";

interface ItemList3Props {
    title1: string;
    title2: string;
    title3: string;
    imgName: string;
}

function ItemList3({title1, title2, title3, imgName}: ItemList3Props) {
  return (
    <div
      className="container my-5">
      <div className="row">
        <div className="col-12 col-xl-6 d-flex flex-column justify-content-center">
          <ItemList
            title={title1}
            classNameProp="item-list1"
          />
          <div className="d-flex justify-content-center my-4">
            <div className="dods"></div>
          </div>
          <ItemList title={title2} classNameProp="item-list2" />
          <div className="d-flex justify-content-center my-4">
            <div className="dods"></div>
          </div>
          <ItemList
            title={title3}
            classNameProp="item-list3"
          />
        </div>
        <div className="col-12 col-xl-6">
          <div           
            className="d-flex flex-column justify-content-center align-items-center gap-4">
            <div id="detailing" className={imgName} style={{height: '550px'}}></div>
            <p className="text-light main-page-text text-center">
              Lorem, ipsum dolor sit officiis! Quod quaerat veniam earum debitis
              ducimus!Nobis, officiis! <br />
              Quod quaerat veniam earum debitis ducimus!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemList3;
