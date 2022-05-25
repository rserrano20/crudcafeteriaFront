import React from "react";
import ListaProductoUp from "./ListaProductoUp";
import ListGroup from 'react-bootstrap/ListGroup'

const ListarProductos = (props) => {
  return (
    <div className="container text-center my-3">
      <h1 className="text-center">Lista de productos</h1>
    <ListGroup className=" label">
        {props.productos.map((producto) => (
          <ListaProductoUp
            key={producto.id}
            producto={producto} setRecargarProductos={props.setRecargarProductos}
            
          ></ListaProductoUp>
        ))} 
    </ListGroup>
    </div>
  );
};

export default ListarProductos;
