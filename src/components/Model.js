import React from 'react'

const Modal = ({selected,setSelected}) => {
    const clickHandler = (e)=>{
        if(e.target.classList.contains('backdrop')){
            setSelected(null);
        }
    };
    return (
        <div className="backdrop" onClick={clickHandler} >
            <img src={selected} alt='img' />
        </div>
    )
}

export default Modal;
