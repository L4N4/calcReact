import React from 'react';

const Form = ({children}) => {
    return(
        <form action="#" name="calc" id="calculadora">
            {children}
        </form>
    )
}

export default Form;