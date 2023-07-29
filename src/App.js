import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Inicio from './contenedores/inicio/inicio';
import Carrito from './contenedores/carrito/carrito';
import Cabecera from "./componentes/cabecera/cabecera";
import Alerta from "./componentes/alerta/alerta";
import Checkout from "./contenedores/checkout/checkout";
import Completado from "./contenedores/completado/completado";
import Emergente from "./componentes/emergente/emergente";

function App() {
  //Fuente de datos
  //Ojo, los precios no estaban incluidos en el .json así que incluí  un precio aleatorio a los elementos
  const datos = require('./datos.json');



  const [carrito, setCarrito] = useState([]);
  const [alerta, setAlerta] = useState({ mensaje: '', tipo: '' });
  const [info, setInfo] = useState(null); //Para la ventana modal

  function addProducto(producto) {
    let nuevo_carrito = [...carrito];
    //Se revisa si el producto ya existe en el carrito
    const producto_existente_id = carrito.findIndex(producto_existente => producto_existente.cproCodigoint === producto.cproCodigoint);
    if (producto_existente_id !== -1) {
      //Si existe, se incrementa la cantidad
      incrementarProducto(producto);
    } else {
      //Si no existe, se agrega al carrito (también se le agrega la propiedad cantidad)
      producto.cantidad = 1;
      nuevo_carrito = [...nuevo_carrito, producto];
      setCarrito(nuevo_carrito);
    }
    //Se muestra la alerta
    setAlerta({ mensaje: `${producto.cproDescripcion} añadido al carrito`, tipo: 'agregado' });
    setTimeout(() => {
      setAlerta({ mensaje: '', tipo: '' });
    }
      , 3000);
  }
  function eliminarProducto(producto) {
    let nuevo_carrito = [...carrito];
    nuevo_carrito = nuevo_carrito.filter(e => e.cproCodigoint !== producto.cproCodigoint);
    setCarrito(nuevo_carrito);

    //Se muestra la alerta
    setAlerta({ mensaje: `${producto.cproDescripcion} eliminado del carrito`, tipo: 'eliminado' });
    setTimeout(() => {
      setAlerta({ mensaje: '', tipo: '' });
    }
      , 3000);
  }
  function reducirProducto(producto) {
    let nuevo_carrito = [...carrito];
    const producto_existente = carrito.findIndex(e => e.cproCodigoint === producto.cproCodigoint);
    if (nuevo_carrito[producto_existente].cantidad > 1) {
      nuevo_carrito[producto_existente].cantidad--;
      setCarrito(nuevo_carrito);
    } else {
      eliminarProducto(producto);
    }
  }
  function incrementarProducto(producto) {
    let nuevo_carrito = [...carrito];
    const producto_existente = carrito.findIndex(e => e.cproCodigoint === producto.cproCodigoint);
    nuevo_carrito[producto_existente].cantidad++;
    setCarrito(nuevo_carrito);
  }



  return (
    <div>

      <Router>
        <Cabecera carrito={carrito} />
        <Alerta mensaje={alerta.mensaje} tipo={alerta.tipo} />
        <Emergente info={info} hideInfo={() => setInfo(null)} addProducto={(producto) => addProducto(producto)} />
        <Switch>
          <Route path="/carrito" exact>

            <Carrito
              carrito={carrito}
              reducirProducto={(producto) => reducirProducto(producto)}
              eliminarProducto={(producto) => eliminarProducto(producto)}
              incrementarProducto={(producto) => incrementarProducto(producto)}
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

            <Inicio datos={datos} addProducto={(producto) => addProducto(producto)} showInfo={(productocategoriaSeleccionada, subCategoriaSeleccionada, subsubCategoriaSeleccionada) => setInfo([productocategoriaSeleccionada, subCategoriaSeleccionada, subsubCategoriaSeleccionada])} />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
