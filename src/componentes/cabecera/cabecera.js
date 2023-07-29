import { Link } from 'react-router-dom';

function Cabecera(props) {
    return (
        <header>
            <nav class="bg-slate-800 text-white px-8 py-4 max-md:px-2 ">
                <div class="container mx-auto flex items-center justify-between ">
                    {/* Enlaces  */}
                    <div class="space-x-4">
                        <Link to="/">Productos</Link>
                    </div>

                    {/* Búsqueda  */}
                    <div class="flex items-center max-md:justify-center">
                        <input type="text" placeholder="Buscar..." class="rounded-l-lg px-4 py-2 focus:outline-none text-black max-md:px-2 max-md:w-1/3 " />
                        <button class="bg-slate-400 text-white rounded-r-lg px-4 py-2">Buscar</button>
                    </div>

                    {/* Carrito  */}
                    <div class="relative">
                        <Link to="/carrito">
                            <span class="bg-red-600 text-white absolute top-0 right-0 w-5 h-5 text-center rounded-full text-sm">
                                {
                                    props.carrito.reduce((acc, e) =>
                                        acc + e.cantidad, 0)}
                            </span>
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 15c0 1.657 1.343 3 3 3s3-1.343 3-3M4.079 4.879C5.715 3.243 7.784 2.5 10 2.5c2.216 0 4.285.743 5.921 2.379C16.243 5.715 17 7.784 17 10c0 2.216-.743 4.285-2.379 5.921C14.285 16.243 12.216 17 10 17s-4.285-.757-5.921-2.379C3.757 14.285 3 12.216 3 10c0-2.216.757-4.285 2.379-5.921z" />
                            </svg>
                        </Link>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Cabecera;