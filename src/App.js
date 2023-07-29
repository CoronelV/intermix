import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Inicio from './contenedores/inicio/inicio';
import Carrito from './contenedores/carrito/carrito';
import Cabecera from "./componentes/cabecera/cabecera";

function App() {
  const [carrito, setCarrito] = useState([]);

  function addProducto(producto) {
    setCarrito([...carrito, producto]);
  }
  function removeProducto(producto) {
    setCarrito(carrito.filter((p) => p.id !== producto.id));
  }

  return (
    <div>

      <Router>
        <Cabecera carrito={carrito} />

        <Switch>
          <Route path="/carrito" exact>

            <Carrito />
          </Route>
          <Route path="/" exact>

            <Inicio addProducto={() => addProducto()} />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
