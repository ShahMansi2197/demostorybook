import React from "react";
import './Input.css';

const Input = (props : any) =>
{
    const {size = 'medium', ...rest} = props ;
    return(
        <div>
            <input type="text" className={`input ${size}`} placeholder={`${size} size`}></input>
        </div>
    );
}

export default Input;