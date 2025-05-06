import React from 'react';
import { useEffect, useState } from 'react';
import '../Components/categorias.css';

export function ListadoProducto() {
     const [productos, setProductos] = useState([])
     const [loading, setLoading] = useState(true)
     const [error, setError] = useState(null)
     const handleRetry = () => {
         setLoading(true);
         setError(null);
         fetchProductos();
     };

     const fetchProductos = async () => {
         try {
             const response = await fetch('http://localhost:3001/producto', {
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
     }, [])
     if (loading) {
         return (
             <div className="loading-container">
                 <p>Cargando productos...</p>
             </div>
         )
     }
     if (error) {
         return (
             <div className="error-container">
                 <h3>Error de conexión</h3>
                 <p>{error}</p>
                 <button onClick={handleRetry} className="retry-button">Reintentar</button>
             </div>
         )    
     }
     return (
         <div className="card">   
             <div className="card-header border-0">
                 <h3 className="card-title">Productos</h3>
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
                             <td> <a href="#"> editar </a> <a href='#'> eliminar </a> </td>
                         </tr>
                     ))}
                 </table>
             </div>
         </div>
     )
}