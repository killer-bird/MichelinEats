import React from "react";
import { useTimer } from 'react-timer-hook';


const Timer = ({ expiryTimestamp, callback })=>{
    
    const {minutes, seconds} = useTimer({expiryTimestamp, autoStart:true, onExpire: ()=> callback()})
    const minutesTime = minutes<10? `0${minutes}`: `${minutes}`
    const secondsTime = seconds<10? `0${seconds}`: `${seconds}`
    return(
        <div className="form__repeat">
                <span className="timer__minutes">{minutesTime}</span>:<span className="timer__seconds">{secondsTime}</span>
        </div>
    )
}
    
export default Timer;