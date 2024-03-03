import React from "react";

function Gallery() {
  return (
    <div className="container-fluid main-page-text my-5 text-light d-flex gap-5 flex-column justify-content-center align-items-center">
      <h1>НАШИ РАБОТЫ</h1>
      <div className="dods"></div>
      <img
        style={{ height: "800px" }}
        id="gallery"
        className="w-100 img-last"
        src="/img/123.png"
        alt="image"
      />
    </div>
  );
}

export default Gallery;
