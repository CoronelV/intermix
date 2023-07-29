import React from 'react';
import { withRouter } from 'react-router-dom';

class Checkout extends React.Component {

    constructor(props) {
        super(props);
        this.comprobar = this.comprobar.bind(this);
        this.pagar = this.pagar.bind(this);
        this.state = {

            //Info de facturación 
            e_razonSocial: '',
            e_nombreComercial: '',
            e_tipoDocumento: 'RUC',
            e_documento: 'RUC',
            e_email: '',
            e_celular: '',
            e_direccion: '',
            e_ciudad: '',
            e_provincia: 'Azuay',

            //Info de pago
            e_numeroTarjeta: '',
            e_fechaVencimiento: '',
            e_codigoSeguridad: '',

            //Lógica
            completado: false,

        }
    }

    //Proceso de pago
    //Sólo se verifica que todos los campos han sido completado
    comprobar() {
        console.log(this.state)
        if (this.state.e_razonSocial === '' ||
            this.state.e_nombreComercial === '' ||
            this.state.e_tipoDocumento === '' ||
            this.state.e_documento === '' ||
            this.state.e_email === '' ||
            this.state.e_celular === '' ||
            this.state.e_direccion === '' ||
            this.state.e_ciudad === ''

        ) {
            this.setState({ completado: false });

        } else {
            this.setState({ completado: true });
        }

    }
    pagar() {
        if (this.state.completado) {
            const { history } = this.props;
            setTimeout(() => {
                history.push('/completado');
            }, 100);
        }
    }




