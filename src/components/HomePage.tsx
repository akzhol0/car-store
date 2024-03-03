import React from "react";
import "../global.css";
import Header from "./Header";
import ItemList2 from "./ItemList2";
import ItemList3 from "./ItemList3";
import ItemList4 from "./ItemList4";
import ItemList5 from "./ItemList5";
import Gallery from "./Gallery";
import { Card, Placeholder } from "react-bootstrap";
import Footer from "./Footer";
import ItemList6 from "./ItemList6";

function HomePage() {
  return (
    <div>
      <Header title="CAR MUSIC" />
      <main>
        <ItemList4 />
        <ItemList3
          imgName="img-car1"
          title1="МАТЕРИАЛЫ ОТ ЛУЧШИЙ КОМПАНИЙ"
          title2="ОПЫТНЫЕ МАСТЕРА"
          title3="ГАРАНТИЯ НА ВСЕ ВИДЫ РАБОТЫ"
        />
        <ItemList5 />
        <ItemList6/>
        <ItemList3
          imgName="img-car2"
          title1="100% ПОЛИРОЛЬ АХЕМ"
          title2="ВЫОЛНЯЕМ РАБОТУ ЧЕТКО ПО ТЗ"
          title3="У НАС ЛУЧШИЕ МАСТЕРА"
        />
        <Gallery />
        <Footer/>
      </main>
    </div>
  );
}

export default HomePage;
