import React from 'react';
import './Button.css';

const Button = ({Content}) => {
    return(
        <button className="btn">{Content} </button>
    );
}

export default Button;