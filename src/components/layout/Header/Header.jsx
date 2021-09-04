import React from 'react';
import { Button } from '../../common/Button/Button';
import './Header.css';
import logo from '../../../assets/Link.png'
const Header = () => {
    return (
        <header className="header">
            <div className="container header__container">
                <div className="header__item">
                    <img src={logo} alt="Logo de Short Link" />
                </div>
                <div className="header__item">
                    <Button text="Inicia Sesión" />
                </div>
            </div>
            <div className="header__time">
                <div className="container header__timeInfo">
                    <p className="header__textoDate">Viernes 3 de Septiembre. Hora: 20:38</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
