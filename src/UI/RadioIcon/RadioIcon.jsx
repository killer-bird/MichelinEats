import React from 'react'
import "./RadioIcon.scss"

const RadioIcon = React.forwardRef ((props, ref) => {
    
    return (
        <label className="radio-icon"> 
            <input type="radio" ref={ref} onChange={props.onChange} name={props.name} value={props.value}/>
            <div className="radio-icon__checkmark">
                <div className='radio-icon__icon'>{props.children}</div>
                <div className='radio-icon__text'>{props.text}</div>
            </div>
            
        </label>
    )
})

export default RadioIcon