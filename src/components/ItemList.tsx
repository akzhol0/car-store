import React from "react";

interface ItemListProps {
    title: string,
    classNameProp: string
}

function ItemList({title, classNameProp}: ItemListProps) {
  return (
    <div>
      <div className="d-flex align-items-center gap-2 text-light main-page-text">
        <div className={classNameProp} style={{ width: "50px", height: "50px" }}></div>
        <p className="h4 ms-4">{title}</p>
      </div>
      <p className="text-light main-page-text mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum earum autem
        provident quia ipsam et ad asperiores dicta quo hic similique suscipit
        quisquam repellat itaque praesentium, reprehenderit architecto. Aliquam,
        quasi?
      </p>
    </div>
  );
}

export default ItemList;
