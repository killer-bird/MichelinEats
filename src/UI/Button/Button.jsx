import React from 'react';
import ReactDOM from "react-dom"
import "./Button.scss"

const Button = ({children, onClick, type}) => {

    return <button className='btn' type={type}  onClick={onClick}>{children}</button>;
};

export default Button;


