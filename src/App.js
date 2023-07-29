import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Componentes
import Cabecera from "./componentes/cabecera/cabecera";
import Emergente from "./componentes/emergente/emergente";
import Alerta from "./componentes/alerta/alerta";

//Contenedores
import Inicio from './contenedores/inicio/inicio';
import Carrito from './contenedores/carrito/carrito';
import Checkout from "./contenedores/checkout/checkout";
import Completado from "./contenedores/completado/completado";


//Funciones
import { incrementarProductoUtils, eliminarProductoUtils, addProductoUtils, reducirProductoUtils } from "./utils/funcionesCarrito";
import { buscarProductoUtils } from "./utils/funcionesBuscador";



function App() {
  //Fuente de datos
  //Ojo, los precios no estaban incluidos en el .json así que incluí  un precio aleatorio a los elementos
  const datos = require('./datos.json');

  const [carrito, setCarrito] = useState([]);
  const [alerta, setAlerta] = useState({ mensaje: '', tipo: '' });
  const [info, setInfo] = useState(null); //Para la ventana modal
  const [busqueda, setBusqueda] = useState(''); //Para la barra de búsqueda


  return (
    <div>

      <Router>
        <Cabecera
          buscarPorducto={(nombre) => buscarProductoUtils(nombre, setBusqueda, datos)}
          carrito={carrito} />
        <Alerta mensaje={alerta.mensaje} tipo={alerta.tipo} />
        <Emergente info={info} hideInfo={() => setInfo(null)} addProducto={(producto) => addProductoUtils(setCarrito, setAlerta, incrementarProductoUtils, carrito, producto)} />
        <Switch>
          <Route path="/carrito" exact>

            <Carrito
              carrito={carrito}
              reducirProducto={(producto) => reducirProductoUtils(setCarrito, eliminarProductoUtils, carrito, producto)}
              eliminarProducto={(producto) => eliminarProductoUtils(setCarrito, setAlerta, carrito, producto)}
              incrementarProducto={(producto) => incrementarProductoUtils(setCarrito, carrito, producto)}
              vaciarCarrito={() => setCarrito([])}

            />
          </Route>
          <Route path="/checkout" exact>

            <Checkout
              carrito={carrito}
              vaciarCarrito={() => setCarrito([])}
            />
          </Route>
          <Route path="/completado" exact>
            <Completado
            />
          </Route>

          <Route path="/" exact>

            <Inicio
              datos={datos}
              busqueda={busqueda}
              addProducto={(producto) => addProductoUtils(setCarrito, setAlerta, incrementarProductoUtils, carrito, producto)}
              showInfo={(productocategoriaSeleccionada, subCategoriaSeleccionada, subsubCategoriaSeleccionada) => setInfo([productocategoriaSeleccionada, subCategoriaSeleccionada, subsubCategoriaSeleccionada])} />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
