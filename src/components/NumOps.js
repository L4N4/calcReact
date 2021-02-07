import React from 'react';
import Button from './Button';

const NumOps = () => {

    return(
        <div className="grilla">
            <Button value='7' className='btn' />
            <Button value='8' className='btn' />
            <Button value='9' className='btn' />
            <Button value='/' className='btn op' />
            <Button value='√' className='btn op' />
            <Button value='4' className='btn' />
            <Button value='5' className='btn' />
            <Button value='6' className='btn' />
            <Button value='*' className='btn op' />
            <Button value='%' className='btn op' />
            <Button value='1' className='btn' />
            <Button value='2' className='btn' />
            <Button value='3' className='btn' />
            <Button value='-' className='btn op' />
            <Button value='x^2' className='btn op' />
            <Button value='0' className='btn cero' />
            <Button value='.' className='btn' />
            <Button value='+' className='btn op' />
            <Button value='π' className='btn op' />
            <div className="info"><a input href="https//aprende-web.net/jspracticas/calculadora/calculadora2.php">Más información aquí</a></div>
            <Button value='=' className='btn result' />
            
        </div>
    )
}

export default NumOps;