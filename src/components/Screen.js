import React from 'react';
import '../assets/Container.css'

function Screen({data}) {
    
     return(
        <p id="campo">{data.x}</p> // imprimimos en la pantalla el valor de x
    )
}

export default Screen;