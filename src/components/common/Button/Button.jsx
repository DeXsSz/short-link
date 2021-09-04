import React from 'react'

import './Button.css'
import PropTypes from 'prop-types'
export const Button = ({type = "button", text}) => {
    return ( 
        <button type={type} className="button">
            {text}
        </button>
    )
}
Button.propTypes = {
    'type': PropTypes.string,
    'text': PropTypes.string.isRequired
}
