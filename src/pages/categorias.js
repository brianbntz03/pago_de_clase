import React from 'react';
import { TodasLasCategorias } from '../Components/todas-las-categorias';

const categorias = () => {
    let todas_las_categorias = TodasLasCategorias();
    return (
      <div className="card">
        <div className="card-header border-0">
          <h3 className="card-title">Categorias</h3>
          <div className="card-tools">
          <a class="btn btn-sm btn-info float-right" href="/editar" >editar</a>
          <a class="btn btn-sm btn-info float-right" href="/borrar" >borrar</a>
          <a href="#" className="btn btn-tool btn-sm">
            <i className="fas fa-download" />
          </a>
          <a href="#" className="btn btn-tool btn-sm">
            <i className="fas fa-bars" />
          </a>
        </div>
      </div>
      <div className="card-body table-responsive p-0">
        {todas_las_categorias }
      </div>
    </div>
    )
}

export default categorias