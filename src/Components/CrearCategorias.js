import React from "react"

export const CrearCategorias = () => {

    return (
        <>
          <form  style={{ marginBottom: "10px" }}>
            <label>
              Nombre :
              <input
                type="text"
                name="nombre"
                style={{ marginLeft: "10px", marginRight: "30px" }}
              />
            </label>
            <label>
                Descripcion :
              <input
                type="text"
                name="descripcion"
                style={{ marginLeft: "10px", marginRight: "30px" }}
              />
            </label>

            <button type="submit" class="btn btn-sm btn-info "  >
              crear categoria
            </button>
          </form>
        </>
)}
