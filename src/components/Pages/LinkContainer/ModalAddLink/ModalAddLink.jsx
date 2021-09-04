import React from 'react';
import { ButtonAddLetters } from '../../../common/ButtonAddLetters/ButtonAddLetters';
import './ModalAddLink.css';
const ModalAddLink = () => {
    const [descripcion, setDescripcion] = React.useState('');
    const handleSubmit = e => {
        e.preventDefault();
    };
    return (
        <div className="modal">
            <div className="modal__container">
                <form className="modal__form" onSubmit={handleSubmit}>
                    <div className="modal__form--input">
                        <label htmlFor="titulo">Titulo:</label>
                        <input
                            type="text"
                            id="titulo"
                            placeholder="Ingresa el Titulo de la tarjeta..."
                            autoComplete="off"
                        />
                    </div>
                    <div className="modal__form--input">
                        <label htmlFor="descripcion">
                            Descripción: <small>({descripcion.trim().length}/80)</small>
                        </label>
                        <textarea
                            id="descripcion"
                            value={descripcion}
                            cols="50"
                            rows="5"
                            maxLength="80"
                            placeholder="Ingresa una Descripción..."
                            autoComplete="off"
                            onChange={e => setDescripcion(e.target.value)}></textarea>
                    </div>
                    <div className="modal__form--input">
                        <label htmlFor="link">Link: </label>
                        <input
                            type="text"
                            id="link"
                            placeholder="Ingresa el Link..."
                            autoComplete="off"
                        />
                    </div>
                    <ButtonAddLetters type="submit" text="Agregar Link" />
                </form>
            </div>
        </div>
    );
};

export default ModalAddLink;
