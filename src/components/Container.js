import React from 'react';
import '../assets/Container.css'
import EraseBtn from './EraseBtn';
import Form from './Form';
import NumOps from './NumOps';
import Screen from './Screen';

function Container() {
    // variables para controlar la pantalla 

    // const [x, setX] = useState('0'); //guardar número en pantalla
    // const handleX = (modifier) => {
    //     setX(modifier);
    // }
    // const [xi, setXi] = useState(1); //iniciar número en pantalla: 1=si; 0=no;
    // const [coma, setComa] = useState(0); //estado coma decimal 0=no, 1=si;
    // const [ni, setNi] = useState(0); //número oculto o en espera.
    // const [op, setOp] = useState('no'); //operación en curso; "no" =  sin operación.

    return(
        <div className='contenedor'>
            <Form>
                <Screen />
                <br/>
                <EraseBtn />
                <NumOps />
            </Form>
        </div>
    )
}

export default Container;