import { useEffect, useState } from "react";

function Emergente(props) {
    const [infoActiva, setinfoActiva] = useState('');
    console.log(props.info)

    useEffect(() => {
        //pros.info[0] corresponde a la información del producto, si es null, no se muestra la ventana modal
        if (props.info) {
            console.log(props.info)
            setinfoActiva(props.info);
        }
    }, [props.info]);

    return (

        <div >
            {infoActiva ?
                <div id="staticModal" data-modal-backdrop="static" tabindex="-1"
                    class={"fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center" + (infoActiva[0] !== '' ? " block" : " hidden")}>

                    <div class="relative w-full max-w-2xl max-h-full">
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                    {props.info[0].cproNombre}
                                </h3>

                            </div>
                            <div class="p-2 px-6 space-y-2">
                                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    {props.info[3] ?
                                        props.info[1] + ' / ' + props.info[2] + ' / ' + props.info[3] :
                                        props.info[1] + ' / ' + props.info[2]
                                    }
                                </p>
                                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    Referencia: {props.info[0].cproCodigoint}

                                </p>
                                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    Código: {props.info[0].unidCodigo}
                                </p>
                                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    Precio: $ {props.info[0].cproPrecio.toFixed(2)}
                                </p>
                                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                </p>
                            </div>
                            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button
                                    onClick={() => [props.addProducto(props.info[0]), setinfoActiva(null)]}
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">

                                    Agregar al carrito
                                </button>
                                <button
                                    onClick={() => [setinfoActiva(''), props.hideInfo()]}
                                    class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                : null}
        </div>

    )
}
export default Emergente;