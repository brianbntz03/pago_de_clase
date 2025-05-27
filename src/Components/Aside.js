import React from "react";
import { NavLink } from "react-router-dom";

export default function Aside() {
  return (
    <div> 
      <NavLink to="" activeClassName=""></NavLink>
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <NavLink to="index3.html" className="brand-link">
      <img
          src="dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">Tienda</span>
      </NavLink >
      {/* Sidebar */}
      <div className="sidebar">

        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
            <li className="nav-item">
              <NavLink to="/categorias" className="nav-link">
                <i className="nav-icon far fa-image" />
                <p>
                    Categorias
                  <i className="fas fa-angle-left right"/>
                </p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/productos" className="nav-link">
                <i className="nav-icon far fa-image" />
                <p>
                    Productos
                  <i className="fas fa-angle-left right"/>
                </p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/articulos" className="nav-link">
                <i className="nav-icon far fa-image" />
                <p>
                    articulos
                  <i className="fas fa-angle-left right"/>
                </p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/buscar-articulos-presupuesto" className="nav-link">
                <i className="nav-icon far fa-image" />
                <p>
                    buscar articulos de Presupuesto
                  <i className="fas fa-angle-left right"/>
                </p>
              </NavLink>
            </li>
            <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-edit"></i>
              <p>
                Presupuestos
                <i className="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="/crear" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Crear Presupuesto</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/lista" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Lista Presupuesto</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/historial" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Historial Presupuestal</p>
                </a>
              </li>
            </ul>
          </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
    </div>


  );
}
