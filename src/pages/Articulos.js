import React from "react"


const Articulos = () => {
    return (
        <div className="card">
        <div className="card-header border-0">
          <h1 className="card-title">Articulos</h1>
          <div className="card-tools">      
            <a>Crear categoria</a>
          <a href="#" className="btn btn-tool btn-sm">
            <i className="fas fa-download" />
          </a>
          <a href="#" className="btn btn-tool btn-sm">
            <i className="fas fa-bars" />
          </a>
        </div>
      </div>
      <div className="card-body table-responsive p-0">
        {}
      </div>
    </div>
    )
}


export default Articulos