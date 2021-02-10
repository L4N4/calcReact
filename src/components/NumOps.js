import React from 'react';
import Button from './Button';

const NumOps = ({data, functionSet}) => {
    const {x, xi, coma} = data; //desestructurando
    
    const operadores = ['+', '-', '*' , '/'];

    function addValue(val) {
        
        if(x === '0' || xi === 1) {  // si no hay nada en pantalla,
            functionSet({x: val}) //guardar número;
            if (val === '.') {//si escribimos una coma al principio del número
                functionSet({x: '0.', coma: 1})//guardar numero y cambiar estado de la coma
            }
        }else {//continuar escribiendo un número
            if(val === '.' && coma === 0) { //si escribimos una coma decimal por primera vez
                functionSet({x: x+val, coma:1}); //concatenar numero y cambiar el estado de la coma
            
            }else if(val === '.' && coma === 1) { }//si intentamos escribir una segunda coma decimal no realiza ninguna acción.
            else if(operadores.includes(x.charAt(x.length-1)) && operadores.includes(val)) { }// si escribimos operadores seguidos
            
            else{//Resto de casos: escribir un número del 0 al 9
                functionSet({x: x+val}) //concatenar valores
            }
        }
        functionSet({xi: 0})

    }

    // function operar(val) {
    //     result();
    //     functionSet({ni: x, op: val, xi: 1});
    // }


    function result() {
        // if(op !== 'no') {
            // let sl = ni + op + x;
            let sol = eval(x).toString();//convierte a texto. Evaluamos lo que este en x
            functionSet({x: sol, xi: 1}) // actualizamos valores e inicializamos pantalla
        // }
    }

    function raizC() { // raiz cuadrada
        functionSet({x: Math.sqrt(x), xi: 1});
    }

    function porcentaje() {
        let temporal = eval(`${x} / 100` ) //evaluamos la operacion dividiendo por 100
        functionSet({x: temporal, xi: 1});
    }
    
    function pi() { // mostrar valor de pi
        functionSet({x: Math.PI})
    }

    function exponente() { // elevar un numero al cuadrado
        functionSet({x: Math.pow(x, 2)})
    }

    return(
        <div className="grilla">
            <Button value='7' className='btn' handleClick={addValue}  />
            <Button value='8' className='btn' handleClick={addValue} />
            <Button value='9' className='btn' handleClick={addValue} />
            <Button value='/' className='btn op' handleClick={addValue} />
            <Button value='√' className='btn op' handleClick={raizC} />
            <Button value='4' className='btn' handleClick={addValue} />
            <Button value='5' className='btn' handleClick={addValue} />
            <Button value='6' className='btn' handleClick={addValue} />
            <Button value='*' className='btn op' handleClick={addValue} />
            <Button value='%' className='btn op' handleClick={porcentaje} />
            <Button value='1' className='btn' handleClick={addValue} />
            <Button value='2' className='btn' handleClick={addValue} />
            <Button value='3' className='btn' handleClick={addValue} />
            <Button value='-' className='btn op' handleClick={addValue} />
            <Button value='x^2' className='btn op' handleClick={exponente} />
            <Button value='0' className='btn cero' handleClick={addValue} />
            <Button value='.' className='btn' handleClick={addValue} />
            <Button value='+' className='btn op' handleClick={addValue} />
            <Button value='π' className='btn op' handleClick={pi} />
            <div className="info"><a href="https//aprende-web.net/jspracticas/calculadora/calculadora2.php" target="_blank">Más información aquí</a></div>
            <Button value='=' className='btn result' handleClick={result} />

        </div>
    )
}

export default NumOps;