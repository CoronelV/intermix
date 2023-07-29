function Producto(props) {

    return (
        <div class="w-80 p-6 bg-slate-700 border border-gray-200 rounded-lg shadow">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-100">
                {props.nombre}
            </h5>
            <p class="mb-3 font-normal text-gray-300 ">
                {props.descripcion}</p>
            <p onClick={props.addProducto} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Agregar al carrito
            </p>
        </div>
    )

}
export default Producto;