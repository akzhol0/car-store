import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBarComp() {
  return (
    <Navbar expand="sm">
      <div className="container">
        <Nav className="me-auto">
          <Nav.Link className="main-page-text text-light"><Link to='/'>Главная</Link></Nav.Link>
          <Nav.Link className="main-page-text text-light">
            <Link to="/okleika">Оклейка автомобилей</Link>
          </Nav.Link>
          <Nav.Link href='#detailing' className="main-page-text text-light">
            Детейлинг автомобилей
          </Nav.Link>
          <Nav.Link href='#gallery' className="main-page-text text-light">
            Галерея работ
          </Nav.Link>
        </Nav>
        <div className="img-brgr"></div>
      </div>
    </Navbar>
  );
}

export default NavBarComp;
