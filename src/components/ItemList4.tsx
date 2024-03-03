import React from "react";

function ItemList4() {
  const excelTable = [
    {
      number: "#1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rerum porro accusantium dolorem eius",
    },
    {
      number: "#2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rerum porro accusantium dolorem eius",
    },
    {
      number: "#1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rerum porro accusantium dolorem eius",
    },
    {
      number: "#3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rerum porro accusantium dolorem eius",
    },
  ];

  return (
    <div className="container main-page-text d-flex justify-content-between gap-4">
      <div className="d-flex flex-column gap-5" style={{ width: "50%" }}>
        <h1 className="text-light">
          НАШИ ДОСТИЖЕНИЯ ОТ КУБКА РОССИИ ДО ЧЕМПИОНАТА МИРА
        </h1>
        <div className="dods"></div>
        <p className="text-dark">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel pariatur
          deserunt sunt dolorum molestias cupiditate repudiandae numquam
          suscipit fuga quasi quod minus ex at, animi explicabo laboriosam
          voluptatibus voluptatum quo. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ad architecto corporis cum perferendis placeat unde
          a officia! Aliquam, nesciunt voluptatum!
        </p>
      </div>
      <div style={{ width: "50%" }}>
        {excelTable.map((item) => (
          <div className="row text-center">
            <div className="col border p-3 border-dark">
              <h1 className="text-danger">{item.number}</h1>
              <p className="text-light">{item.text}</p>
            </div>
            <div className="d-none d-md-block col border p-3 border-dark">
              <h1 className="text-danger">{item.number}</h1>
              <p className="text-light">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList4;
