import React from 'react';
import './LoginScreen.css';
import illustration from '../../assets/connected.svg'
import { UserContext } from '../../stateManagement/context/UserProvider';
const LoginScreen = () => {
    const {iniciarSesion} = React.useContext(UserContext)
    const handleClick = ()=>{
        iniciarSesion()
    }
    return (
        <div className="login">
            <form className="login__form container">
                    <h1 className="login__form--title">Inicia Sesión</h1>
                    <p className="login__form--text">
                    Conectate con la cuenta de Google para poder sincronizar tus Links en todos los dispositivos en tiempo real.
                    </p>
                    <img src={illustration} alt="Illustration of Undraw Connecte world" className="login__form--image"/>
                    <button type="button" className="login__form--btnLogin" onClick={handleClick}>Login <i className="fab fa-google"></i></button>
            </form>
        </div>
    );
};

export default LoginScreen;
