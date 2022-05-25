import React,{useRef,useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Swal from 'sweetalert2';
import {withRouter} from 'react-router-dom';

const EditarProducto = (props) => { 

  const[categoria,setCategoria]= useState("");
  const [error, setError] = useState(false);

//generar los ref
const nombreProductoRef = useRef("");
const precioProductoRef = useRef("");

  const handleSubmit = async (e)=>{
    e.preventDefault();
    //validar
    const  _categoria = categoria === "" ? props.producto.categoria : categoria;
 
    console.log(_categoria);
    console.log(nombreProductoRef);
    console.log(nombreProductoRef.current.value);
    console.log(precioProductoRef.current.value);

    if(
      nombreProductoRef.current.value.trim() === "" ||
     precioProductoRef.current.value.trim() === "" || _categoria === ""){
      //mostrar un mensaje de alerta
      setError(true);
      return;
    }
    setError(false);

    //enviar producto a modificar nuevo  a mi api
    //creo un objeto
    const productoModificado = {
      nombreProducto:nombreProductoRef.current.value,
      precioProducto:precioProductoRef.current.value,
      categoria:_categoria

    }
    try{
      const consulta = await fetch(`http://localhost:4000/cafeteria/${props.producto.id}`,
      {
        method: "PUT",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(productoModificado)
      } 
      
      ); 
      console.log(consulta);
      if(consulta.status ===200){
        //cartel todo bien



        //actualizar la api
        props.setRecargarProductos(true);
        Swal.fire(
          'Producto modificado!',
          'El producto se modifico correctamente',
          'success'
        )
        props.history.push("/productos")
      }

    }catch(msjError){
      console.log(msjError);

    }
  };

  const seleccionarCategoria = (e)=>{
    setCategoria(e.target.value);
  }

    return (
        <section className="container  text-center my-4" >
        <Form   onSubmit={handleSubmit}>
        <h1 className="text-center my-4">Editar producto</h1>
        { error ? (
           <Alert variant={'danger'}>Todos los campos son obligatorios
           </Alert>): null
        }
        <Form.Group className="label" controlId="productoId">
          <Form.Label>Nombre del Producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="ej:lagrima"  ref={nombreProductoRef} defaultValue={props.producto.nombreProducto}
          />
        </Form.Group>
        <Form.Group className="label" controlId="precioId">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="" ref={precioProductoRef} defaultValue={props.producto.precioProducto} 
          />
        </Form.Group>
        <h3 className="text-center">Categoria</h3>
        <div className="text-center my-4 label">
          <Form.Check
            type="radio"
            label="Bebida caliente"
            value="bebida-caliente"
            inline
            name="categoria" onChange={seleccionarCategoria} defaultChecked={props.producto.categoria === "bebida-caliente"}
          />
          <Form.Check
            type="radio"
            label="Dulce"
            value="dulce"
            inline
            name="categoria"  onChange={seleccionarCategoria} defaultChecked={props.producto.categoria === "dulce"}
          />
          <Form.Check
            type="radio"
            label="Bebida Fria"
            value="bebida-fria"
            inline
            name="categoria"  onChange={seleccionarCategoria} defaultChecked={props.producto.categoria === "bebida-fria"}
          />
        </div>
        <Form.Group controlId="formBasicCheckbox"></Form.Group>
        <Button variant="outline-dark btn-sm label" type="submit">
          Guardar Producto
        </Button>
      </Form>
        </section>
    );
};

export default withRouter(EditarProducto);