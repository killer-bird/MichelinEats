import React from 'react';
import "./Sceleton.scss"



const Sceleton = () => {
    return <div className="sceleton">
                <div className="sceleton__img"></div>
                <div className="sceleton__main">
                    <div className="sceleton__title"></div>
                    <div className="sceleton__text"></div>
                    <div className="sceleton__footer">
                        <div className="sceleton__footer-block"></div>
                        <div className="sceleton__footer-block"></div>
                    </div>
                </div>
            </div>;
}

export default Sceleton;