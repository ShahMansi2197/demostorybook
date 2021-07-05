import React from "react";
import './Button.css';


const Button = (props : any ) => {
    const {variant = 'primary',children,...rest} = props
    return(
        <div>
            <button className={`button ${variant}`} {...rest}>{children}</button>
        </div>
    );
}

export default Button;