import { useState } from "react";

export default function InputField({label, ...props}) {
    const [inputValue, setInputValue] = useState(0);

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    return (
        <li style={{listStyleType: "none"}}>
            <label>{label}</label>
            <input {...props} value={inputValue} onChange={handleChange}></input>
        </li>
    );
}