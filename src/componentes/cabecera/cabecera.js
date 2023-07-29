import { Link } from 'react-router-dom';

function Cabecera(props) {
    return (
        <header>
            <nav class="fixed w-screen bg-slate-800 text-white px-8 py-4 max-md:px-2 ">
                <div class="container mx-auto flex items-center justify-between ">
                    {/* Enlaces  */}
                    <div class="space-x-4">
                        <Link to="/">Inicio</Link>
                    </div>

                    {/* Búsqueda  */}
                    <div class="flex items-center max-md:justify-center">

                        <input type="text" placeholder="Nombre del producto..."
                            onChange={(e) => props.buscarPorducto(e.target.value)}
                            class="rounded-l-lg px-4 py-2 focus:outline-none text-black max-md:px-2 max-md:w-1/3 " />
                        <div class=" bg-slate-100 h-10 px-4 pt-3 focus:outline-none text-black max-md:px-2 max-md:w-1/3" >
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" /></svg>

                        </div>
                    </div>

                    {/* Carrito  */}
                    <div class="relative">
                        <Link to="/carrito">
                            <span class="bg-red-600 text-white absolute mt-4  left-6 w-5 h-5 text-center rounded-full text-sm">
                                {
                                    props.carrito.reduce((acc, e) =>
                                        acc + e.cantidad, 0)}
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="2em" class="fill-white" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />

                            </svg>

                        </Link>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Cabecera;