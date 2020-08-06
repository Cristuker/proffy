import React, { SelectHTMLAttributes } from "react";

import "./style.css";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    name: string;
    options: Array<{ value: string; label: string }>;
    placeholder: string;
}

const Select: React.FC<SelectProps> = ({
    label,
    name,
    options,
    placeholder,
    ...rest
}) => {
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select id={name} {...rest}>
                <option value="" disabled selected hidden>
                    {placeholder}
                </option>
                {options.map((option, index) => {
                    return (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    );
                })}
                Selecione uma matéria
            </select>
        </div>
    );
};

export default Select;
