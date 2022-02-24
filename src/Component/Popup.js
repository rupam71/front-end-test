import React from 'react';
import style from './popup.module.css'
import popupImage from './../Image/popup.png'

const Popup = (props) => {
    return ( 
        <div className={style.popupBox}>
            <div className={style.box}>
            <span className={style.closeIcon} onClick={props.handleClose}>x</span>
                <div className={style.contentWrap}>
                <img src={popupImage} className={style.background}></img>
                    <div className={style.content}>
                        <h1 className={style.header}>{props.header}</h1>
                        <p className={style.subheader}>{props.subheader}</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Popup;