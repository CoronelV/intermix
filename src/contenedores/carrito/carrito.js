import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Carrito(props) {


    return (
        <div>
            <h1 class="py-8 text-center text-4xl font-black text-gray-900" >Tu lista de productos</h1>
            <div class="h-screen bg-gray-100 pt-5">
                <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div class="rounded-lg md:w-2/3">
                        {props.carrito.length > 0 ?

                            props.carrito.map((producto) => {
                                return (
                                    <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                                        <img src={"../../img/" + producto.cproImg} alt="product-image" class="w-full rounded-lg sm:w-40" />
                                        <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                            <div class="mt-5 sm:mt-0">
                                                <h2 class="text-lg font-bold text-gray-900">{producto.cproNombre}</h2>
                                                <p class="mt-1 text-xs text-gray-700">{producto.cproCodigoint}</p>
                                                <p class='pt-3 text-red-600 cursor-pointer' onClick={() => props.eliminarProducto(producto)}>Eliminar producto</p>
                                            </div>
                                            <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                                <div class="flex items-center border-gray-100 mx-6">
                                                    <span
                                                        onClick={() => props.reducirProducto(producto)}
                                                        class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                                                    <p class="h-8 w-8 pt-1 border bg-white text-center " type="number" value="2" min="1" >{producto.cantidad}</p>
                                                    <span
                                                        onClick={() => props.incrementarProducto(producto)}
                                                        class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                                                </div>
                                                <div class="flex items-center space-x-4">
                                                    <ul>
                                                        <li>Unidad: $ {producto.cproPrecio.toFixed(2)}</li>
                                                        <li>Total:&nbsp; &nbsp; &nbsp;$ {(producto.cproPrecio * producto.cantidad).toFixed(2)}</li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })

                            :
                            <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                                <div class="mt-5 sm:mt-0">
                                    <h2 class="text-lg font-bold text-gray-900">No hay productos en el carrito</h2>
                                </div>
                            </div>}

                    </div>
                    <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">

                        <div class="flex justify-between">
                            <p class="text-lg font-bold">Total</p>
                            <div class="">
                                <p class="mb-1 text-lg font-bold">$ {props.carrito.reduce((acc, producto) => acc + producto.cproPrecio * producto.cantidad, 0).toFixed(2)}</p>
                            </div>
                        </div>
                        <Link to="/checkout">
                            <button
                                class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600 disabled:opacity-50 "
                                disabled={props.carrito.length === 0}

                            >Finalizar compra</button>

                        </Link>
                        <button
                            onClick={() => props.vaciarCarrito()}
                            disabled={props.carrito.length === 0}
                            class="mt-4 w-full rounded-md bg-red-500 py-1.5 font-medium text-blue-50 hover:bg-red-600 disabled:opacity-50">Vacíar carrito</button>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carrito;
