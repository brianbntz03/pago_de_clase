import React from "react";
import { Routes, Route } from "react-router-dom";
import categorias from "../pages/categorias";
import Productos from "../pages/productos";
import CrearPresupuesto from "../Presupuestos/CrearPresupuesto";
import HistorialPresupuesto from "../Presupuestos/HistorialPresupuesto";
import ListaPresupuesto from "../Presupuestos/ListaPresupuesto";
import CreacionCategorias from "../pages/creacionCategorias";

export default function Content(){
    return(
            <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1 className="m-0">Tienda</h1>
                  </div>
                  
                  {/* /.col */}
                </div>
                {/* /.row */}
              </div>
              {/* /.container-fluid */}
              </div>
              {/* /.content-header */}
              {/* Main content */}
              <div className="content">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-12">
                      
                        <Routes>
                          <Route path="/categorias" Component={categorias} ></Route>
                          <Route path="/productos" Component={Productos} ></Route>
                          <Route path="/crear" Component={CrearPresupuesto}></Route>  
                          <Route path="/historial" Component={HistorialPresupuesto}></Route>
                          <Route path="/lista" Component={ListaPresupuesto}></Route>
                          <Route path="/crearcategorias" Component={CreacionCategorias}></Route>
                        </Routes>
                    </div>
                  </div>
                  {/* /.row */}
                </div>
                {/* /.container-fluid */}
              </div>
              {/* /.content */}
            </div>
          );
        };