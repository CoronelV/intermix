import { useEffect, useRef } from 'react';
import classes from './alerta.module.css';

function Alerta(props) {
    const ref = useRef(null);
    useEffect(() => {
        if (props.mensaje !== '') {
            setTimeout(() => {
                ref.current.classList.remove(classes.mostrar);
            }, 3000);
            ref.current.classList.add(classes.mostrar);

        }
    }, [props.mensaje]);

    return (
        <div
            className={classes.alerta + ' ' + classes[props.tipo]}
            ref={ref}
        >
            <div
            >
                <span class="block sm:inline">{props.mensaje}</span>
            </div>
        </div>
    )
}
export default Alerta;