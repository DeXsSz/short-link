import React from 'react';
import './ModalAddLink.css';
import { ButtonAddLetters } from '../../../common/ButtonAddLetters/ButtonAddLetters';
import { useForm } from '../../../../hooks/useForm';
import { db } from '../../../../firebase';
import { UserContext } from '../../../../stateManagement/context/UserProvider';
const ModalAddLink = () => {
    const {user} = React.useContext(UserContext)
    const [{title, desc, link}, handleInputChange, reset] = useForm({title: '', desc: '', link: ''});
    const [error, setError] = React.useState(null)
    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            if(link.trim().length > 9){
                await db.collection('usuarios').doc(user.uid).collection('links').add({title: title, desc: desc, link: link});
                reset();
                setError('')
            // await db.collection('usuarios').doc(user.uid).set({title: title, desc: desc, link: link})
            }else {
                setError('*Recuerda Agregar un LINK!')
                return
            }
            
            
        } catch (error) {
            console.log(error)
        }
    };
    return (
        <div className="modal">
            <div className="modal__container">
                <form className="modal__form" onSubmit={handleSubmit}>
                    <div className="modal__form--input">
                        <label htmlFor="titulo">Titulo: </label>
                        <input
                            required
                            type="text"
                            id="titulo"
                            placeholder="Ingresa el Titulo de la tarjeta..."
                            autoComplete="off"
                            onChange={e => handleInputChange(e)}
                            name='title'
                            value={title}
                        />
                        
                    </div>
                    <div className="modal__form--input">
                        <label htmlFor="descripcion">
                            Descripción: <small>({desc.trim().length}/80)</small>
                        </label>
                        <textarea
                            required
                            id="descripcion"
                            name="desc"
                            value={desc}
                            cols="50"
                            rows="5"
                            maxLength="80"
                            placeholder="Ingresa una Descripción..."
                            autoComplete="off"
                            onChange={e => handleInputChange(e)}></textarea>
                    </div>
                    <div className="modal__form--input">
                        <label htmlFor="link">Link: <span className="errorModal">{error} </span></label>
                        <input
                            required
                            type="text"
                            id="link"
                            placeholder="Ingresa el Link..."
                            autoComplete="off"
                            onChange={e => handleInputChange(e)}
                            name='link'
                            value={link}
                        />
                    </div>
                    <ButtonAddLetters type="submit" text="Agregar Link"/>
                </form>
            </div>
        </div>
    );
};

export default ModalAddLink;
