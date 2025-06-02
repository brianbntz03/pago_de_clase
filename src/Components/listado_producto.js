import React from 'react';
import { useEffect, useState } from 'react';
import '../Components/categorias.css';

export function ListadoProducto() {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleEliminar = async (id) => {
    try {
        
         await fetch(`http://localhost:3001/categoria/${id}`, {
             method: 'DELETE',
         });

        // Elimina del estado
        const nuevosProductos = productos.filter(producto => producto.id !== id);
        setProductos(nuevosProductos);
    } catch (error) {
        console.error("Error al eliminar el producto:", error);
    }
};



    const fetchProductos = async () => {
        try {
            const response = await fetch('http://localhost:3001/categoria', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setProductos(data);
            setLoading(false);
        } catch (error) {
            console.error("Error detallado:", error);
            setError(`No se pudo conectar con el servidor. Verifica que el servidor esté corriendo en el puerto 3001: ${error.message}`);
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchProductos();
    }
    , []);
    // Función para reintentar la conexión
    const handleRetry = () => {
        setLoading(true);
        setError(null);
        fetchProductos();
    }
    if (loading) {
        return (
            <div className="loading-container">
                <p>Cargando productos...</p>
            </div>
        );
    }
    if (error) {
        return (
            <div className="error-container">
                <h3>Error de conexión</h3>
                <p>{error}</p>
                <button onClick={handleRetry} className="retry-button">Reintentar</button>
            </div>
        );
    }
  if (!productos || productos.length === 0) {
        return (
            <div className="error-container">
                <h3>No hay productos disponibles</h3>
            </div>
        );
    }   
     return (
         <div className="card">   
             <div className="card-header border-0">
                 <h3 className="card-title">Productos</h3>
                 <div className="card-tools">
                     <button type="button" className="btn btn-tool btn-sm" onClick={() => console.log('Download clicked')}>
                         <i className="fas fa-download" />
                     </button>
                     <button type="button" className="btn btn-tool btn-sm" onClick={() => console.log('Bars clicked')}>
                         <i className="fas fa-bars" />
                     </button>
                 </div>
             </div>
             <div className="card-body table-responsive p-0"> 
                 <table className="table table-striped table-valign-middle table-bordered">
                     <tr>
                         <th> nombre </th>
                         <th> categoria </th>
                         <th> stock </th>
                         <th> </th>
                     </tr>
                     {productos.map((producto) => (
                         <tr key={producto.id}>
                             <td> {producto.nombre} </td>
                             <td> {producto.categoria} </td>
                             <td> {producto.stock} </td>
                             <td> 
                                 <button className="link-button" onClick={() => console.log('Editar clicked')}>editar</button> 
                                 <button className="link-button" onClick={() => handleEliminar(producto.id)}>eliminar</button>
                             </td>
                         </tr>
                     ))}
                 </table>
             </div>
         </div>
     )
}