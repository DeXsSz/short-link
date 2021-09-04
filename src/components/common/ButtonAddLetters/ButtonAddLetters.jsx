import React from 'react'
import PropTypes from 'prop-types'
import './ButtonAddLetters.css'
export const ButtonAddLetters = ({type = 'button', text}) => {
    return (
        <button type={type} className="btnAddLetters">
            {text}
        </button>
    )
}
ButtonAddLetters.propTypes = {
    'text': PropTypes.string.isRequired,
    'type': PropTypes.string.isRequired
}
