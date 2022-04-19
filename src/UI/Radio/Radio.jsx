import React from "react";
import "./Radio.scss";

const Radio = React.forwardRef ((props, ref)=>{
    return(
    <label className="radio"> {props.text}
        <input type="radio" ref={ref} onChange={props.onChange} name={props.name} value={props.value}/>
        <span className="radio__checkmark"></span>
    </label>
    )
})

export default Radio;