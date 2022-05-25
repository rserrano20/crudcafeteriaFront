import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Swal from 'sweetalert2';
import {withRouter} from 'react-router-dom';

const AgregarProducto = (props) => {
  const [nombreProducto, setNombreProducto] = useState("");
  const [precioProducto, setPrecioProducto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState(false);

  const seleccionarCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //validar
    if (
      nombreProducto.trim() === "" ||
      precioProducto.trim() === "" ||
      categoria === ""
    ) {
      //mostrar un cartel de eroor
      setError(true);
      return;
    }
    setError(false);
    //agregar el nuevo producto a mi Api
    //crear el objeto a enviar
    const datos={
    nombreProducto,
    precioProducto,
    categoria
    };

    try{
      //aqui me conecto con m api
      const cabecera={
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
      }

      const resultado =await fetch("http://localhost:4000/cafeteria", cabecera)
      console.log(resultado);
      if(resultado.status === 201){
        //se agrego  producto
        props.setRecargarProductos(true)
        Swal.fire(
          'Producto Agregado!',
          'El producto se creo correctamente',
          'success'
        )
        props.history.push('/productos');
      }
    }catch(error){
      console.log(error);
    }


  };



  return (
    <section className="container  text-center my-4">
      <Form onSubmit={handleSubmit}>
        <h1 className="text-center ">Agregar nuevo producto</h1>
        { error ? (
           <Alert variant={'danger'}>Todos los campos son obligatorios
           </Alert>): null
        }
       
        <Form.Group className="label" controlId="productoId">
          <Form.Label>Nombre del Producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="ej: medialunas"
            onChange={(e) => setNombreProducto(e.target.value)}
          />
        </Form.Group>
        <Form.Group  className="label" controlId="precioId">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="ej:$200"
            onChange={(e) => setPrecioProducto(e.target.value)}
          />
        </Form.Group>
        <h3 className="text-center">Categoria</h3>
        <div className="text-center my-4 label">
          <Form.Check 
            type="radio"
            label="Bebida caliente"
            value="bebida-caliente"
            inline
            name="categoria"
            onChange={seleccionarCategoria}
          />
          <Form.Check
            type="radio"
            label="Dulce"
            value="dulce"
            inline
            name="categoria"
            onChange={seleccionarCategoria}
          />
          <Form.Check
            type="radio"
            label="Bebida Fria"
            value="bebida-fria"
            inline
            name="categoria"
            onChange={seleccionarCategoria}
          />
        </div>
        <Form.Group controlId="formBasicCheckbox"></Form.Group>
        <Button variant="outline-dark btn-sm label" type="submit">
          Agregar
        </Button>
      </Form>
    </section>
  );
};

export default withRouter(AgregarProducto);
