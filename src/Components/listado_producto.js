import React from 'react';


export function ListadoProducto() {
    return (
        <form>
            <table className="table table-striped table-valign-middle table-bordered">
                <tr>
                    <th> nombre </th>
                    <th> categoria </th>
                    <th> stock </th>
                    <th> </th>
                </tr>
                <tr>
                    <td> {}</td>
                    <td> {} </td>
                    <td> {} </td>
                    <td> <a href="#"> editar </a> <a href='#'> eliminar </a> </td>
                </tr>
            </table>
        </form>
    )
}