import { useState } from 'react';
import Producto from '../../componentes/tarjetaProducto/tarjetaProducto';


function Index(props) {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
    const [subCategoriaSeleccionada, setsubCategoriaSeleccionada] = useState('');
    const [subsubCategoriaSeleccionada, setsubsubCategoriaSeleccionada] = useState('');

    //Obtengo la información del json, en este caso sólo me quedo con las categorías base de los productos
    const data = require('../../datos.json');
    let categorias = [];

    //Cada categoria es un objeto que tiene un nombre y un array de subcategorias
    data.map((item) => {

        //Para no tener duplicados, se elimina el espacio en blanco al final
        let item_ToAdd = item.caprNombreRuta.split('/')[0].trimEnd();
        if (!categorias.includes(item_ToAdd)) {
            categorias.push(item_ToAdd);
        }
        return categorias;
    })
    categorias.sort();

    //Convierto el arreglo de categorías en un arreglo de objetos para incluir sus subcategorias
    categorias = categorias.map((nombre) => ({ nombre, subcategorias: [] }));

    //Agrego las subcategorias a cada objeto (lo agrego como objeto para poder agregar las sub-sub-categorias)
    categorias.map((categoria) => {
        data.map((item) => {
            //Verifico que existe una subcategoria
            if (item.caprNombreRuta.split('/')[1]) {

                let subcategoria = item.caprNombreRuta.split('/')[1].trimEnd().trimStart();
                //Accedo al padre de la subcategoria
                let padre = item.caprNombreRuta.split('/')[0].trimEnd().trimStart();

                //Agrego la subcategoria a la categoria padre que le corresponde
                if (padre === categoria.nombre) {
                    //Verifico que no exista la subcategoria
                    if (categoria.subcategorias.length > 0) {
                        categoria.subcategorias.map((subcategoria_existente) => {
                            if (subcategoria_existente.subcategoria_Nombre !== subcategoria) {
                                //Agrego también la lista de productos
                                categoria.subcategorias.push({ subcategoria_Nombre: subcategoria, subsubcategorias: [], productos: item.catalogoProd });
                            }
                            return categoria;
                        })
                    } else {
                        //Agrego también la lista de productos

                        categoria.subcategorias.push({ subcategoria_Nombre: subcategoria, subsubcategorias: [], productos: item.catalogoProd });
                    }
                }
            }
            return categoria;
        })
        return categoria;
    })

    //Agrego la sub-sub-categoria a cada objeto
    data.map((item) => {
        //Verifico que exista una sub-sub-categoria
        if (item.caprNombreRuta.split('/')[2]) {
            let sub_sub_categoria = item.caprNombreRuta.split('/')[2].trimEnd().trimStart();

            //Accedo al padre de la subcategoria
            let categoria_id = categorias.findIndex((categoria) => categoria.nombre === item.caprNombreRuta.split('/')[0].trimEnd().trimStart());

            //Accedo a la subcategoria del padre que coincide con la sub-sub-categoria
            let subcategoria_id = categorias[categoria_id].subcategorias.findIndex((subcategoria) => subcategoria.subcategoria_Nombre === item.caprNombreRuta.split('/')[1].trimEnd().trimStart());

            //Agrego la sub-sub-categoria a la subcategoria padre que le corresponde y también los productos
            categorias[categoria_id].subcategorias[subcategoria_id].subsubcategorias.push({ subsubcategoria_Nombre: sub_sub_categoria, productos: item.catalogoProd });
            //Agrego finalmente la lista de productos a la sub-sub-categoria

        }
        return categorias;
    })


    return (
        <div>
            <h1 class="py-8 text-center text-4xl font-black text-gray-900" >Explora los productos</h1>


            <ul class=" text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex">
                {categorias.map((categoria) => {
                    return (
                        <li
                            class={categoriaSeleccionada === categoria.nombre ? ' w-full bg-cyan-900 text-gray-100' : ' w-full bg-gray-300 text-gray-900'}

                            onClick={() => [setCategoriaSeleccionada(categoria.nombre), setsubCategoriaSeleccionada('')]}>
                            <p class="inline-block w-full p-4  ">{categoria.nombre}</p>
                        </li>
                    )
                }
                )}
            </ul>

            <ul class=" text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex">
                {categoriaSeleccionada !== '' ?
                    categorias.find((categoria) => categoria.nombre === categoriaSeleccionada).subcategorias.map((subcategoria) => {
                        return (
                            <li
                                class={subCategoriaSeleccionada === subcategoria.subcategoria_Nombre ? ' w-full bg-cyan-700 text-gray-100' : ' w-full bg-gray-200 text-gray-900'}
                                onClick={() => setsubCategoriaSeleccionada(subcategoria.subcategoria_Nombre)}>
                                <p class="inline-block w-full p-4  rounded-l-lg " >{subcategoria.subcategoria_Nombre}</p>
                            </li>
                        )
                    }
                    ) : null

                }
            </ul>
            <ul class="text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex">
                {subCategoriaSeleccionada !== '' ?
                    categorias.find((categoria) => categoria.nombre === categoriaSeleccionada).subcategorias.find((subcategoria) => subcategoria.subcategoria_Nombre === subCategoriaSeleccionada).subsubcategorias.map((subsubcategoria) => {
                        return (
                            <li
                                class={subsubCategoriaSeleccionada === subsubcategoria.subsubcategoria_Nombre ? ' w-full bg-cyan-300' : ' w-full bg-gray-100'}
                                onClick={() => setsubsubCategoriaSeleccionada(subsubcategoria.subsubcategoria_Nombre)}>
                                <p class="inline-block w-full p-4 text-gray-900 rounded-l-lg " >{subsubcategoria.subsubcategoria_Nombre}</p>
                            </li>
                        )
                    }
                    ) : null
                }
            </ul>

            <ul class="text-center text-gray-500  rounded-lg  sm:flex my-6 mx-4 flex justify-center column-gap gap-x-5 gap-y-5 flex-wrap" >

                {subCategoriaSeleccionada !== '' && categoriaSeleccionada !== '' ?

                    categorias.find((categoria) => categoria.nombre === categoriaSeleccionada).subcategorias.find((subcategoria) => subcategoria.subcategoria_Nombre === subCategoriaSeleccionada).productos.length > 0
                        ||
                        categorias.find((categoria) => categoria.nombre === categoriaSeleccionada).subcategorias.find((subcategoria) => subcategoria.subcategoria_Nombre === subCategoriaSeleccionada).subsubcategorias.length > 0
                        ?
                        categorias.find((categoria) => categoria.nombre === categoriaSeleccionada).subcategorias.find((subcategoria) => subcategoria.subcategoria_Nombre === subCategoriaSeleccionada).productos.map((producto) => {
                            return (
                                <Producto
                                    nombre={producto.cproCodigoint}
                                    descripcion={producto.cproDescripcion}
                                    addProducto={() => props.addProducto(producto)} />)
                        })
                        : <p class='py-4 px-8 text-orange-900 text-l'>No hay productos</p>
                    :
                    null
                }


                {subsubCategoriaSeleccionada !== '' && subCategoriaSeleccionada !== '' && categoriaSeleccionada !== '' ?
                    categorias.find((categoria) => categoria.nombre === categoriaSeleccionada).subcategorias.find((subcategoria) => subcategoria.subcategoria_Nombre === subCategoriaSeleccionada).subsubcategorias.map((subsubcategoria) => {

                        return (
                            subsubcategoria.productos.map((producto) => {

                                return (
                                    <Producto
                                        nombre={producto.cproCodigoint}
                                        descripcion={producto.cproDescripcion}
                                        addProducto={() => props.addProducto(producto)} />)
                            })
                        )
                    })
                    : null

                }



            </ul>
        </div>
    )
}

export default Index;
