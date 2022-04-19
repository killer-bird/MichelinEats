import React, {useRef} from 'react'
import Button from "../../UI/Button/Button"
const ProfileReferral = () => {

    const refLink = useRef()
    
    const onClick = ()=>{
        refLink.current.select()
        document.execCommand("copy")
        

    }
    return (
    <div className="profile-points__referral">
        <input className="profile-points__link" disabled value={"https://www.flaticon.com/search?word=gift"} ref={refLink}/>
        <div className='profile-points__copy-btn__wrapper' onClick={onClick}>
            <Button >
                <div className="profile-points__copy-btn">
                Скопировать
                </div>
            </Button>
        </div>
    </div>
    )
}

export default ProfileReferral