import React, {useState} from 'react';

import { handleEdit } from '../utility';

import '../style/News.css'



const News = ({noticia}) => {

    /* INFO NOTICIA IMAGEN */
    const imagen = noticia.thread.main_image;
    const alt = noticia.thread.site_categories[0];

    /* ADDING INFO */

    const [info, setInfo] = useState({
        etiqueta:"",
        comentario:""
    });


    /* INPUT VALIDATION */
    const [error, setError] = useState(false);

    const setState = e => {
        setInfo({
            ...info,
            [e.target.name] : e.target.value
        });
    }

    /* SUBMIT INFO */

    const submitInfo = e => {
        e.preventDefault();
        if (info.etiqueta.trim() === '' || info.comentario.trim() === ''){
            setError(true);
            return;
        }
        //Elimina mensaje
        setError(false);

        //Asigna la informacion de etiqueta y comentario al objeto noticia
        noticia.etiqueta = info.etiqueta;
        noticia.comentario = info.comentario;

        //Mandar a base de datos (ya que paso la verificacion)
        
        handleEdit(noticia);

        setInfo({
            etiqueta: "",
            comentario: ""
        })

        alert("¡El etiquetado y el comentario han sido subidos exitosamente!")

    }

    return (
        <div className ="container-news">
            <div className ="line"></div>
            <h1 className = "titulo-noticia">{noticia.title}</h1>
            <img src= {imagen} alt={alt}/>
            <a className = "link" href={noticia.url}>Más información aquí</a>
            <p className = "parrafo">{noticia.text}</p>
            <form className ="" onSubmit = {submitInfo}>
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

            {
                error ? <p className="comentario-error">Por favor rellene todos los campos</p>
                : null
            }

        </div>
    );
}

export default News;