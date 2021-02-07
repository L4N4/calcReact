import React from 'react';
import Button from './Button';
import '../assets/Container.css'

const EraseBtn = ({x, coma}) => {

    // const retro = () => {//Borrar sólo el último número escrito.
    //     const [cifras, setCifras] = useState(x.length); //hayar número de caracteres en pantalla
    //     const [br, setBr] = useState(x.substring(cifras - 1, cifras)); //info del último caracter
    //     x = {() => handleX(x.substring(0, cifras - 1))} //quitar el ultimo caracter
    //     if (x == "") { x = "0"; } //si ya no quedan caracteres, pondremos el 0
    //     if (br == ".") { coma = 0; } //Si hemos quitado la coma, se permite escribirla de nuevo.
    //     pantalla.innerHTML = x; //mostrar resultado en pantalla 
    // }

    return(
        <div className ="erase">
            <Button value='⌫' className='btn clean' /> {/* // onClick={retro} */}
            <Button value='C' className='btn clean' />
            <Button value='CE' className='btn clean' />
        </div>
    )
}

export default EraseBtn;