import React, { useState } from "react";

export default function ClasePago(){

   return(
        <>
        <form onSubmit={handleSubmit} style={{marginBottom: "10px"}}>
            <label>
                Alumn@:
                <input
                type="text"
                placeholder="Nombre del alumno"
                onChange={handleSubmit}
                required
                style={{ marginLeft: "10px", marginRight:"30px"}}
                />
            </label>
            <label>
                Modalidad:
                <input
                type="number"
                onChange={handleSubmit}
                required
                style={{ marginLeft: "10px", marginRight:"30px"}}
                />
            </label>
            <label>
                Paga él:
                <input
                type="checkbox"
                onChange={handleSubmit}
                required
                style={{ marginLeft: "10px", marginRight:"30px"}}
                />
            </label>
            <label>
                Monto:
                <input
                type="text"
                placeholder="0$"
                onChange={handleSubmit}
                required
                style={{ marginLeft: "10px", marginRight:"30px"}}
                />
            </label>
            <label>
                Fecha:
                <input
                type="date"
                onChange={handleSubmit}
                required
                style={{ marginLeft: "10px", marginRight:"30px"}}
                />
            </label>
            <button className={'btn btn-sm btn-info'}  >
              guardar
            </button>
            <button className={'btn btn-sm btn-info'}  >
              cancelar
            </button>
        </form>
        </>
)}