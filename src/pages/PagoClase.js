import React from "react";
import ClasePago from "../Components/clasepago";

const PagoClase = () => {
      let clasepago = ClasePago();
      return (
        <div className="card">
          <div className="card-header border-0">
            <h3 className="card-title">Pago Clase</h3>
            <div className="card-tools">
            <a class="btn btn-sm btn-info float-right" href="/pago-clase" >pago clase</a>
              <a href="#" className="btn btn-tool btn-sm">
                <i className="fas fa-download" />
              </a>
              <a href="#" className="btn btn-tool btn-sm">
                <i className="fas fa-bars" />
              </a>
            </div>
          </div>
          <div className="card-body table-responsive p-0">
            {clasepago}
          </div>
        </div>
      );
    };

export default PagoClase;