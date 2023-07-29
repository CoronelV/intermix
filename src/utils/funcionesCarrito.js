export function incrementarProductoUtils(setCarrito, carrito, producto) {
    let nuevo_carrito = [...carrito];
    const producto_existente = carrito.findIndex(e => e.cproCodigoint === producto.cproCodigoint);
    nuevo_carrito[producto_existente].cantidad++;
    setCarrito(nuevo_carrito);
}

export function eliminarProductoUtils(setCarrito, setAlerta, carrito, producto) {
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

export function addProductoUtils(setCarrito, setAlerta, incrementarProducto, carrito, producto) {
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

export function reducirProductoUtils(setCarrito, eliminarProducto, carrito, producto) {
    let nuevo_carrito = [...carrito];
    const producto_existente = carrito.findIndex(e => e.cproCodigoint === producto.cproCodigoint);
    if (nuevo_carrito[producto_existente].cantidad > 1) {
        nuevo_carrito[producto_existente].cantidad--;
        setCarrito(nuevo_carrito);
    } else {
        eliminarProducto(producto);
    }
}