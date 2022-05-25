import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="/"> Serrano's Coffe </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink exact={true} to="/" className="nav-link" activeClassName="active" >Inicio</NavLink>
            <NavLink exact={true} to="/productos"  className="nav-link" activeClassName="active">Productos</NavLink>
            <NavLink exact={true} to="/productos/nuevo"  className="nav-link" activeClassName="active">Agregar Producto</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div> 
  );
};

export default Header;
