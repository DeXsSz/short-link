import React from 'react';
import { auth, provider } from '../../firebase.js';

export const UserContext = React.createContext();
export const UserProvider = props => {
    const dataUserDefault = {
        name: null,
        email: null,
        photo: null,
        uid: null,
        state: null,
    };
    // const [isLogin, setIsLogin] = React.useState(false);
    const [user, setUser] = React.useState(dataUserDefault);
    const iniciarSesion = async () => {
        try {
            auth.signInWithPopup(provider).then(res => {
                setUser({ ...user, state: true });
                // setIsLogin(value => !value);
                console.log(`- ${res.user.displayName} - se inicio correctamente!`);
            });
        } catch (error) {
            console.log(error);
            console.error('Ocurrio un error intentando logear al usuario.');
        }
    };
    const cerrarSesion = async () => {
        try {
            // auth.signOut().then(() => setIsLogin(value => !value));
            auth.signOut().then(() => setUser({ ...user, state: false }));
        } catch (error) {
            console.log('Upss! ocurrio un error al intentar Cerrar Sesión.');
            console.log(error);
        }
    };
    const detectarUsuario = async () => {
        try {
            await auth.onAuthStateChanged(user => {
                if (user) {
                    setUser({
                        name: user.displayName,
                        email: user.email,
                        photo: user.photoURL,
                        uid: user.uid,
                        state: true,
                    });
                } else {
                    setUser({ name: null, email: null, photo: null, uid: null, state: false });
                }
            });
        } catch (error) {
            console.log('Upps! error al detectar usuario.');
            console.log(error);
        }
    };
    React.useEffect(() => {
        detectarUsuario();
    }, []);
    return (
        <UserContext.Provider value={{ user, iniciarSesion, cerrarSesion }}>
            {props.children}
        </UserContext.Provider>
    );
};
