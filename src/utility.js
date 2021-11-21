import db from "./firebase";
import { setDoc, doc, deleteDoc } from '@firebase/firestore';

/* SET INFO, IF INFO IS ALREADY IN THE DATABASE, REPLACES IT */
export const handleEdit = async (noticia) => {
    const docRef = doc(db,"noticias-etiquetadas",noticia.uuid);
    const payload = noticia;
    setDoc( docRef, payload )
}

/* DELETE INFO */
export const handleDelete= async (id) => {
    if (window.confirm("¿Estas seguro que quieres eliminar PERMANENTEMENTE este etiquetado?")){
        const docRef = doc(db,"noticias-etiquetadas",id);
        await deleteDoc(docRef);
    }
    return;
}