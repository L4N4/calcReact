import React from 'react';
import '../assets/Buttons.css'

const Button = ({value, className, handleClick}) => {
    function handleOnClick(e) {
       handleClick(e.target.value)
    }
    return(
        <input type='button' value={value} className={className} onClick={handleOnClick} />
    )
};

export default Button;