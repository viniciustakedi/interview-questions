import React, { InputHTMLAttributes } from 'react';
import './input.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    type: 'password' | 'text' | 'email' | 'tel';
}

const Input: React.FunctionComponent<InputProps> = ({ label, name, type, ...rest }) => {
    return (
        <div className='input'>
            <label id="Label" htmlFor={name}>{label}</label><br />
            <input type={type} id={name}{...rest}></input>
        </div>
    );
}

export default Input;