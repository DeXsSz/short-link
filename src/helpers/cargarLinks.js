// import { db } from '../firebase';
// export const cargarLinks = async user => {
//     try {
//         const refCollection = await db.collection('usuarios').doc(user.uid);
//         const refDocs = await refCollection.collection('links').get();
//         const arr = [];
//         await refDocs.forEach(doc => {
//             const document = {
//                 id: doc.id,
//                 ...doc.data(),
//             };
//             arr.push(document);
//         });
//         return arr;
//     } catch (error) {
//         console.log(error);
//         console.error('Ocurrio un error en cargarLinks.js');
//     }
// };
