import React, { useState, useEffect } from "react";

export const ArticuloPresupuesto = () => {
  const [articulo, setArticulo] = useState([]);
  const [articulosFiltrados, setArticulosFiltrados] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [busqueda, setBusqueda] = useState("");
  const [presupuesto, setPresupuesto] = useState(() => {
    const stored = localStorage.getItem("presupuesto");
    return stored ? JSON.parse(stored) : [];
  });

  const agregarAlPresupuesto = (nuevoArticulo) => {
    const yaAgregado = presupuesto.find(item => item.id === nuevoArticulo.id);
    let nuevoPresupuesto;

    if (yaAgregado) {
      nuevoPresupuesto = presupuesto.map(item =>
        item.id === nuevoArticulo.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
    } else {
      nuevoPresupuesto = [...presupuesto, { ...nuevoArticulo, cantidad: 1 }];
    }

    setPresupuesto(nuevoPresupuesto);
    localStorage.setItem("presupuesto", JSON.stringify(nuevoPresupuesto));
  };

  const restarCantidad = (id) => {
    const nuevoPresupuesto = presupuesto.map(item =>
      item.id === id && item.cantidad > 1
        ? { ...item, cantidad: item.cantidad - 1 }
        : item
    ).filter(item => item.cantidad > 0);
    setPresupuesto(nuevoPresupuesto);
    localStorage.setItem("presupuesto", JSON.stringify(nuevoPresupuesto));
  };

  const eliminarProducto = (id) => {
    const actualizado = presupuesto.filter(item => item.id !== id);
    setPresupuesto(actualizado);
    localStorage.setItem("presupuesto", JSON.stringify(actualizado));
  };

  const limpiarPresupuesto = () => {
    setPresupuesto([]);
    localStorage.removeItem("presupuesto");
  };

  const calcularTotal = () => {
    return presupuesto.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  };

  const fetchArticulos = async () => {
    try {
      const response = await fetch("http://localhost:3001/articulos");
      if (!response.ok) throw new Error(`Error en la solicitud: ${response.status}`);
      const data = await response.json();
      setArticulo(data);
      setArticulosFiltrados(data);
      setLoading(false);
    } catch (error) {
      console.error("Error detallado:", error);
      setError(`No se pudo conectar con el servidor. Verifica que el servidor esté corriendo en el puerto 3001: ${error.message}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticulos();
  }, []);

  const handleRetry = () => {
    setLoading(true);
    setError(null);
    fetchArticulos();
  };

  const handleSearch = () => {
    const resultado = articulo.filter((item) =>
      item.descripcion.toLowerCase().includes(busqueda.toLowerCase()) ||
      item.categoria?.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
    setArticulosFiltrados(resultado);
  };

  if (loading) return <div><p>Cargando artículos...</p></div>;

  if (error) {
    return (
      <div>
        <h3>Error de conexión</h3>
        <p>{error}</p>
        <button onClick={handleRetry}>Reintentar</button>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: "flex", marginBottom: "10px", justifyContent: "flex-start" }}>
        <p>Buscar artículo
          <input
            type="text"
            size="30"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            style={{ marginLeft: "5px" }}
          />
        </p>
        <button className="btn btn-sm btn-info float-right" onClick={handleSearch} style={{ marginLeft: "10px" }}>Buscar</button>
      </div>

      <h3>Lista de artículos</h3>
      <table className="table table-striped table-valign-middle table-bordered">
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {articulosFiltrados.map((articulo) => (
            <tr key={articulo.id}>
              <td>{articulo.codigo}</td>
              <td>{articulo.descripcion}</td>
              <td>{articulo.categoria?.nombre}</td>
              <td>{articulo.precio ? `$${articulo.precio}` : "No definido"}</td>
              <td><button className="btn btn-success" onClick={() => agregarAlPresupuesto(articulo)}>+</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Presupuesto</h3>
      {presupuesto.length === 0 ? (
        <p>No hay artículos en el presupuesto.</p>
      ) : (
        <>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Código</th>
                <th>Descripción</th>
                <th>Categoría</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {presupuesto.map((item) => (
                <tr key={item.id}>
                  <td>{item.codigo}</td>
                  <td>{item.descripcion}</td>
                  <td>{item.categoria?.nombre}</td>
                  <td>${item.precio}</td>
                  <td>
                    <button className="btn btn-secondary btn-sm me-1" onClick={()=> restarCantidad(item.id)}>-</button>
                       {item.cantidad} 
                  </td>
                  <td>
 
            {typeof item.precio === "number"
    ? `$${(item.precio * item.cantidad).toFixed(2)}`
    : "Precio inválido"}
</td>

                  <td>
                    <button className="btn btn-sm btn-info float-right" onClick={() => eliminarProducto(item.id)}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="5" style={{ textAlign: "right" }}><strong>Total:</strong></td>
                <td colSpan="2"><strong>${calcularTotal()}</strong></td>
              </tr>
            </tfoot>
          </table>

        </>
      )}
    </div>
  );
};
