import React from 'react';
import './LinkContainer.css';
// import { links } from '../../../fixtures/links';
import ButtonAddLink from '../../common/ButtonAddLink/ButtonAddLink';
import { LinkItem } from './LinkItem/LinkItem.jsx';
import { db } from '../../../firebase';
import { UserContext } from '../../../stateManagement/context/UserProvider';
const LinkContainer = () => {
    const {user} = React.useContext(UserContext)
    const [links, setLinks] = React.useState([])
    const cargarLinks = async()=>{
        try {
            const getLinks = await db.collection('usuarios').doc(user.uid).collection('links').get()
            // const datos = await getLinks.docs
            
            // await datos.map( async(doc) => {
            //     console.log(doc.data())
            //     const data = await doc.data()
            //     return setLinks([...links, data ])
            // })
        } catch (error) {
            console.log(error)
            console.log('Ohh! Ocurrio un error al intar cargar tus links')
        }
    }
    React.useEffect(()=>{
        cargarLinks()
    },[])
    return (
        <section className="container link">
            <h1 className="link__title">Short Links</h1>
            <div className="link__container">
                {
                    links.map((link, key)=> {
                        return <li key={key}>{link.title}</li>
                    })
                }
                {/* {links.map((link, key) => {
                    return (
                        <LinkItem key={key} title={link.title} desc={link.desc} link={link.link} />
                    );
                })} */}
            </div>
            <ButtonAddLink/>
        </section>
    );
};

export default LinkContainer;
