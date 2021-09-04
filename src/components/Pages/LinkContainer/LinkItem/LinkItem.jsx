import React from 'react'
import PropTypes from 'prop-types'
import './LinkItem.css'
export const LinkItem = ({title, desc, link}) => {
    return (
        <article className="link__item">
            <h2 className="link__itemTitle"><span className="link__itemTitle--hash">#</span> {title}</h2>
            <div className="link__desc">
                <p className="link__descText"><b>Description:</b> {desc}</p>
                <button className="link__descIcon"><i className="fas fa-edit"></i></button>
            </div>
            <a className="link__btn" href={link} target="_blank" rel="noreferrer">Ir al Enlace</a>
        </article>
    )
}
LinkItem.propTypes = {
    'title': PropTypes.string.isRequired,
    'desc': PropTypes.string.isRequired,
    'link': PropTypes.string.isRequired
}
