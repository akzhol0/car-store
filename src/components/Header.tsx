import React from "react";
import NavBarComp from "./NavBarComp";
import TableComp from "./TableComp";

interface HeaderProps {
  title: string;
}

function Header({title}: HeaderProps) {
  return (
    <header className="container-fluid img-bg">
      <NavBarComp />
      <div
        style={{ height: "600px" }}
        className="container d-flex justify-content-center align-items-center main-page-text text-danger 
        d-flex flex-column gap-4">
        <h1 className="display-1">{title}</h1>
        <div className="dods"></div>
        <p className="text-light text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          <br /> autem Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nostrum, delectus.
        </p>
        <div className="btn btn-danger">НАШИ УСЛУГИ</div>
      </div>
      <TableComp/>
    </header>
  );
}

export default Header;
