export function buscarProductoUtils(nombre, setBusqueda, datos) {
    let subcategoria_encontrada_id = null;
    let subcategoria_encontrada = null;
    if (nombre === '' || nombre === null || nombre === ' ') {
        setBusqueda('');
        return;
    }
    datos.map((e) => {
        e.catalogoProd.map((producto) => {
            if (producto.cproDescripcion.toLowerCase().includes(nombre.toLowerCase())) {
                subcategoria_encontrada_id = producto.caprId;
                return subcategoria_encontrada_id;
            }
        }
        )

    }
    )
    if (subcategoria_encontrada_id !== null) {
        datos.map((e) => {
            if (e.caprId === subcategoria_encontrada_id) {
                subcategoria_encontrada = e.caprNombreRuta;
                return subcategoria_encontrada;
            }
        })
    }
    if (subcategoria_encontrada !== null) {
        setBusqueda(subcategoria_encontrada);
    }
}