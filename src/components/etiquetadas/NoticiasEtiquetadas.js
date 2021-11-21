import React, {useState, useEffect, Fragment} from 'react';
import db from '../../firebase';
import { onSnapshot, collection } from '@firebase/firestore';
import { handleDelete } from '../../utility';
import '../../style/NoticiasEtiquetadas.css';

// Esta informacion se ordena por id si no recuerdo mal, por lo que se podria mejorar
const NoticiasEtiquetadas = () => {

    const [noticiasEtiquetadas, setNoticiasEtiquetadas] = useState ([]);

    useEffect(
        () =>
        onSnapshot(collection(db,"noticias-etiquetadas"), (snapshot) => 
            setNoticiasEtiquetadas(snapshot.docs.map( (doc) => ({...doc.data() }) ) )
        ),
        []
    );
    
    return (
    <div className = "container-news">
        {noticiasEtiquetadas.map( noticia => (
            <Fragment key = {noticia.uuid}>
                <div className = "line"></div>
                <div>
                    <h3>{noticia.title}</h3>
                    <a href={noticia.url}>Noticia original</a>
                    <p><span>Etiqueta:</span> {noticia.etiqueta}</p>
                    <p><span>Comentario analista:</span> {noticia.comentario}</p>
                    <button className= "eliminar-noticia" onClick = {() => {handleDelete(noticia.uuid)}}>
                        Eliminar noticia
                    </button>
                </div>
            </Fragment>
        ))}
    </div>
    );
}

export default NoticiasEtiquetadas;