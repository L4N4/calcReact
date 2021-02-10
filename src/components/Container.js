import {useState} from 'react';
import '../assets/Container.css'
import EraseBtn from './EraseBtn';
import Form from './Form';
import NumOps from './NumOps';
import Screen from './Screen';

function Container() {
    // creamos un estado con un objeto para compartir las variables con los componentes hijos a traves de props
    const [controlScreen, setControlScreen] = useState({ 
        x:'0',//x =número en pantalla
        xi:1,  //xi =iniciar número en pantalla: 1=si; 0=no;
        coma:0, //coma =estado coma decimal 0=no, 1=si;
        //ni:0, //ni =número oculto o en espera
        // op:'no'//op = operación en curso; "no" =  sin operación
    })
    
    function handleControl (modifier) {//como parámetro pasamos los valores que quiero cambiar
        setControlScreen(prevState => ({...prevState, ...modifier})) //modifico el estado teniendo en cuenta el valor previo y editando la data
    }

    
   
    return(
        <div className='contenedor'>
            <Form>  {/* dentro de form indicamos los children */}
                <Screen data={controlScreen} functionSet={handleControl} />   {/* manejo de pantalla */}
                <br/>
                <EraseBtn data={controlScreen} functionSet={handleControl}/>{/* manejo de botones borrar */}
                <NumOps data={controlScreen} functionSet={handleControl}/>{/* manejo de botones numericos y operadores */}
            </Form>
        </div>
    )
}

export default Container;