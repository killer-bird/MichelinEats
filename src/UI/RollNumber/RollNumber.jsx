import React from 'react'
import DigitRoll from "digit-roll-react";
import "./RollNumber.scss"

const RollNumber = (props) => {

    return (
        <DigitRoll num={props.sum} divider="" delay={0.3}/>
    )
}

export default RollNumber