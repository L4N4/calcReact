import React from 'react';
import '../assets/Buttons.css'

const Button = ({value, className, handleClick}) => {
    return(
        <input type='button' value={value} className={className} onClick={handleClick} />
    )
};

export default Button;