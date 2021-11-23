import db from "./firebase";
import { setDoc, doc, deleteDoc } from '@firebase/firestore';

/* SET INFO, IF INFO IS ALREADY IN THE DATABASE, REPLACES IT */
export const handleEdit = async (noticia) => {
    const docRef = doc(db,"noticias-etiquetadas",noticia.uuid);
    const payload = noticia;
    setDoc( docRef, payload )
}

/* EDIT DOCUMENT VIA PROMPT */
export const handleEdit2 = async (noticia) => {
    const etiqueta = prompt("Reingrese nombre de etiquetado");
    const comentario= prompt("Reingrese comentario");
    
    //validacion
    if (etiqueta === null || comentario === null) return;
    if (etiqueta.trim() === '' || comentario.trim() === '') return;

    //asignacion variables
    noticia.etiqueta = etiqueta;
    noticia.comentario = comentario;

    //asignacion firebase
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