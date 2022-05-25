import React,{useEffect,useState} from 'react';
import './App.css';
import './bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Inicio from './components/principal/Inicio';
import ListarProductos from './components/productos/ListarProductos';
import AgregarProducto from './components/productos/AgregarProducto';
import EditarProducto from './components/productos/EditarProducto';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import PaginaError from './components/error404/PaginaError';



function App() {
  const [productos,setProductos] = useState([]);
  const [recargarProductos, setRecargarProductos]= useState(true);

  useEffect(()=>{
    //llamara a la api y buscar array de datos
    if(recargarProductos){
       consultarAPI ();
       setRecargarProductos(false);
    }
   
  },[recargarProductos]);//solo cdo el comp es montado nada mas,no vuelve a consultar API

  const consultarAPI = async() =>{
    try{
      //operacion GET no hace falta poner otro parametro
      const respuesta = await  fetch("http://localhost:4000/cafeteria")
      console.log(respuesta);
      const resultado = await respuesta.json();
      console.log(resultado);
      //guardar datos en state
      setProductos(resultado);


    }catch(error){
      console.log(error);
    }
  }
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route  exact path="/">
          <Inicio></Inicio>
        </Route>
        <Route  exact path="/productos">
          <ListarProductos productos={productos} setRecargarProductos={setRecargarProductos}></ListarProductos>
        </Route>
        <Route  exact path="/productos/nuevo">
          <AgregarProducto setRecargarProductos={setRecargarProductos}></AgregarProducto>
        </Route>
        <Route  exact path="/productos/editar/:id" render={(props)=>{
          //tomar id de la ruta
          const parametro = parseInt(props.match.params.id)
          console.log(parametro);

          //buscar el producto a editar en array producto
          const productoBuscado = productos.find((item)=> item.id === parametro)
          console.log(productoBuscado);

          //retorno o dibujo el componente editar producto
          return  <EditarProducto producto={productoBuscado} setRecargarProductos={setRecargarProductos}></EditarProducto>

        }}>
         
        </Route>
        <Router exact path="*">
          <PaginaError></PaginaError>

        </Router>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