    render() {
        return (
            <div>
                <h1 class="py-8 pt-24 text-center text-4xl font-black text-gray-900" >Finalizar Compra</h1>
                <div class=" bg-gray-100 pt-5">
                    <div class="mx-auto max-w-5xl flex justify-center px-6 md:flex md:space-x-6 xl:px-0 max-md:flex-col-reverse max-md:gap-y-6">
                        <div class="">
                            {this.props.carrito.length > 0 ?
                                <>
                                    <form class=" mb-6 rounded-lg bg-white p-6 shadow-md ">
                                        <h3 class="pb-4 text-2xl text-cyan-600">Información de facturación</h3>

                                        <div class="grid gap-6 mb-6 md:grid-cols-2">

                                            <div>
                                                <label for="e_razonSocial" class="block mb-2 text-sm font-medium text-gray-900 ">Razón social / Nombre Apellido</label>
                                                <input type="text"
                                                    id="e_razonSocial"
                                                    onChange={(e) => [this.setState({ e_razonSocial: e.target.value }), this.comprobar()]}
                                                    value={this.state.e_razonSocial}
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 t ext-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " required />
                                            </div>
                                            <div>
                                                <label for="e_nombreComercial" class="block mb-2 text-sm font-medium text-gray-900 ">Nombre comercial</label>
                                                <input type="text"
                                                    id="e_nombreComercial"
                                                    onChange={(e) => [this.setState({ e_nombreComercial: e.target.value }), this.comprobar()]}
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                            </div>

                                            <div>
                                                <label for="e_tipoDocumento" class="block mb-2 text-sm font-medium text-gray-900 ">Tipo de documento</label>
                                                <select
                                                    id="e_tipoDocumento"
                                                    onChange={(e) => [this.setState({ e_tipoDocumento: e.target.value }), this.comprobar()]}
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                                    <option selected value="RUC">RUC</option>
                                                    <option value="Cédula">Cédula</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label for="e_documento" class="block mb-2 text-sm font-medium text-gray-900 ">Número de documento</label>
                                                <input type="text"
                                                    id="e_documento"
                                                    onChange={(e) => [this.setState({ e_documento: e.target.value }), this.comprobar()]}
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " placeholder={this.state.e_tipoDocumento === "RUC" ? "0000000000-000" : "0000000000"} required />
                                            </div>
                                            <div>
                                                <label for="e_celular" class="block mb-2 text-sm font-medium text-gray-900 ">Teléfono</label>
                                                <input type="tel"
                                                    id="e_celular"
                                                    onChange={(e) => [this.setState({ e_celular: e.target.value }), this.comprobar()]}
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " placeholder="0900000000" required />
                                            </div>
                                            <div class="mb-2">
                                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Correo electrónico</label>
                                                <input type="email"
                                                    id="email"
                                                    onChange={(e) => [this.setState({ e_email: e.target.value }), this.comprobar()]}
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " placeholder="publicidad@intermix.com.ec" required />
                                            </div>
                                            <div>
                                                <label for="e_provincia" class="block mb-2 text-sm font-medium text-gray-900 ">Provincia</label>
                                                <select
                                                    id="e_provincia"
                                                    onChange={(e) => [this.setState({ e_provincia: e.target.value }), this.comprobar()]}
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                                    <option selected value="Azuay">Azuay</option>
                                                    <option value="Bolívar">Bolívar</option>
                                                    <option value="Cañar">Cañar</option>
                                                    <option value="Carchi">Carchi</option>
                                                    <option value="Chimborazo">Chimborazo</option>
                                                    <option value="Cotopaxi">Cotopaxi</option>
                                                    <option value="El Oro">El Oro</option>
                                                    <option value="Esmeraldas">Esmeraldas</option>
                                                    <option value="Galápagos">Galápagos</option>
                                                    <option value="Guayas">Guayas</option>
                                                    <option value="Imbabura">Imbabura</option>
                                                    <option value="Loja">Loja</option>
                                                    <option value="Los Ríos">Los Ríos</option>
                                                    <option value="Manabí">Manabí</option>
                                                    <option value="Morona Santiago">Morona Santiago</option>
                                                    <option value="Napo">Napo</option>
                                                    <option value="Orellana">Orellana</option>
                                                    <option value="Pastaza">Pastaza</option>
                                                    <option value="Pichincha">Pichincha</option>
                                                    <option value="Santa Elena">Santa Elena</option>
                                                    <option value="Santo Domingo de los Tsáchilas">Santo Domingo de los Tsáchilas</option>
                                                    <option value="Sucumbíos">Sucumbíos</option>
                                                    <option value="Tungurahua">Tungurahua</option>
                                                    <option value="Zamora Chinchipe">Zamora Chinchipe</option>

                                                </select>
                                            </div>
                                            <div>
                                                <label for="ciudad" class="block mb-2 text-sm font-medium text-gray-900 ">Ciudad</label>
                                                <input type="text"
                                                    id="ciudad"
                                                    onChange={(e) => [this.setState({ e_ciudad: e.target.value }), this.comprobar()]}
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " required />
                                            </div>
                                            <div>
                                                <label for="direccion" class="block mb-2 text-sm font-medium text-gray-900 ">Dirección</label>
                                                <input type="text"
                                                    id="direccion"
                                                    onChange={(e) => [this.setState({ e_direccion: e.target.value }), this.comprobar()]}
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " required />
                                            </div>

                                        </div>


                                    </form>
                                    <form class=" mb-6 rounded-lg bg-white p-6 shadow-md ">
                                        <h3 class="pb-4 text-2xl text-cyan-600">Pago</h3>

                                        <div class="grid gap-6 mb-6 md:grid-cols-2">
                                            <div>
                                                <label for="p_tarjeta" class="block mb-2 text-sm font-medium text-gray-900 ">Número de tarjeta</label>
                                                <input type="number"
                                                    id="p_tarjeta"
                                                    onChange={(e) => this.setState({ p_tarjeta: e.target.value })}
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 t ext-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " required />
                                            </div>
                                            <div>
                                                <label for="p_fechaVencimiento" class="block mb-2 text-sm font-medium text-gray-900 ">Código de seguridad (CVC)</label>
                                                <input type="text"
                                                    id="p_fechaVencimiento"
                                                    onChange={(e) => this.setState({ p_fechaVencimiento: e.target.value })}
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                            </div>
                                            <div>
                                                <label for="p_fechaVencimiento" class="block mb-2 text-sm font-medium text-gray-900 ">Fecha de vencimiento</label>
                                                <input type="text"
                                                    id="p_fechaVencimiento"
                                                    onChange={(e) => this.setState({ p_fechaVencimiento: e.target.value })}
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                            </div>

                                            <div>
                                                <button
                                                    disabled={!this.state.completado}
                                                    onClick={() => this.pagar()}
                                                    class="
                                                    w-full my-6 py-3 text-sm font-medium 
                                                    text-white bg-cyan-600 rounded-md hover:bg-cyan-700 focus:outline-none 
                                                    focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500
                                                    disabled:opacity-50 ">
                                                    {this.state.completado ? "Pagar" : "Complete los campos"}
                                                </button>
                                            </div>
                                        </div>


                                    </form>
                                </>


                                :
                                <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                                    <div class="mt-5 sm:mt-0">
                                        <h2 class="text-lg font-bold text-gray-900">No hay productos en el carrito</h2>
                                    </div>
                                </div>}

                        </div>
                        <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                            <h2 class="text-lg font-bold text-gray-900">Resumen de la compra</h2>
                            {this.props.carrito.map((producto, index) => {
                                return (
                                    <div class="mb-1 ">
                                        <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-2    00" />

                                        <div class="flex flex-col">
                                            <h3 class="text-m text-gray-600">{producto.cproNombre}</h3>
                                            <h4 class="text-s text-gray-400"> {producto.cproCodigoint}</h4>
                                            <div class="ml-auto">
                                                <p class="mb-1 text-sm  text-right ">Cantidad: {producto.cantidad}  </p>
                                                <p class="mb-1 text-sm ml-auto  font-medium text-gray-900 text-right">Total: $ {(producto.cantidad * producto.cproPrecio).toFixed(2)}  </p>

                                            </div>

                                        </div>
                                    </div>


                                )
                            })
                            }
                            <hr class="h-px my-6 bg-gray-600 border-0" />

                            <div class="flex justify-between">

                                <p class="text-lg font-bold">Total</p>
                                <div class="">
                                    <p class="mb-1 text-lg font-bold">$ {this.props.carrito.reduce((acc, producto) => acc + producto.cproPrecio * producto.cantidad, 0).toFixed(2)}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Checkout);