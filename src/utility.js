import db from "./firebase";
import { setDoc, doc } from '@firebase/firestore';

export const handleEdit = async (noticia) => {
    const docRef = doc(db,"noticias-etiquetadas",noticia.uuid);
    const payload = noticia;
    setDoc( docRef, payload )
}