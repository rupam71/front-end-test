import React from 'react';
import style from './meals.module.css'
import Popup from './Popup';

const Meals = (props) => {
    const [headerHoverColor, setheaderHoverColor] = React.useState({
        minHeight:'50px',
        fontSize:'1.35rem',
        color:'white',
        textShadow: 'none',
        transition: '0.5s ease-in-out'
    });
    const [openPopUp, setopenPopUp] = React.useState(false);
    return ( 
        <div className={style.meals} 
        onMouseEnter={()=>setheaderHoverColor({...headerHoverColor,textShadow:'0 0 6px white'})}
        onMouseLeave={()=>setheaderHoverColor({...headerHoverColor,textShadow:''})}
        >
            <i className={props.icon} onClick={()=>{
                setopenPopUp(true)
                setheaderHoverColor({...headerHoverColor,textShadow:''})
            }}></i>
            <h3 style={headerHoverColor}>{props.header}</h3>
            <p className={style.subheader}>{props.subheader}</p>
            
            { openPopUp && <Popup 
                header={props.header}
                subheader={props.subheader}
                handleClose={()=>setopenPopUp(false)}
                /> 
            }
        </div>
     );
}
 
export default Meals;