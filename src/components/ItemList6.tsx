import React from "react";
import ItemList2 from "./ItemList2";

function ItemList6() {
  return (
    <div className="container my-5">
      <div className="row d-flex gap-4">
        <ItemList2 title="ЗАЩИТНЫЕ СТЕКЛА" imgName="img-item1" />
        <ItemList2 title="ЦВЕТНЫЕ ПЛЕНКИ" imgName="img-item1" />
        <ItemList2 title="ДИЗАЙН" imgName="img-item2" />
        <ItemList2 title="ОКЛЕЙКА САЛОНА" imgName="img-item3" />
      </div>
    </div>
  );
}

export default ItemList6;
