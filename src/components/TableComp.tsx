import React from 'react';

function TableComp() {
  return (
    <div className="container-fluid">
        <div className="row">
          <div className="col-6 col-sm-4 border p-md-5 p-1 text-center border-dark main-page-text">
            <p className="text-light fw-semibold">АДРЕС:</p>
            <p className="text-danger fw-semibold">
              LOREM HUIE KARETTA LARE SIENNA
            </p>
          </div>
          <div className="col-6 col-sm-4 border p-md-5 p-2 text-center border-dark main-page-text">
            <p className="text-light fw-semibold main-page-text">ТЕЛЕФОН:</p>
            <p className="text-danger fw-semibold">
              8 (812) 123-45-67 <br /> 8-911-123-45-67
            </p>
          </div>
          <div className="col-12 col-sm-4 border p-md-5 p-2 text-center border-dark main-page-text">
            <p className="text-light fw-semibold main-page-text">
              РЕЖИМ РАБОТЫ:
            </p>
            <p className="text-danger fw-semibold">
              ПН-ПТ : 10:00 - 20:00 <br /> СБ-ВСК : 12:00 - 20:00
            </p>
          </div>
        </div>
      </div>
  )
}

export default TableComp