import React from 'react';
import './LinkContainer.css';
import { links } from '../../../fixtures/links';
import ButtonAddLink from '../../common/ButtonAddLink/ButtonAddLink';
import { LinkItem } from './LinkItem/LinkItem.jsx';
const LinkContainer = () => {
    return (
        <section className="container link">
            <h1 className="link__title">Short Link</h1>
            <div className="link__container">
                {links.map((link, key) => {
                    return (
                        <LinkItem key={key} title={link.title} desc={link.desc} link={link.link} />
                    );
                })}
            </div>
            <ButtonAddLink/>
        </section>
    );
};

export default LinkContainer;
