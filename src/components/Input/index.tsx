import React, { InputHTMLAttributes } from "react";
import InputMask from "react-input-mask";
import "./style.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    mask?: string;
    maskPlaceholder?: string;
}

const Input: React.FC<InputProps> = ({ label, name, mask = "", ...rest }) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <InputMask mask={mask} type="text" id={name} {...rest} />
        </div>
    );
};

export default Input;
