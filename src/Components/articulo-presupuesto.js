import React from "react";
import { useState, useEffect } from "react";

export const ArticuloPresupuesto = () => {

    const [articulo, setArticulo] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchArticulos = async () => {   
        try {
            const response = await fetch("http://localhost:3001/articulos");
            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status}`);
            }
            const data = await response.json();
            setArticulo(data);
            setLoading(false);
        } catch (error) {
            console.error("Error detallado:", error);
            setError(`No se pudo conectar con el servidor. Verifica que el servidor esté corriendo en el puerto 3001: ${error.message}`);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchArticulos();
    }
    , []);
    // Función para reintentar la conexión
    const handleRetry = () => {
        setLoading(true);
        setError(null);
        fetchArticulos();
    }
    if (loading) {
        return (
            <div className="loading-container">
                <p>Cargando articulos...</p>
            </div>
        );
    }
    if (error) {
        return (
            <div className="error-container">
                <h3>Error de conexión</h3>
                <p>{error}</p>
                <button onClick={handleRetry}>Reintentar</button>
            </div>
        );
    }
    if (!articulo || articulo.length === 0) {
        return (
            <div>
                <h3>No hay articulos disponibles</h3>
            </div>
        );
    }
    // Renderizar la tabla de articulos
   


    return (
        <div>
            <div style={{ display: "flex", justifyContent: "start", marginBottom: "20px" }}>
            <p>Nombre <input type="text" size="30"/> </p>
            <p> Fecha <input type="date"
                id="start"
                name="trip-start"
                /></p>
            </div>
            <div style={{ display: "flex", marginBottom: "10px" , justifyContent: "flex-start" }}>
            <p>buscar articulo <input type="text" size="30"/> </p>
            <button className="btn btn-primary">Buscar</button>
            </div>
            <table className="table table-striped table-valign-middle table-bordered">
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Descripcion</th>
                        <th>Categorias</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {articulo.map((articulo) => (
                        <tr key={articulo.id}>
                            <td>{articulo.codigo}</td>
                            <td>{articulo.descripcion}</td>
                            <td>{articulo.categoria}</td>
                            <td>{articulo.precio}</td>
                            <td><button className="btn btn-success" >+</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}