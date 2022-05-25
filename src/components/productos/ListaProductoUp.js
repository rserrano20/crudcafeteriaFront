import React from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import {Link} from 'react-router-dom';

const ListaProductoUp = (props) => {
  const eliminarProducto = (id) => {
    console.log(id);

    Swal.fire({
      title: "¿Estas seguro de eliminar producto?",
      text: "no hay vuelta atras, si eliminas!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "si,eliminar!",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.value) {
        // aqui es cuando acepte eliminar
        try {
          const respuesta = await fetch(
            `http://localhost:4000/cafeteria/${id}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json"
              }
            }
          );

          if ((respuesta.status === 200)) {
            props.setRecargarProductos(true);
            Swal.fire("Eliminado!", "Tu Productofue eliminado.", "success");
          }
        } catch (error) {
          console.log(error);
          //alert para usuario final
        }
      }
    });
  };
  return (
    
    <ListGroup.Item className=" d-flex justify-content-between">
      {props.producto.id}-{props.producto.nombreProducto}
      <span className="font-wegt-bold">${props.producto.precioProducto}</span>
      <div className="">
         <Button variant="outline-dark btn-sm"><Link to= {`/productos/editar/${props.producto.id}`} ><FontAwesomeIcon icon={faEdit} /> </Link>
        </Button>/
        <Button
          variant="outline-warning btn-sm"
          onClick={() => eliminarProducto(props.producto.id)}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
      </div>
    </ListGroup.Item>
   
  );
};

export default ListaProductoUp;
