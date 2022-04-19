import React, {useState} from "react";
import "./FloatingInput.scss"


const FloatingInput = React.forwardRef((props, ref)=>{
    const [value, setValue] = useState('');

    function handleChange(e) {
        setValue(e.target.value);
    }
    return(
        <>
            <div className="input__field">
                <input type={props.type ? props.type : "text"} onFocus={props.onFocus} value={props.value || value} className="form__input --border-none" ref={ref} onChange={(e)=>{ handleChange(e); props.onChange(e);}} required={props.required}  disabled={props.disabled}/>
                <span className={ props.value || value? "input__field__label --active": "input__field__label"}>{props.placeholder}</span>
            </div>
        </>
    )
})

export default FloatingInput;