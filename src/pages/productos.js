import { ListadoProducto } from "../Components/listado_producto"

const Productos = () => {
  let productos =  ListadoProducto();
  return (
        <div className="card">
          <div className="card-header border-0">
            <h3 className="card-title">Presupuesto</h3>
            <div className="card-tools">
              <a href="#" className="btn btn-tool btn-sm">
                <i className="fas fa-download" />
              </a>
              <a href="#" className="btn btn-tool btn-sm">
                <i className="fas fa-bars" />
              </a>
            </div>
          </div>
          <div className="card-body table-responsive p-0">
            {productos}
          </div>
        </div>
    )
}

export default Productos