import React from 'react';
import './LinkContainer.css';
import ButtonAddLink from '../../common/ButtonAddLink/ButtonAddLink';
import { LinkItem } from './LinkItem/LinkItem.jsx';
import { UserContext } from '../../../stateManagement/context/UserProvider';
import { db } from '../../../firebase';
const LinkContainer = () => {
    const { user } = React.useContext(UserContext);
    const [links, setLinks] = React.useState([]);
    const handleDelete = (id)=>{
        db.collection('usuarios').doc(String(user.uid)).collection('links').doc(id).delete()
    }
    const cargarLinks = async () => {
        const ref = await db.collection('usuarios').doc(String(user.uid)).collection('links');
        await ref.onSnapshot(snap => {
            const arrayLinks = [];
            snap.forEach(snapHijo => {
                const doc = {
                    id: snapHijo.id,
                    ...snapHijo.data(),
                };
                arrayLinks.push(doc);
            });
            // console.log(arrayLinks);
            setLinks(arrayLinks);
        });
    };
    const unsubscribe = () => {
        db.collection('usuarios')
            .doc(String(user.uid))
            .collection('links')
            .onSnapshot(() => {});
        setLinks([]);
        console.log('Cerrando Componente de ShortLinks');
    };
    React.useEffect(() => {
        cargarLinks();
        return () => {
            unsubscribe();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user.uid]);

    return (
        <section className="container link">
            <h1 className="link__title">Short Links</h1>
                {!links.length ? (<h3 style={{textAlign:'center', fontWeight:'300', color: 'var(--azul)'}}>No tienes Links cargados en la base de datos. </h3>): (
                    <div className="link__container">
                        {links.map(link => {
                            return (
                                <LinkItem
                                    key={link.id}
                                    title={link.title}
                                    desc={link.desc}
                                    link={link.link}
                                    id={link.id}
                                    handleDelete={handleDelete}
                                />
                            );
                        })}
                    </div>
                )}
            <ButtonAddLink />
        </section>
    );
};

export default LinkContainer;
