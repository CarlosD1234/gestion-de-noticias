import React, {useState, useEffect, Fragment} from 'react';
import db from '../../firebase';
import { onSnapshot, collection } from '@firebase/firestore';
import { handleEdit } from '../../utility';
import '../../style/NoticiasEtiquetadas.css';

const EtiquetarNoticias = () => {

    const [noticiasAEtiquetar, setNoticiasAEtiquetar] = useState ([]);
    
    useEffect(
        () =>
        onSnapshot(collection(db,"noticias-etiquetadas"), (snapshot) => 
            setNoticiasAEtiquetar(snapshot.docs.map( (doc) => ({...doc.data() }) ) )
        ),
        []
    );
    
    const [info, setInfo] = useState({
        etiqueta:"",
        comentario:""
    });

    const [error, setError] = useState(false);

    const setState = e => {
        setInfo({
            ...info,
            [e.target.name] : e.target.value
        });
    }

    /* SUBMIT INFO WITH TAG */
    const submitInfo = noticia => e => {

        e.preventDefault();
        if (info.etiqueta.trim() === '' || info.comentario.trim() === ''){
            setError(true);
            return;
        }

        //Elimina mensaje de error
        setError(false);

        //Asigna la informacion de etiqueta y comentario al objeto noticia
        noticia.etiqueta = info.etiqueta;
        noticia.comentario = info.comentario;

        //Ya que paso la verificacion, la sube con el comentario y la etiqueta
        handleEdit(noticia);

        //Resetea los parametros, esto creo que no es necesario
        setInfo({
            etiqueta: "",
            comentario: ""
        })
        
        alert("¡El etiquetado y el comentario han sido subidos exitosamente!")

    }

    return (
        <div className="container-news">
            {/* Si la noticia no tiene comentario, entonces lo filtra en EtiquetarNoticias  */}
            {noticiasAEtiquetar.map(
            noticia =>
            (
            noticia.comentario === "" ? 
            <Fragment key = {noticia.uuid}>

                <div className = "line"></div>
                <div>
                    <h1 className = "titulo-noticia">{noticia.title}</h1>
                    <img src= {noticia.thread.main_image} alt={noticia.thread.site_categories[0]}/>
                    <a href={noticia.url}>Noticia original</a>
                    <p className = "parrafo">{noticia.text}</p>
                    
                    <form className ="" onSubmit = {submitInfo(noticia)}>
                        <button className = "refreshButton">
                            Subir
                        </button>
                        <input
                            type = "text"
                            name = "etiqueta"
                            placeholder = "Etiqueta"
                            className = "etiqueta"
                            onChange = {setState}
                            value = {info.etiqueta}
                        />
                        <textarea
                            type = "text"
                            name = "comentario"
                            placeholder = "Inserte comentario..."
                            className = "u-full-width"
                            onChange = {setState}
                            value = {info.comentario}
                        ></textarea>
                    </form>

                    {/* Si el formulario tiene un error, muestra mensaje */}
                    {
                        error ? <p className="comentario-error">Por favor rellene todos los campos</p>
                        : null
                    }
                    
                </div>

            </Fragment>

            : null

            ))}
        </div>
        
    );
}

export default EtiquetarNoticias;