import React from 'react';
import Button from './Button';
import '../assets/Container.css'

const EraseBtn = ({data, functionSet}) => {

    const {x, xi, coma, ni} = data;
    //  borrar solo un dígito
    function retro() { 
        let cifras = x.length; //hayar número de caracteres en pantalla
        let lastChar = x.substr(cifras - 1, cifras); //info del último caracter
        functionSet({x: x.substr(0, cifras - 1)}); //quitar el ultimo caracter
        if(x==='') {functionSet({x: '0'})};//si ya no quedan caracteres, pondremos el 0
        if(lastChar == '.') {functionSet({coma: 0})};//Si hemos quitado la coma, se permite escribirla de nuevo
    }

    // function borradoParcial() {
    //      functionSet({ni: x, x: '0', coma: 0})
    // }

    function borradoTotal() {
        functionSet({x: '0', coma: 0, xi: 1})
    }

    return(
        <div className ="erase">
            <Button value='⌫' className='btn clean' handleClick={retro} />
            <input type='button' value='㋡' className='btn clean' />
            <Button value='CE' className='btn clean' handleClick={borradoTotal} />
        </div>
    )
}
export default EraseBtn;