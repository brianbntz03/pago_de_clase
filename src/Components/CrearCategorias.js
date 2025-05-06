import React from "react"

export const CrearCategorias = () => {

  return (
    <>
      <form style={{ marginBottom: "100px" }}>
        <label>
          Nombre :
          <input
            type="text"
            name="nombre"
            style={{
              marginLeft: "10px", marginRight: "10px"
              , backgroundColor: "white", color: "black"
              , borderRadius: "5px", padding: "5px"
              , border: "1px solid black"
              , width: "300px"
              , height: "30px"
              , fontSize: "20px"
            }}
          />
        </label><br />
        <label>
          Descripcion :
          <input
            type="text"
            name="descripcion"
            style={{
              marginLeft: "10px", marginRight: "10px"
              , backgroundColor: "white", color: "black"
              , borderRadius: "5px", padding: "5px"
              , border: "1px solid black"
              , width: "300px"
              , height: "30px"
              , fontSize: "20px"
            }}
          />
        </label>
        <br />
        <button
        
          type="submit" class="btn btn-sm btn-info " style={{
            marginLeft: "10px", marginRight: "10px"
            , borderRadius: "5px", padding: "5px"
            , border: "1px solid black"
            , width: "200px"
            , height: "40px"
            , fontSize: "20px"
          }}
        >
          crear categoria
        </button>
      </form>
    </>
  )
}
