import React from 'react';
// import { Button } from '../../common/Button/Button';
import './Header.css';
import logo from '../../../assets/Link.png'
import { UserContext } from '../../../stateManagement/context/UserProvider';
const Header = () => {
    const {cerrarSesion} = React.useContext(UserContext)
    return (
        <header className="header">
            <div className="container header__container">
                <div className="header__item">
                    <img src={logo} alt="Logo de Short Link" />
                </div>
                <div className="header__item">
                    <button type="button" onClick={cerrarSesion} className="button">Cerrar Sesión</button>
                    {/* <Link to="/login"><Button text="Cerrar Sesión" /></Link> */}
                </div>
            </div>
            <div className="header__time">
                <div className="container header__timeInfo">
                    <p className="header__textoDate">Versión: 0.0.0</p>
                    {/* <p className="header__textoDate">Viernes 3 de Septiembre. Hora: 20:38</p> */}
                </div>
            </div>
        </header>
    );
};

export default Header;
