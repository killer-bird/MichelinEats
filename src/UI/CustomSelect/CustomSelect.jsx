import React from "react";
import Select from "react-select";


const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.isFocused ? '#fff' : '#000',
        padding: "15px",
        background: state.isFocused ?  "#CD2C31": "#fff"
        
    }),
    dropdownIndicator: (provided, state)=>({
        ...provided,
        color:  "#CD2C31",
        transition: 'all .2s ease',
        transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
        "&:hover":{
            color:  "#CD2C31"
        }
        
    }),
    indicatorSeparator: (provided, state)=>({
        ...provided,
        display: "none"
        
    }),
    menu: (provided, state)=>({
        ...provided,
        padding: 0,
        margin: 0,
        borderRadius: "0 0 10px 10px",
        border: "none",
        
    }),
    menuList: (provided, state)=>({
        ...provided,
        padding: 0,
        borderRadius: "0 0 10px 10px",
        
    }),
    control: (provided, state)=>({
        ...provided,
        width: 100 + "%",
        height: 60,
        padding: "0 10px",
        borderRadius: state.menuIsOpen ? "10px 10px 0 00" : "10px",
        background: "#fff",
        fontSize: "16px",
        cursor: "pointer",
        border: "none",
        margin: "0 0 20px 0"
        
    }),
    input: (provided, state)=>({
        ...provided,
        height: 100 + "%",
        border: "none",
        
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return { ...provided, opacity, transition };
    }
}

const options = [
    { label: "test1", value: 1 },
    { label: "test 2", value: 2 }   
]

const CustomSelect = React.forwardRef((props, ref) => {

    return (
        <div className="dropdown__container">
            <Select  styles={customStyles} classNamePrefix="select" name={props.name} options={options} ref={ref} onChange={(e)=>props.onChange(e)} onBlur={props.onBlur}  placeholder={props.placeholder}/>
        </div>
        )
})
export default CustomSelect;