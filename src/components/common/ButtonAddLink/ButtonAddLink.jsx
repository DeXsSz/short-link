import React from 'react'
import ModalAddLink from '../../Pages/LinkContainer/ModalAddLink/ModalAddLink'
import './ButtonAddLink.css'
const ButtonAddLink = () => {
    const [onClick, setOnClick] = React.useState(false)
    const handdleClick = ()=> {
        setOnClick(!onClick)
    }
    return (
        <>
        {onClick && <ModalAddLink/>}
        <button className="btnAddLink" onClick={handdleClick}>
            <i className={`fas ${onClick && 'fa-times'} fa-plus-circle`}></i>
        </button>
        </>
    )
}

export default ButtonAddLink
