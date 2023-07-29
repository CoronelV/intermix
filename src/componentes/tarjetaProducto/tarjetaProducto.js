function Producto(props) {

    return (
        <div class="w-80 p-6 bg-slate-700 border border-gray-200 rounded-lg shadow">
            <img class="rounded-t-lg h-48" src={"../../img/" + props.img} alt="" />
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-100">
                {props.nombre}
            </h5>
            <p class="mb-3 font-normal text-gray-300 h-12">
                {props.descripcion}</p>
            <p class='mb-3 text-gray-100'>$ {props.precio.toFixed(2)}</p>
            <div class="flex gap-x-4">
                <p onClick={props.showInfo} class="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Más información
                </p>
                <p onClick={props.addProducto} class="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Agregar al carrito
                </p>

            </div>
        </div>
    )

}
export default Producto;